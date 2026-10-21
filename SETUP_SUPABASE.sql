-- Ruleaza acest script in Supabase > SQL Editor, o singura data.
-- Vizualizare publica; modificare doar de utilizatori autentificati.
-- Creeaza conturi pentru colegi din Supabase > Authentication > Users.
create table if not exists public.expert_procedures (
  model text not null,
  procedure text not null,
  content jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid default auth.uid(),
  primary key (model, procedure),
  constraint valid_model check (model in ('datecs','daisy','incotex','tremol','partner','zit')),
  constraint valid_content check (jsonb_typeof(content) = 'object')
);
alter table public.expert_procedures enable row level security;
grant select on public.expert_procedures to anon, authenticated;
grant insert, update on public.expert_procedures to authenticated;
drop policy if exists "Public can read procedures" on public.expert_procedures;
create policy "Public can read procedures" on public.expert_procedures for select to anon, authenticated using (true);
drop policy if exists "Authenticated users can insert procedures" on public.expert_procedures;
create policy "Authenticated users can insert procedures" on public.expert_procedures for insert to authenticated with check (true);
drop policy if exists "Authenticated users can update procedures" on public.expert_procedures;
create policy "Authenticated users can update procedures" on public.expert_procedures for update to authenticated using (true) with check (true);
create or replace function public.expert_touch_procedure() returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  new.updated_by = auth.uid();
  return new;
end; $$;
drop trigger if exists expert_procedures_touch on public.expert_procedures;
create trigger expert_procedures_touch before insert or update on public.expert_procedures
for each row execute function public.expert_touch_procedure();
