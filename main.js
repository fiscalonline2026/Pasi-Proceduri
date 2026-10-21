// ==================== LISTA COMPLETĂ A PROCEDURILOR ====================
const allProcedures = [
    "Fiscalizare", "Mod conectare la server ANAF", "Instructaj client", "Revizie AMEF",
    "Schimbare punct de lucru", "Schimbare cote TVA", "Introducere articole PLU",
    "Predare memorie fiscală", "Schimbare memorie fiscala", "Înlocuire jurnal electronic", "Înlocuire placă de bază",
    "Înlocuire modul SAM", "Prelungire abonament de date AMEF", "Înlocuire placă de alimentare",
    "Înlocuire baterie RAM", "Înlocuire tastatură AMEF", "Înlocuire display client-operator",
    "Înlocuire acumulator", "Înlocuire imprimantă termică", "Listă erori AMEF", "Parametri de sistem"
];

// Combină toate procedurile din fișierele externe
const procedureDetails = {
    datecs: typeof datecsProcedures !== 'undefined' ? datecsProcedures : {},
    daisy: typeof daisyProcedures !== 'undefined' ? daisyProcedures : {},
    incotex: typeof incotexProcedures !== 'undefined' ? incotexProcedures : {},
    tremol: typeof tremolProcedures !== 'undefined' ? tremolProcedures : {},
    partner: typeof partnerProcedures !== 'undefined' ? partnerProcedures : {},
    zit: typeof zitProcedures !== 'undefined' ? zitProcedures : {}
};

// Completează procedurile lipsă pentru fiecare model
const models = ["datecs", "daisy", "incotex", "tremol", "partner", "zit"];
models.forEach(model => {
    allProcedures.forEach(proc => {
        if (!procedureDetails[model][proc]) {
            procedureDetails[model][proc] = {
                description: `Procedura nu este documentată în manualul disponibil pentru ${model.toUpperCase()}.`,
                steps: [
                    "Verificați modelul exact și versiunea aparatului.",
                    "Nu aplicați proceduri de la alt model.",
                    "Solicitați manualul de service corespunzător sau intervenția unei unități autorizate."
                ],
                warnings: ["Nu au fost inventați pași tehnici care nu apar în documentația disponibilă."]
            };
        }
    });
});

