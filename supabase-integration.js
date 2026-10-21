// Cheie publica destinata browserului. NU introduceti aici cheia sb_secret.
const SUPABASE_URL = 'https://eozwsqvnbnjmzovzhfri.supabase.co';
const SUPABASE_PUBLIC_KEY = 'sb_publishable_6v2YICxpzF9NKiB_av8iYw_ChkxWSTS';
const SUPABASE_TABLE = 'expert_procedures';
let supabaseSession = null;
let lastSync = null;
const syncState = document.createElement('div');
syncState.id = 'supabaseStatus';
syncState.className = 'supabase-status';
syncState.textContent = 'Se conectează la Supabase…';
const authPanel = document.createElement('div');
authPanel.className = 'supabase-auth';
authPanel.innerHTML = `<span id="authLabel">Editarea necesită autentificare.</span>
  <input id="authEmail" type="email" placeholder="Email coleg" autocomplete="username" aria-label="Email" />
  <input id="authPassword" type="password" placeholder="Parolă" autocomplete="current-password" aria-label="Parolă" />
  <button type="button" id="authLogin">Autentificare</button>
  <button type="button" id="authLogout" hidden>Deconectare</button>`;
document.querySelector('.app-footer')?.before(syncState);
syncState.after(authPanel);
function supabaseHeaders(token = null) {
  return {'apikey': SUPABASE_PUBLIC_KEY, 'Authorization': 'Bearer ' + (token || SUPABASE_PUBLIC_KEY), 'Content-Type': 'application/json'};
}
function setSyncStatus(message, error = false) {
  syncState.textContent = message;
  syncState.classList.toggle('sync-error', error);
}
function updateAuthUI() {
  const logged = !!supabaseSession?.access_token;
  document.getElementById('authLabel').textContent = logged ? `Conectat: ${supabaseSession.user?.email || 'utilizator'}` : 'Autentifică-te pentru a edita procedurile.';
  for (const id of ['authEmail', 'authPassword', 'authLogin']) document.getElementById(id).hidden = logged;
  document.getElementById('authLogout').hidden = !logged;
}
async function supabaseLogin() {
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  if (!email || !password) return alert('Introdu emailul și parola.');
  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {method:'POST', headers:supabaseHeaders(), body:JSON.stringify({email,password})});
    const result = await response.json();
    if (!response.ok) throw new Error(result.msg || result.error_description || result.message || 'Autentificare eșuată');
    supabaseSession = result;
    sessionStorage.setItem('expert-supabase-session', JSON.stringify(result));
    document.getElementById('authPassword').value = '';
    updateAuthUI();
    setSyncStatus('Autentificat. Modificările se salvează în Supabase.');
  } catch (error) { alert('Autentificare eșuată: ' + error.message); }
}
async function ensureFreshSession() {
  if (!supabaseSession) return false;
  if (Date.now() < ((supabaseSession.expires_at || 0) * 1000 - 60000)) return true;
  if (!supabaseSession.refresh_token) return false;
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {method:'POST', headers:supabaseHeaders(), body:JSON.stringify({refresh_token:supabaseSession.refresh_token})});
  if (!response.ok) { supabaseSession = null; sessionStorage.removeItem('expert-supabase-session'); updateAuthUI(); return false; }
  const next = await response.json();
  supabaseSession = next;
  sessionStorage.setItem('expert-supabase-session', JSON.stringify(next));
  updateAuthUI();
  return true;
}
async function loadCloudProcedures() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?select=model,procedure,content,updated_at&limit=1000`, {headers:supabaseHeaders(), cache:'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    const rows = await response.json();
    for (const row of rows) {
      if (procedureDetails[row.model] && Object.prototype.hasOwnProperty.call(procedureDetails[row.model], row.procedure) && row.content && Array.isArray(row.content.steps)) {
        procedureDetails[row.model][row.procedure] = row.content;
      }
    }
    lastSync = new Date();
    setSyncStatus(`Sincronizat cu Supabase · ${lastSync.toLocaleTimeString('ro-RO')}`);
    if (currentProcedure && !document.getElementById('mfDescription')) showDetails(currentProcedure);
  } catch (error) { setSyncStatus('Sincronizarea Supabase a eșuat: ' + error.message, true); }
}
async function saveCloudProcedure(model, procedure, content) {
  if (!(await ensureFreshSession())) throw new Error('Autentifică-te înainte de salvare.');
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}?on_conflict=model,procedure`, {
    method:'POST', headers:{...supabaseHeaders(supabaseSession.access_token), 'Prefer':'resolution=merge-duplicates,return=minimal'},
    body:JSON.stringify({model,procedure,content})
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  setSyncStatus('Procedura a fost salvată în Supabase și este disponibilă colegilor.');
}
document.getElementById('authLogin').addEventListener('click', supabaseLogin);
document.getElementById('authLogout').addEventListener('click', () => {
  supabaseSession = null;
  sessionStorage.removeItem('expert-supabase-session');
  updateAuthUI();
});
try { supabaseSession = JSON.parse(sessionStorage.getItem('expert-supabase-session') || 'null'); } catch (_) {}
updateAuthUI();
loadCloudProcedures();
// Actualizari la revenirea in pagina si periodic; nu suprascrie editorul deschis.
window.addEventListener('focus', () => { if (!document.getElementById('mfDescription')) loadCloudProcedures(); });
setInterval(() => { if (!document.hidden && !document.getElementById('mfDescription')) loadCloudProcedures(); }, 30000);
