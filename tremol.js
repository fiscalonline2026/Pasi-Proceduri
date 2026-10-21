// ==================== TREMOL - TOATE PROCEDURILE ====================

const tremolProcedures = {
    "Fiscalizare": {
        description: "Procedura completă de fiscalizare pentru casele de marcat TREMOL S25, M20 și ADPOS",
        steps: [
            "Porniți casa de marcat",
            "Intrați în meniul PROGRAM: tastează 33333",
            "Selectați tasta 7 pentru a comuta în modul LINE",
            "Deschideți programul ECR Manager pe PC",
            "Setați antetul societății (denumire, adresă, CIF)",
            "Deschideți programul FP_cmd_ro",
            "Mergeți la meniul service",
            "Introduceți parola de service:",
            "Pentru modelele Valmed: 000000",
            "Pentru modelele ADPOS: ADPOSF",
            "Setați data și ora corectă (se poate prelua automat de la PC)",
            "Verificați în Registrul TVA statutul societății conform CIF-ului",
            "Setați cotele de TVA corespunzătoare:",
            "Accesați 'Set VAT Rates' → Read",
            "Programați departamentele",
            "Programați articolele (PLU), adaugare manuală sau import fișier specific",
            "Din meniul service, accesați secțiunea 'Fiscalization'",
            "Setați:VAT no = CUI-ul societății, FM no = NUI-ul primit de la ANAF, Owner VAT = YES (dacă e plătitor TVA) sau NO, Apăsați FISCALIZE",
            "Verificați pe bonul emis corectitudinea datelor, Confirmați cu YES",
            "Deschideți programul ANAF_Profile_Loader,Încărcați profilul ANAF și certificatul digital,a păsați 'Store to device'",
            "Setați conexiunea la internet:Apăsați tasta MODE, Mergeți în meniul 9, Selectați GPRS/WiFi/LAN, Confirmați cu TOTAL  ",
            "Activați cartela SIM (dacă folosiți GPRS) din platforma distribuitorului",
            "Emitere bon de test și raport Z",
            "Reporniți casa de marcat",
            "Setați data următoarei revizii tehnice anuale: Program → 33333 → 8 → 5 → 3,  Introduceți parola 12345, Introduceți data (cu un an înainte), Puneți eticheta de service",
            "Verificarea transmiterii: Din meniul principal, apăsați tasta ST, Trebuie să apară situația 0001/0001"
        ],
        warnings: [
            "Dacă nivelul bateriei este scăzut, lăsați casa la încărcat minim 15-20 de minute înainte",
            "Nu uitați să generați declarația de instalare inițială",
            "Completați cartea de intervenție și registrul special",
            "Verificați cu atenție datele introduse înainte de confirmarea finală"
        ],
        tools: "Software ECR Manager, FP_cmd_ro, ANAF_Profile_Loader, cablu micro/mini USB, stick USB pentru certificat"
    },
    
    "Mod conectare la server ANAF": {
        description: "Configurare conexiune la serverele ANAF pentru transmiterea datelor fiscale",
        steps: [
            "Activează SIM-ul (dacă este cazul) din platforma distribuitorului",
            "Intră în meniul de programare: Program → 33333",
            "Accesează meniul 9 (Periferice)",
            "Selectează GPRS/WiFi/LAN",
            "Alege modul de conectare (GPRS, WiFi sau LAN)",
            "Confirmă cu TOTAL",
            "Pentru conexiune WiFi, selectează rețeaua și introdu parola",
            "Pentru conexiune GPRS, verifică platforma distribuitorlui",
            "Efectuează un test de conexiune din meniul principal unde scrie ziua, data si ora se apasa ST, si din meniul 8 facem testul GPRS,WIFI sau LAN",
        ],
        warnings: [
            "Asigură-te că SIM-ul are date mobile activate și credit suficient",
            "Verifică setările APN corecte pentru furnizorul de rețea"
        ],
        tools: "Acces la platforma Valmed sau ADPOS pentru activare SIM"
    },
    
    "Instructaj client": {
        description: "Instrucțiuni simplificate pentru casa de marcat TREMOL S25",
        steps: [
            "Pornire casă de marcat: Ține apăsată tasta ON pentru 2 secunde",
            "Mod vânzare: Cu tasta MODE se va merge pe REG OPER → parola 0 → TOTAL",
            "Vânzare:antitate --> QTY --> suma --> VD --> Nr. articol--> PLU --> ST --> Total",
            "Anulare vânzare înainte de total: VD → ST(0.00) → TOTAL",
            "Raport Z: Cu tasta MODE mergi pe Raport Z, parola 11111, alege Raport Zilnic → TOTAL ",
            "Raport X: Cu tasta MODE mergi pe Raport X, parola 22222, Alege Raport Zilnic X → TOTAL ",
            "Verificare status transmitere ANAF:",
            "Pe ecranul principal (DATA+ORA) apasă ST (SUBTOTAL)"
        ],
        warnings: [
            "Verifică întotdeauna data și ora înainte de începerea programului",
            "Păstrează toate rapoartele Z pentru evidență"
        ]
    },
    
    "Revizie AMEF": {
        description: "Procedura completă de revizie tehnică pentru casele TREMOL",
        steps: [
            "După ce casa de marcat s-a pornit, verifică data și ora să fie setate corect",
            "Apasă tasta STL din meniul principal pentru a verifica dacă au fost transmise toate rapoartele Z",
            "Setarea noii date pentru SERVICE:  Program → 33333 → 8 → 5 → 3, Introdu parola 12345 sau parola tehnicianului (după caz), Introdu data (cu un an înainte)",
            "Parolă master pentru TREMOL M20 (în cazul în care nu se știe parola de service):",
            "   • Program → 33333 → 8 → 5 → 5",
            "   • Parola: 47629",
            "Efectuează testele de bază: Test display, Test tastatură, Test imprimantă ",
            "Pune eticheta de service cu data următoarei revizii",
            "Completează cartea de intervenții"
        ],
        warnings: [
            "Asigură-te că ai efectuat toate testele de diagnostic înainte de finalizare",
            "Curăță cu atenție senzorii și capul de imprimare"
        ],
        tools: "Soluție curățare cap imprimare, aer comprimat"
    },
    
    "Schimbare punct de lucru": {
        description: "Procedură pentru modificarea adresei punctului de lucru",
        steps: [
            "Deschide programul ECR MANAGER",
            "Conectează casa de marcat la PC în mod LINE",
            "Accesează secțiunea de antet (Header)",
            "Modifică adresa cu noul punct de lucru conform certificatului constatator",
            "După modificare, apasă tasta LA ECR pentru a programa modificarea în casă",
            "Verifică pe un bon de test că noua adresă apare corect",
            "Treci în registrul special și cartea de intervenții noul punct de lucru",
            "Generează noua declarație de instalare"
        ],
        warnings: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat (cu noul punct de lucru, maxim 30 zile), Declarația F4105",
            "Modificarea se poate face doar în baza documentelor oficiale",
            "Verifică de două ori corectitudinea datelor înainte de programare"
        ],
        tools: "Cablu USB, program ECR MANAGER"
    },
    
    "Schimbare cote TVA": {
        description: "Procedură pentru modificarea cotelor de TVA",
        steps: [
            "Din casa de marcat: Program → 33333 → 3 ",
            "Scrie noile cote TVA",
            "Ieși cu tasta MODE",
        ],
        warnings: [
            "Verifică întotdeauna legislația în vigoare înainte de modificare",
            "Asigură-te că ai conexiune stabilă la PC pe toată durata procedurii"
        ],
        tools: "Cablu USB, program FP_CMD TREMOL"
    },
    
    "Introducere articole PLU": {
        description: "Procedură pentru introducerea articolelor în casa de marcat",
        steps: [
            "Pune casa de marcat în modul LINE",
            "Accesează din AMEF: Program → parola 33333 → tasta 7",
            "Deschide programul ECR MANAGER",
            "Redactează codurile PLU trimise de client",
            "Dacă articolele sunt trimise în format .xls, salvează fișierul în format .txt",
            "Importă fișierul în aplicație sau adaugă manual articolele",
            "Verifică corectitudinea datelor (cod, denumire, preț, TVA)",
            "Programează articolele în casa de marcat (apasă LA ECR)",
            "Emite un bon de test pentru verificare",
            "SAU direct din casa de marcat:",
            "Program → 33333 → 5",
            "Programează conform codului ASCII de pe tastatura AMEF"
        ],
        warnings: [
            "Respectă parametrii din tabel pentru fiecare articol",
            "Dacă s-au efectuat deja vânzări, este necesar un raport Z înainte de modificări masive"
        ],
        tools: "Cablu USB, program ECR MANAGER, fișier cu articolele în format .txt"
    },
    
    "Predare memorie fiscală": {
        description: "Procedura completă pentru predarea memoriei fiscale la TREMOL",
        steps: [
            "Porniți casa de marcat",
            "Intrați în meniul Raport X → 22222",
            "Cu săgeata în sus mergeți la VD RAPOARTE ANAF",
            "Conectați stick-ul USB prin cablul OBD la casa de marcat si xtrageți următoarele date: Raport MF detaliat, Raport JE, Export XML (pe ultimele 3 luni)",
            "Din meniul Raport X, emiteți un raport sumar din MF: MF → rap. de data de la data fiscalizării până în data curentă",
            "Completați procesul verbal de predare-primire Memorie Fiscală",
            "Desfaceți casa de marcat: Scoateți sigiliul, Deconectați alimentarea, Extrageți JE și MF",
            "Reasamblați casa de marcat",
        ],
        warnings: [
            "Verificați existența cărții de intervenție și a recipisei F4105",
            "Salvați toate datele inclusiv SHA pe ultimele luni",
            "Stick-ul cu datele salvate, MF și JE se dau la client spre păstrare de minim 6 ani",
            "Verificați dacă toate rapoartele Z au fost transmise"
        ],
        tools: "Cablu OBD, stick USB"
    },
    
    "Înlocuire jurnal electronic": {
        description: "Schimbarea JE este necesară când este plin, se schimbă MF sau are o problemă tehnică",
        steps: [
            "Asigură-te că toate rapoartele au fost transmise și sunt în zero",
            "Desigilează AMEF-ul (dacă este cazul)",
            "Ridică capacul superior",
            "Pune jumperul pe service",
            "Pune noul SD Card (JE) în soclu",
            "Pornește AMEF-ul",
            "Pe ecran va apărea mesajul 'SD init?'",
            "Confirmă cu TOTAL",
            "Programează data și ora",
            "AMEF-ul va printa modificările și inițializarea noului SD card",
            "Oprește AMEF-ul",
            "Pune jumperul pe locul initial ",
            "Pornește AMEF-ul",
            "Verifică funcționarea corectă printr-un bon de test",
            "Completează cartea de intervenții cu seria JE-ului nou"
        ],
        warnings: [
            "JE-ul trebuie comandat special pentru modelul de casă",
            "Asigură-te că toate rapoartele sunt în zero înainte de schimbare",
            "Păstrează JE-ul defect pentru eventuale controale"
        ],
        tools: "Șurubelnițe, jumper, JE nou specific modelului"
    },
    
    "Înlocuire placă de bază": {
        description: "Manualul furnizat este un manual de utilizare și nu descrie demontarea sau înlocuirea internă a acestei componente.",
        steps: [
            "Opriți AMEF din meniul principal și deconectați alimentatorul extern.",
            "Nu desfaceți carcasa și nu interveniți asupra sigiliilor fiscale.",
            "Notați mesajul de eroare, seria aparatului și condițiile în care a apărut defectul.",
            "Predați aparatul unei unități de service autorizate pentru diagnostic și înlocuirea componentei.",
            "După intervenție, verificați funcționarea prin testele prevăzute de model și consemnați operația în cartea de intervenții."
        ],
        warnings: [
            "Procedura internă nu este publicată în manualul încărcat; pașii de demontare nu trebuie inventați.",
            "Intervențiile asupra componentelor fiscale sau sigiliilor se execută exclusiv de tehnician autorizat."
        ]
    },
    
    "Înlocuire modul SAM": {
        description: "Manualul furnizat este un manual de utilizare și nu descrie demontarea sau înlocuirea internă a acestei componente.",
        steps: [
            "Opriți AMEF din meniul principal și deconectați alimentatorul extern.",
            "Nu desfaceți carcasa și nu interveniți asupra sigiliilor fiscale.",
            "Notați mesajul de eroare, seria aparatului și condițiile în care a apărut defectul.",
            "Predați aparatul unei unități de service autorizate pentru diagnostic și înlocuirea componentei.",
            "După intervenție, verificați funcționarea prin testele prevăzute de model și consemnați operația în cartea de intervenții."
        ],
        warnings: [
            "Procedura internă nu este publicată în manualul încărcat; pașii de demontare nu trebuie inventați.",
            "Intervențiile asupra componentelor fiscale sau sigiliilor se execută exclusiv de tehnician autorizat."
        ]
    },
    
    "Prelungire abonament de date AMEF": {
        description: "Prelungire abonament pentru cartela SIM",
        steps: [
            "Accesați platforma Valmed (pentru modelele Valmed) sau platforma ADPOS",
            "Autentificați-vă în contul de service",
            "Selectați casa de marcat TREMOL",
            "Alegeți opțiunea 'Prelungire abonament'",
            "Selectați perioada dorită",
            "Efectuați plata",
            "Verificați noul termen în casa de marcat"
        ]
    },
    
    "Înlocuire placă de alimentare": {
        description: "Manualul furnizat este un manual de utilizare și nu descrie demontarea sau înlocuirea internă a acestei componente.",
        steps: [
            "Opriți AMEF din meniul principal și deconectați alimentatorul extern.",
            "Nu desfaceți carcasa și nu interveniți asupra sigiliilor fiscale.",
            "Notați mesajul de eroare, seria aparatului și condițiile în care a apărut defectul.",
            "Predați aparatul unei unități de service autorizate pentru diagnostic și înlocuirea componentei.",
            "După intervenție, verificați funcționarea prin testele prevăzute de model și consemnați operația în cartea de intervenții."
        ],
        warnings: [
            "Procedura internă nu este publicată în manualul încărcat; pașii de demontare nu trebuie inventați.",
            "Intervențiile asupra componentelor fiscale sau sigiliilor se execută exclusiv de tehnician autorizat."
        ]
    },
    
    "Înlocuire baterie RAM": {
        description: "Înlocuire baterie RAM pe placa de bază",
        steps: [
            "Pregătește o baterie RAM specifică casei de marcat",
            "Măsoară bateria nouă - trebuie să aibă valori între 3-3.5V",
            "Desface casa de marcat cu atenție",
            "Deconectează alimentarea și componentele care nu permit întoarcerea plăcii de bază",
            "Dezlipiți bateria RAM veche cu grijă",
            "Lipiți bateria RAM nouă în poziția corectă",
            "Măsoară din nou pentru siguranță",
            "Atașează toate panglicile și componentele înapoi",
            "Pune casa la alimentare și pornește",
            "La pornire, trece parola de service (implicit 0000)",
            "Setează data și ora din acel moment",
            "Atașează bonul emis în cartea de intervenții"
        ],
        tools: "Baterie RAM nouă, lipit, multimetru, șurubelnițe"
    },
    
    "Înlocuire tastatură AMEF": {
        description: "Manualul furnizat este un manual de utilizare și nu descrie demontarea sau înlocuirea internă a acestei componente.",
        steps: [
            "Opriți AMEF din meniul principal și deconectați alimentatorul extern.",
            "Nu desfaceți carcasa și nu interveniți asupra sigiliilor fiscale.",
            "Notați mesajul de eroare, seria aparatului și condițiile în care a apărut defectul.",
            "Predați aparatul unei unități de service autorizate pentru diagnostic și înlocuirea componentei.",
            "După intervenție, verificați funcționarea prin testele prevăzute de model și consemnați operația în cartea de intervenții."
        ],
        warnings: [
            "Procedura internă nu este publicată în manualul încărcat; pașii de demontare nu trebuie inventați.",
            "Intervențiile asupra componentelor fiscale sau sigiliilor se execută exclusiv de tehnician autorizat."
        ]
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire display la TREMOL",
        steps: [
            "Identifică corect modelul de display aferent casei de marcat",
            "Desface cu atenție casa de marcat până când poți accesa afișajul",
            "Deconectează acumulatorul casei de marcat",
            "Îndepărtează afișajul din portul la care este conectat",
            "Conectează cu atenție afișajul nou",
            "Asamblează casa de marcat",
            "Verifică funcționalitatea afișajului nou"
        ],
        tools: "Display nou specific modelului, șurubelnițe"
    },
    
    "Înlocuire acumulator": {
        description: "Înlocuire acumulator intern",
        steps: [
            "Caută un acumulator compatibil cu modelul casei de marcat",
            "Desface carcasa",
            "Scoate acumulatorul vechi din portul plăcii de bază",
            "Verifică acumulatorul nou să nu aibă defecțiuni",
            "Atașează în portul dedicat din placa de bază",
            "Asamblează carcasa"
        ],
        tools: "Acumulator nou compatibil, șurubelnițe"
    },
    
    "Înlocuire imprimantă termică": {
        description: "Manualul furnizat este un manual de utilizare și nu descrie demontarea sau înlocuirea internă a acestei componente.",
        steps: [
            "Opriți AMEF din meniul principal și deconectați alimentatorul extern.",
            "Nu desfaceți carcasa și nu interveniți asupra sigiliilor fiscale.",
            "Notați mesajul de eroare, seria aparatului și condițiile în care a apărut defectul.",
            "Predați aparatul unei unități de service autorizate pentru diagnostic și înlocuirea componentei.",
            "După intervenție, verificați funcționarea prin testele prevăzute de model și consemnați operația în cartea de intervenții."
        ],
        warnings: [
            "Procedura internă nu este publicată în manualul încărcat; pașii de demontare nu trebuie inventați.",
            "Intervențiile asupra componentelor fiscale sau sigiliilor se execută exclusiv de tehnician autorizat."
        ]
    },
    
    "Listă erori AMEF": {
        description: "Listă completă de coduri de erori pentru casele TREMOL",
        errors: [
            { code: "LIPSA HARTIE", displayText: "LIPSA HARTIE", description: "Lipsă hârtie în imprimantă. AMEF se blochează și afișează acest mesaj.", solution: ["Deschideți imprimanta prin ridicarea manetei de pe capacul imprimantei","Scoateți capetele rolei vechi și eventualele resturi","Introduceți rola nouă de hârtie termică cu partea termosensibilă în jos","Trageți capătul liber al rolei în așa fel încât să iasă în afara locașului","Închideți capacul interior printr-o apăsare ușoară","Închideți capacul superior al imprimantei și treceți capătul liber prin fanta acestuia"] },
            { code: "RAM RESET", displayText: "RAM RESET", description: "Eroare în memoria operațională AMEF - memoria nulă. Date incorecte în memoria operațională.", solution: ["AMEF va citi informația din memoria fiscală și va invita operatorul să fixeze data curentă și ora","Introduceți data curentă în format ZZ LL AA și confirmați","Introduceți ora curentă în format OO MM și confirmați","După anularea RAM, toți parametrii AMEF vor fi restabiliți de către memoria EEPROM","Dacă memoria EEPROM este defectă, parametrii vor fi reconstituiți implicit","Reprogramați parametrii dacă este necesar"], urgent: true }
        ]
    },
        "Parametri de sistem": {
        description: "Configurarea parametrilor de sistem pentru TREMOL",
        steps: [
            "Accesați programul FP_CMD TREMOL",
            "Conectați casa de marcat la PC",
            "Explorați meniurile de configurare",
            "Modificați parametrii conform necesităților"
        ],
        parameters: [
            { nr: 1, nume: "Data și ora", desc: "Setare dată și oră corectă" },
            { nr: 2, nume: "Antet", desc: "Datele firmei" },
            { nr: 3, nume: "Cote TVA", desc: "Procentele de TVA" }
        ]
    }
};