// Proceduri precompletate din documentele furnizate (DATECS, DAISY, TREMOL, PARTNER).
const documentedMemoryProcedures = {
  "datecs": {
    "description": "Înlocuirea memoriei fiscale la DATECS DP-25, conform documentului furnizat.",
    "steps": [
      "Verificați motivul înlocuirii: MF plină, defectă, modificări ale datelor utilizatorului după 16 editări ale antetului sau schimbarea proprietarului.",
      "Pentru schimbarea proprietarului, anunțați ANAF și așteptați adresa oficială înaintea înlocuirii MF.",
      "În cazul înlocuirii/defectării MF la același comerciant, întocmiți procesul-verbal de constatare în 4 exemplare, semnat de service și utilizator; distribuiți exemplarele conform documentului.",
      "Verificați existența Cărții de intervenții și a sigiliului tehnicianului de service autorizat.",
      "Efectuați raportul zilnic Z înaintea exporturilor.",
      "Exportați fișierele .MF: meniul 3 Rapoarte Fiscale → 4 Memorie Fiscala → 4 Export F.MF; conectați stick-ul USB cu adaptorul special și selectați intervalul de rapoarte Z sau date.",
      "Exportați fișierele .JE: meniul 9 Jurnal Electronic → 1 Export Date → 3 Export F.JE; conectați suportul USB și selectați intervalul de export.",
      "Dacă aparatul este conectat la calculator, puteți folosi utilitarul software DANUBIUS EXIM pentru colectarea fișierelor.",
      "Înlocuiți memoria fiscală și, obligatoriu, dispozitivul de memorare a jurnalului electronic, conform instrucțiunilor de service pentru modelul exact.",
      "Pentru înlocuirea cardului microSD (DMJE): opriți aparatul, dezasamblați-l, extrageți cardul vechi, introduceți cardul nou, asamblați și porniți aparatul.",
      "La pornire, verificați detectarea cardului nou și atribuirea secvenței consecutive de numerotare.",
      "Întocmiți procesul-verbal de înlocuire DMJE, predați utilizatorului suportul cu rapoartele JE și cardul vechi și notați schimbarea în Cartea de intervenții."
    ],
    "warnings": [
      "Documentul se referă explicit la DATECS DP-25; nu extindeți automat pașii la alte modele DATECS.",
      "Înlocuirea MF impune și schimbarea dispozitivului de memorare a jurnalului electronic.",
      "MF, DMJE și suporturile electronice înlocuite se păstrează de utilizator pe durata legală de arhivare.",
      "Documentul menționează maximum 50 de schimbări de carduri DMJ.",
      "Fișierul furnizat nu detaliază demontarea și montarea fizică a modulului MF; consultați manualul de service corespunzător."
    ]
  },
  "daisy": {
    "description": "Înlocuirea memoriei fiscale și a jurnalului electronic la DAISY, urmată de parametrizare și fiscalizare.",
    "steps": [
      "Pregătiți aplicația ECR Updater Service, pornită din Start Menu → Programs → ECR Updater Service; fiscalizarea necesită conexiune la Internet.",
      "Dacă aparatul permite, efectuați citirile XML pentru luna curentă și raportul sumar MF de la fiscalizare până în prezent.",
      "Pentru raportul sumar MF: apăsați MODE până apare MF, introduceți parola 9999, apoi apăsați CLK → 31 → ST → VD.",
      "Păstrați bonul scurt imprimat, care conține datele necesare predării memoriei fiscale.",
      "Deconectați aparatul de la alimentarea externă și de la acumulatorul principal, apoi desfaceți carcasa.",
      "Îndepărtați memoria fiscală și jurnalul electronic vechi.",
      "Mutați jumperul de lângă bateria RAM de pe pinii 1–2 pe pinii 2–3.",
      "Montați memoria fiscală nouă și jurnalul electronic nou; reconectați panglica criptomodulului dacă a fost scoasă din placa de bază.",
      "Conectați acumulatorul principal, apoi alimentarea externă și porniți casa de marcat.",
      "La reset, introduceți parola SERVICE 0000, setați data și ora și confirmați cu tasta ST.",
      "Așteptați afișarea mesajului „VANZARE_ _ _ _ _”.",
      "Conform documentului, readuceți jumperul în poziția inițială (pinii 1–2), apoi opriți casa de marcat și reasamblați-o.",
      "Parametrizați și fiscalizați casa de marcat cu ECR Updater Service."
    ],
    "warnings": [
      "Memoria fiscală se schimbă numai împreună cu jurnalul electronic.",
      "Documentul cere ECR Updater Service și acces la Internet pentru fiscalizare.",
      "Fișierul original conține date de autentificare pentru aplicație; acestea nu sunt incluse în procedura afișată, pentru a evita expunerea lor în interfață.",
      "Operațiile asupra jumperului și componentelor interne trebuie efectuate numai de personal de service autorizat, conform instrucțiunilor producătorului."
    ]
  },
  "tremol": {
    "description": "Înlocuirea setului de memorie fiscală și a cardului microSD la TREMOL.",
    "steps": [
      "Înainte de demontare, scoateți raportul sumar din casa de marcat, raportul J, raportul MF, precum și listele de articole și departamente.",
      "Montați noul set de memorie fiscală și cardul microSD.",
      "Puneți jumperul în modul SERVICE și porniți casa de marcat.",
      "Așteptați afișarea de trei ori a mesajului „Eroare fiscala la INR.MF”.",
      "Introduceți data și ora; mesajul de eroare se tipărește pe bon, apoi aparatul intră automat în meniul SERVICE.",
      "Apăsați tasta 8 (apare TEST), apoi tasta 0.",
      "Introduceți parola de reset 13579 și apoi data și ora.",
      "După afișarea pe bon a mesajului „PARAM. INITIALI!”, opriți casa de marcat.",
      "Scoateți jumperul din modul SERVICE și reporniți aparatul.",
      "La mesajul „Parola”, introduceți parola pentru schimbarea memoriei fiscale corespunzătoare variantei aparatului.",
      "Introduceți din nou data și ora.",
      "La mesajul „Nr. Serie”, introduceți seria casei fără caracterele „DP” și apăsați TOTAL.",
      "Verificați seria tipărită pe bon; la mesajul „Salvati?”, confirmați cu TOTAL."
    ],
    "warnings": [
      "Documentul indică parole diferite în funcție de varianta/distribuitorul aparatului: ADPOS, VALMED sau ACTIVA. Folosiți numai parola autorizată pentru echipamentul respectiv.",
      "Verificați cu atenție seria înainte de confirmarea finală.",
      "Documentul nu descrie detaliat operația de demontare/montare a modulului; urmați manualul tehnic al modelului."
    ]
  },
  "partner": {
    "description": "Exportul datelor, înlocuirea MF și JE, resetarea și reprogramarea identificatorilor la PARTNER.",
    "steps": [
      "Conectați stick-ul USB și asigurați-vă că ziua de lucru este închisă prin raportul zilnic Z.",
      "Tipăriți raportul sumar MF: MOD Z → DIN MEMORIA FISCALA → TIPARIRE → PERIODIC → SUMAR → DE LA DATA LA DATA; introduceți data DE LA și data PANA LA în format ZZ-LL-AA, confirmând fiecare cu TOTAL.",
      "Exportați MF pe USB: MOD Z → DIN MEMORIA FISCALA → SALVARE IN MEM. USB → PERIODIC → DETALIAT → DE LA DATA LA DATA; introduceți datele și confirmați cu TOTAL.",
      "Exportați jurnalul electronic: MOD X → RAPORT DIN J → SALVARE IN MEM. USB → DETALIAT → TOTUL → DE LA DATA LA DATA; introduceți intervalul ZZ-LL-AA-oo-mm, confirmați cu TOTAL și așteptați revenirea la meniu.",
      "Opriți aparatul de la comutatorul PORNIT/OPRIT din spate.",
      "Desfaceți capacul superior și șurubul de sigilare, apoi decuplați panglica memoriei din conector.",
      "Extrageți memoria fiscală veche și introduceți memoria nouă; conectați panglica noii memorii.",
      "Înlocuiți obligatoriu și dispozitivul de memorare a jurnalului electronic.",
      "Prindeți șurubul de sigilare și efectuați procedura de reset după montarea componentelor noi.",
      "Pentru reset: opriți aparatul, accesați contactele JUMP1 și JUMP2, montați câte un călăreț pe fiecare pereche de pini și așezați carcasa superioară.",
      "Instalați rola de hârtie și porniți aparatul; răspundeți la întrebările RESET PLU?, RESET DEP?, RESET GROPU? și RESET TVA? selectând 1.NU sau 2.DA după caz, apoi confirmați cu TOTAL.",
      "Introduceți data curentă în format ZZLLAAAA și ora în format OOMM, confirmând cu TOTAL; finalizați resetul cu TOTAL.",
      "Fără a opri aparatul, scoateți hârtia, desfaceți carcasa și îndepărtați ambii călăreți JUMP1/JUMP2 la mesajul „SCOATETI JUMPER”.",
      "Reașezați carcasa și hârtia; așteptați bonul care confirmă inițializarea. Apoi opriți aparatul și montați toate șuruburile.",
      "Reprogramați numărul unic și numărul serial al echipamentului înainte de refiscalizare și sigilați aparatul."
    ],
    "warnings": [
      "La înlocuirea MF este obligatorie și înlocuirea dispozitivului de memorare a jurnalului electronic.",
      "Resetul trebuie efectuat după înlocuirea MF și JE; documentul cere reset și înainte de intervenție în cazul unui aparat blocat, pentru a preveni pierderea datelor.",
      "NU OPRIȚI ECHIPAMENTUL în etapa de reset în care se scot jumperii.",
      "Introducerea unei alte serii de fabricație decât cea inițială anulează certificatul digital instalat.",
      "Resetul nu șterge certificatul digital, seria de fabricație, memoria de lucru sau numărul unic."
    ]
  }
};

// Procedura de memorie fiscala are valori initiale din documentele furnizate.
models.forEach(model => {
    const key = "Schimbare memorie fiscala";
    procedureDetails[model][key] = documentedMemoryProcedures[model] || {
        description: "Procedură în curs de completare pentru " + model.toUpperCase(),
        steps: [], warnings: [], tools: ""
    };
});

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Citește modificările făcute din interfață pentru ORICE procedură și model.
// Cheile vechi expert-mf-* rămân compatibile cu versiunile precedente.
function procedureStorageKey(model, procedure) {
    return `expert-procedure-v2:${model}:${procedure}`;
}
function loadProcedureEdits() {
    models.forEach(model => {
        Object.keys(procedureDetails[model]).forEach(procedure => {
            let stored = null;
            try {
                const raw = localStorage.getItem(procedureStorageKey(model, procedure));
                if (raw !== null) stored = JSON.parse(raw);
                else if (procedure === 'Schimbare memorie fiscala') {
                    const old = localStorage.getItem(`expert-mf-${model}`);
                    if (old !== null) stored = JSON.parse(old);
                }
            } catch (e) { console.warn('Nu s-au putut citi modificările:', e); }
            if (stored && typeof stored === 'object' && Array.isArray(stored.steps)) {
                procedureDetails[model][procedure] = { ...procedureDetails[model][procedure], ...stored };
            }
        });
    });
}

window.editProcedure = function(procedure = currentProcedure) {
    if (!supabaseSession?.access_token) { alert('Autentifică-te în partea de jos a paginii pentru a edita procedurile.'); document.getElementById('authEmail')?.focus(); return; }
    if (!procedure || !procedureDetails[currentModel]?.[procedure]) return;
    currentProcedure = procedure;
    renderProceduresList(currentModel);
    const data = procedureDetails[currentModel][procedure];
    const container = document.getElementById('procedureDetails');
    const errors = Array.isArray(data.errors) ? data.errors : [];
    container.innerHTML = `<h2>Editează: ${escapeHtml(procedure)} <small>${currentModel.toUpperCase()}</small></h2>
    <div class="procedure-content mf-editor">
      <p>Modifică procedura direct aici. Fiecare rând reprezintă un pas sau o atenționare. Modificările sunt separate pentru fiecare marcă.</p>
      <label for="mfDescription">Descriere</label><textarea id="mfDescription">${escapeHtml(data.description || '')}</textarea>
      <label for="mfSteps">Pași de urmat (un pas pe rând)</label><textarea id="mfSteps" rows="12">${escapeHtml((data.steps || []).join('\n'))}</textarea>
      <label for="mfWarnings">Atenționări (una pe rând)</label><textarea id="mfWarnings" rows="5">${escapeHtml((data.warnings || []).join('\n'))}</textarea>
      <label for="mfTools">Unelte necesare</label><textarea id="mfTools" rows="2">${escapeHtml(data.tools || '')}</textarea>
      ${errors.length ? `<label for="mfErrors">Coduri de eroare (format JSON; păstrează structura existentă)</label><textarea id="mfErrors" rows="9" spellcheck="false">${escapeHtml(JSON.stringify(errors, null, 2))}</textarea>` : ''}
      <div class="mf-actions"><button type="button" onclick="saveProcedure()">Salvează procedura</button><button type="button" class="mf-secondary" onclick="showDetails(currentProcedure)">Anulează</button></div>
      <p class="mf-note">Modificările se salvează în Supabase și devin disponibile tuturor colegilor. Este necesară autentificarea pentru salvare.</p>
    </div>`;
};
window.saveProcedure = async function() {
    if (!currentProcedure) return;
    const lines = id => document.getElementById(id).value.split('\n').map(s => s.trim()).filter(Boolean);
    const original = procedureDetails[currentModel][currentProcedure];
    const data = {
        ...original,
        description: document.getElementById('mfDescription').value.trim(),
        steps: lines('mfSteps'),
        warnings: lines('mfWarnings'),
        tools: document.getElementById('mfTools').value.trim()
    };
    const errorsField = document.getElementById('mfErrors');
    if (errorsField) {
        try {
            const errors = JSON.parse(errorsField.value);
            if (!Array.isArray(errors)) throw new Error('Lista trebuie să fie un array JSON.');
            data.errors = errors;
        } catch (e) {
            alert('Codurile de eroare trebuie să fie JSON valid. Nu s-a salvat nimic.\n' + e.message);
            return;
        }
    }
    try {
        await saveCloudProcedure(currentModel, currentProcedure, data);
    } catch (e) {
        alert('Nu s-a putut salva în Supabase. Modificările nu au fost publicate.\n' + e.message);
        return;
    }
    procedureDetails[currentModel][currentProcedure] = data;
    showDetails(currentProcedure);
};
// Compatibilitate cu butoanele din versiunile precedente.
window.editMemoryProcedure = () => window.editProcedure('Schimbare memorie fiscala');
window.saveMemoryProcedure = () => window.saveProcedure();

// Adaugă HARD RESET doar pentru DAISY
if (procedureDetails.daisy && !procedureDetails.daisy["eXpert SX procedura HARD RESET"]) {
    procedureDetails.daisy["eXpert SX procedura HARD RESET"] = {
        description: "Resetare hardware pentru DAISY Expert SX",
        steps: [
            "Îndepărtează cardul microSD",
            "Desfaceți șuruburile, decuplează acumulatorul",
            "Mută jumperul de sub bateria RAM cu un pin mai jos",
            "Apasă POWER de 3-4 ori",
            "Conectează acumulatorul, pornește",
            "Introdu parola SERVICE, setează data/ora",
            "Mută jumperul înapoi"
        ]
    };
}

loadProcedureEdits();

function getProceduresForModel(model) {
    let procs = [...allProcedures];
    if (model === 'daisy') procs.push("eXpert SX procedura HARD RESET");
    return procs;
}

let currentModel = 'zit';
let currentProcedure = null;

function renderProceduresList(model) {
    const container = document.getElementById('proceduresList');
    const searchTerm = document.getElementById('searchProcedure').value.toLowerCase();
    let procedures = getProceduresForModel(model).filter(p => p.toLowerCase().includes(searchTerm));
    const count = document.getElementById('procedureCount');
    if (count) count.textContent = procedures.length;

    if (procedures.length === 0) {
        container.innerHTML = '<div class="empty-list"><strong>Niciun rezultat</strong><br>Încearcă un alt termen de căutare.</div>';
        return;
    }

    container.innerHTML = procedures.map(proc => `
        <div class="procedure-item ${currentProcedure === proc ? 'active' : ''}" onclick="showDetails('${escapeHtml(proc).replace(/'/g, '&#39;')}')">
            <span>${proc}</span>
        </div>
    `).join('');
}

window.showDetails = function(procedure) {
    currentProcedure = procedure;
    const details = procedureDetails[currentModel]?.[procedure];
    const container = document.getElementById('procedureDetails');
    
    if (!details) {
        container.innerHTML = `<h2>${procedure}</h2><div class="procedure-content"><div class="info-box">Procedura nu este documentată în manualul disponibil.</div></div>`;
        renderProceduresList(currentModel);
        return;
    }
    
    let html = `<h2>${procedure} <small>${currentModel.toUpperCase()}</small></h2><div class="procedure-content">`;
    html += `<p><strong>Descriere:</strong> ${escapeHtml(details.description || '')}</p>`;
    html += '<button class="mf-edit-btn" onclick="editProcedure()">✎ Editează procedura</button>'; 
    
    if (details.steps && details.steps.length > 0) {
        html += '<h3>Pași de urmat:</h3><ol>';
        details.steps.forEach(step => html += `<li>${escapeHtml(step)}</li>`);
        html += '</ol>';
    }
    
    if (details.warnings) {
        html += '<div class="warning-box"><strong>Atenție!</strong><ul>';
        details.warnings.forEach(w => html += `<li>${escapeHtml(w)}</li>`);
        html += '</ul></div>';
    }
    
    if (details.tools) html += `<p><strong>Unelte:</strong> ${escapeHtml(details.tools)}</p>`;
    
    if (details.errors && details.errors.length > 0) {
        html += '<h3>Listă erori</h3><div class="error-codes-grid">';
        details.errors.forEach(err => {
            html += `<div class="error-code-item ${err.urgent ? 'urgent' : ''}">
                        <div class="error-code">Cod: ${err.code}</div>
                        <div class="error-description"><strong>Descriere:</strong> ${err.description}</div>
                        <div class="error-solution"><strong>🔧 Soluție:</strong> ${Array.isArray(err.solution) ? err.solution.join('<br>') : err.solution}</div>
                    </div>`;
        });
        html += '</div>';
    }
    
    html += '</div>';
    container.innerHTML = html;
    renderProceduresList(currentModel);
};

document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentModel = this.dataset.model;
        currentProcedure = null;
        const modelLabel = document.getElementById('currentModelLabel');
        if (modelLabel) modelLabel.textContent = currentModel.toUpperCase();
        renderProceduresList(currentModel);
        document.getElementById('procedureDetails').innerHTML = `
            <div class="empty-state">
                <div class="empty-illustration" aria-hidden="true">
                    <span class="doc-line line-one"></span><span class="doc-line line-two"></span><span class="doc-line line-three"></span><span class="doc-check">✓</span>
                </div>
                <span class="section-kicker">SPAȚIU DE LUCRU</span>
                <h2>Selectați o procedură</h2>
                <p>Alegeți o procedură din listă pentru modelul <strong>${currentModel.toUpperCase()}</strong>.</p>
            </div>`;
    });
});

document.getElementById('searchProcedure').addEventListener('input', () => renderProceduresList(currentModel));

renderProceduresList('zit');

// Scurtătură pentru focalizarea rapidă a căutării
window.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        document.getElementById('searchProcedure')?.focus();
    }
});
