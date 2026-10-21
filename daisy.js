// ==================== DAISY - TOATE PROCEDURILE ====================

const daisyProcedures = {
    "Fiscalizare": {
        description: "Procedura completă de fiscalizare pentru casele de marcat DAISY",
        steps: [
            "Pregătirea echipamentului  Mod PC: Ține apăsată tasta M până când pe ecran apare PC _ _ _ _ _, tastează 9999, apasă CLK",
            "Pe ecran va apărea simbolul USB confirmând conectarea la PC",
            "Data și ora trebuie să fie corecte înainte de fiscalizare",
            "Configurare în aplicația DAISY MANAGER: Setare antet și text final",
            "Linii antet → Citește tabelul → completează datele societății → Programează tabelul",
            "Setare cote TVA (Cote TVA → Citește tabelul → introdu cotele TVA → Programează tabelul)",
            "Fiscalizare efectivă în aplicația EcrUpdater: Deschide EcrUpdater → Fiscalization → Read",
            "Completează câmpurile: FM (numărul casei/NUI), CIF (cu RO dacă e plătitor TVA), FD (seria AMEF)",
            "Service Parola (0000) → FISCALIZATION → confirmă pe display",
            "Setări service Data următoarei revizii: În EcrUpdater, Service Setting → setează data reviziei (peste un an) → Programează",
            "Încărcare profil și certificat ANAF din EcrUpdater de la secțiunea ECR's profile activation - XML files",
            "Încarcă certificatul ANAF de la Certificates",
            "Activează abonamentul de la SIM Activation si bifeaza casuta corespunzatoare de la Rapoarte ( 12, 6 luni )",
            "Verifică antetul, cotele TVA, data/ora, FM, FD, mesajul de fiscalizare activă",
            "Se face un bon de test ( vanzare cu 1 leu ) dupa care se emite un Raport Z pentru verificarea conexiunii dintre AMEF si ANAF"
        ],
        warnings: [
            "Ordinea pașilor este obligatorie: Dată și oră, Antet, TVA, Fiscalizare, Revizie",
            "Efectuează testele 101 VD și 102 VD din meniul Program",
            "Păstrează toate rapoartele în cartea de intervenție"
        ],
        tools: "Cablu USB, Daisy Manager, EcrUpdater, fișa ANAF"
    },
    
    "Mod conectare la server ANAF": {
        description: "Configurare conexiune la serverul ANAF pentru DAISY",
        steps: [
            "Deschide aplicația ECR Updater",
            "Conectează casa de marcat în mod PC (M → 9999 → CLK)",
            "Accesează secțiunea SIM Activation",
            "Activează cartela SIM din platforma distribuitorului",
            "La secțiunea Rapoarte selectează clientul și perioada de abonament",
            "Efectuează testele 101 VD și 102 VD din meniul Program pentru verificare",
            "Verifică starea conexiunii în meniul de service"
        ],
        warnings: [
            "Asigură-te că SIM-ul are credit și semnal",
            "Efectuează testele de conexiune înainte de a da drumul la utilizare"
        ],
        tools: "Cablu USB, EcrUpdater, platformă distribuitor"
    },
    
    "Instructaj client": {
        description: "Ghid complet pentru modelele Compact S, Expert SX, Perfect M, Compact M",
        steps: [
            "Se tine apasat 3 secund pe tasta de pornire",
            "Pentru a intra in modul de Vanzare, apasam succesiv tasta Mode pana se afiseaza Vanzare",
            "Pentru logarea utilizatorului nr 1 , se tasteaza 1 apoi tasta CLK",
            "Ordiena efectuarii operatiilor este cantitate --> QTY --> pret --> VD --> cod articol --> PLU --> STL --> TOTAL",
            "Anularea inainte de emiterea bonului fiscal se face cu tasta VD --> ST (0.00) --> TOTAL",
            "Tasta Mode este si buton de back, ca sa iesim din orice meniu apasam tasta Mode",
            "Apasam succesiv pana ne apare maniul de Raport X sau Raport Z , parola este 9999--> CLK --> TOTAL , si astfel putem emite un raport X sau Z"
        ],
        warnings: [
            "Păstrează toate rapoartele Z",
            "Așteaptă confirmarea transmiterii raportului Z înainte de a opri casa"
        ]
    },
    
    "Revizie AMEF": {
        description: "Procedura pentru schimbarea datei reviziei tehnice anuale",
        steps: [
            "Apasă tasta MODE până când pe ecran este afișat Vanzare",
            "Tastează parola de service (implicit 0000 sau cea setată de tehnician)",
            "Apasă combinația ALT + VD (ține ALT și apasă VD)",
            "Pe ecran apare Data service. Introdu data sub forma ZZLLAA",
            "Apasă ST. Pe ecran apare Parola: și parola de service setată",
            "Confirmă cu ST",
            "Efectuează testele de bază 55 → VD, 101 → VD, 102 → VD",
            "Curăță casa de marcat și pune eticheta de service cu data următoarei revizii",
            "Completează cartea de intervenții"
        ],
        warnings: [
            "Efectuează testele de bază înainte de finalizare",
            "Asigură-te că data setată este corectă (cu un an înainte)"
        ]
    },
    
    "Schimbare punct de lucru": {
        description: "Schimbarea punctului de lucru se face doar în antetul fiscal",
        steps: [
            "Conectează AMEF la PC folosind cablu USB A-B",
            "Pune casa în mod PC (M → 9999 → CLK)",
            "Deschide Daisy Manager și mergi la Linii antet",
            "Modifică adresa cu noul punct de lucru",
            "Apasă PROGRAMEAZĂ TABELUL. Se va cere parola de service (setată de tehnician)",
            "Verifică pe un bon de test că noua adresă apare corect",
            "Înregistrează modificarea în cartea de intervenții"
        ],
        warnings: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat (cu noul punct de lucru, maxim 30 zile), Declarația F4105",
            "Modificarea se poate face doar în baza documentelor oficiale",
            "Parola de service este de obicei cea setată la instalare"
        ],
        tools: "Cablu USB, Daisy Manager"
    },
    
    "Schimbare cote TVA": {
        description: "Procedură simplă de modificare a cotelor TVA",
        steps: [
           "Mergem la meniul PROGRAM si tastam parola 9999 --> CLK",
           "Apasam tastele ALT + QTY , setam cotele de TVA, mutam de la Cota A la Cota B cu tasta TOTAL",
           "Cand toate cotele sunt setate corect se salveaza cu tasta Mode"
        ],
        warnings: [
            "Verifică în Registrul ANAF dacă firma este plătitoare sau neplătitoare de TVA",
        ]
    },
    
    "Introducere articole PLU": {
        description: "Adăugarea, modificarea sau ștergerea articolelor",
        steps: [
            "Pregătește lista de articole în format Excel (.xls)",
            "Conectează casa în mod PC și deschide Daisy Manager",
            "Accesează bara ARTICOLE",
            "Poți importa un fișier .xls (BARA STANGA SUS FISIER) sau adăuga manual cu butonul +",
            "Completează cod PLU, denumire, preț, cota TVA și salvează",
            "Apasă PROGRAMEAZĂ TABELUL pentru a trimite articolele în casă",
            "Dacă apare că nu s-au încărcat toate, înseamnă că trebuie golite rapoartele (rap.PLU, rap.dep, rap.operator, raport Z)",
            "După programare, salvează fișierul în format .xls pentru evidență",
            "Emite un bon de test pentru verificare"
        ],
        warnings: [
            "Respectă parametrii din tabel",
            "Dacă s-au efectuat vânzări, este necesar un Raport Z pe articole înainte de modificări"
        ]
    },
    
    "Predare memorie fiscală": {
        description: "Procedură de predare a memoriei fiscale pentru DAISY",
        steps: [
            "Înainte de începere, salvează datele din AMEF",
            "Din meniul casei: Program → 9999 CLK → teste de conexiune pentru verificare Z-uri",
            "Din meniul MF → 9999 CLK, emite raport sumar: 31 ST/STL → data fiscalizării → QTY → data curentă → VD",
            "Conectează casa în mod PC la calculator, pornește Daisy Manager",
            "Din secțiunea Altele, citește MF și JE de la data fiscalizării până în prezent",
            "Salvează XML-urile din meniul Rapoarte → Raport MF → SHA pe ultimele 3 luni",
            "Salvează toate datele într-un folder, apoi pe stick USB pentru client",
            "Generează proces verbal de predare-primire Memorie Fiscală",
            "Desface casa de marcat, extrage JE și MF",
            "Pune toate componentele într-un plic alături de raportul sumar și dă-le clientului"
        ],
        warnings: [
            "Clientul este obligat să ridice MF și JE împreună cu datele salvate pe stick",
            "Datele se păstrează minim 6 ani"
        ]
    },
    
    "Înlocuire jurnal electronic": {
        description: "Procedură completă pentru înlocuirea JE la toate modelele DAISY",
        steps: [
            "Conectează casa în mod PC și folosește Daisy Manager pentru a citi XML-urile",
            "Rapoarte → Raport MF → selectează luna, XML",
            "Citește JE-ul defect (Rapoarte → ALTELE → Cititi JE de pe cardul SD, perioada de la fiscalizare până azi)",
            "Deconectează alimentarea și acumulatorul",
            "Deschide carcasa, localizează placa de bază, soclul JE, jumperii, bateria RAM",
            "Înlocuirea fizică: scoate JE-ul defect (culisează mecanismul)",
            "Montează JE-ul nou (contactele în partea de jos, fixează)",
            "PAS COMUN: după montare, apasă de 3-4 ori butonul POWER pentru descărcarea condensatorilor",
            "EXPERT SX: mută jumperul de lângă bateria RAM de pe primii 2 pini pe JP100 (ultimii 2 pini)",
            "Conectează acumulatorul și rețeaua, pornește",
            "La 'EJ N:' → 1 → Department 01 → [ST] → data/ora → [ST]",
            "După bon, mută jumperul înapoi",
            "COMPACT M: mută jumperul de pe RTC ON pe JP102 (partea stângă, primii 2 pini)",
            "La 'EJ N:' → 1 → Department 01 → [ST] → data/ora → [ST] → [TL]",
            "După bon, mută jumperul înapoi pe RTC ON (un pin liber între baterie și jumper)",
            "PERFECT M: mută jumperul de pe pinii 2 și 3 pe JP100 (lângă slotul JE)",
            "La 'EJ N:' → 1 → Department 01 → [OK] → data/ora → [OK]",
            "După bon, mută jumperul înapoi pe pinii 2 și 3",
            "COMPACT S: conectează acumulatorul și panglica afișaj, pornește",
            "La 'EJ N:', cu penseta pe conectorii de service, apasă 1 și D+",
            "La 'READY', ridică penseta, apasă [ST] → data/ora → [ST] → [TL]",
            "Asamblează casa, emite un bon fiscal de test și un Raport Z",
            "Ataseaza bonul 'JE NOU ACTIVAT' și raportul Z în cartea de intervenții",
        ],
        warnings: [
            "ÎNAINTE DE SCHIMBARE: Salvează datele de pe JE-ul vechi",
            "JE-ul trebuie comandat special pentru model",
            "Respectă cu strictețe pozițiile jumperilor",
            "Păstrează toate documentele și JE-ul defect pentru eventuale controale"
        ],
        tools: "Cablu USB, șurubelnițe, pensetă (pentru Compact S), JE nou specific"
    },
    
    "Înlocuire placă de bază": {
        description: "Procedură pentru înlocuirea plăcii de bază la DAISY",
        steps: [
            "Verifică dacă sunt îndeplinite condițiile de service",
            "Deconectează cablul de memorie fiscală de la placa principală",
            "Scoate părțile laterale ale carcasei",
            "Deconectează toate cablurile de pe placa principală",
            "Scoate șuruburile de fixare",
            "Scoate placa principală veche",
            "Montează placa nouă și fixează șuruburile",
            "Reconectează toate cablurile",
            "Asamblează carcasa",
            "După înlocuire, va fi necesară reconfigurarea și refiscalizarea"
        ],
        warnings: [
            "Procedura necesită cunoștințe avansate de service",
            "După înlocuire, casa trebuie refiscalizată"
        ],
        tools: "Șurubelnițe, placă de bază nouă specifică"
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
            "Accesați platforma Zeus Service",
            "Autentificați-vă în cont",
            "Selectați casa de marcat DAISY din listă",
            "Alegeți opțiunea 'Prelungire abonament'",
            "Selectați perioada dorită",
            "Efectuați plata conform instrucțiunilor",
            "Verificați noul termen în casa de marcat"
        ]
    },
    
    "Înlocuire placă de alimentare": {
        description: "Procedură pentru înlocuirea plăcii de alimentare la DAISY",
        steps: [
            "Verifică dacă sunt îndeplinite condițiile de service",
            "Deconectează memoria fiscală de pe placa principală",
            "Scoate părțile laterale ale carcasei",
            "Deconectează cablurile de la placa principală",
            "Scoate șuruburile de fixare",
            "Scoate placa de alimentare veche",
            "Montează placa nouă",
            "Reconectează toate cablurile",
            "Asamblează carcasa"
        ],
        tools: "Șurubelnițe, placă de alimentare nouă"
    },
    
    "Înlocuire baterie RAM": {
        description: "Înlocuire baterie RAM pe placa de bază la DAISY",
        steps: [
            "Pregătește o baterie RAM specifică casei de marcat",
            "Măsoară bateria nouă - trebuie să aibă valori între 3-3.5V",
            "Desface casa de marcat cu atenție",
            "Deconectează alimentarea și acumulatorul principal",
            "Localizează bateria RAM pe placa de bază",
            "Dezlipiți bateria RAM veche cu grijă",
            "Lipiți bateria RAM nouă în poziția corectă",
            "Măsoară din nou pentru siguranță",
            "Atașează toate componentele înapoi",
            "Pune casa la alimentare și pornește",
            "La pornire, trece parola de service (implicit 0000)",
            "Setează data și ora din acel moment",
            "Atașează bonul emis în cartea de intervenții"
        ],
        warnings: [
            "Atenție la polaritatea bateriei RAM",
            "Folosește lipire cu grijă pentru a nu deteriora placa de bază"
        ],
        tools: "Baterie RAM nouă, lipit, multimetru, șurubelnițe"
    },
    
    "Înlocuire tastatură AMEF": {
        description: "Înlocuire tastatură la modelele DAISY",
        steps: [
            "Desfaceți carcasa casei de marcat",
            "Deconectați cablul tastaturii de pe placa de bază",
            "Scoateți șuruburile de fixare ale tastaturii",
            "Îndepărtați tastatura veche",
            "Poziționați tastatura nouă",
            "Fixați șuruburile",
            "Reconectați cablul plat în conector",
            "Asamblați carcasa",
            "Testați fiecare tastă pentru funcționare corectă"
        ],
        tools: "Tastatură nouă specifică modelului, șurubelnițe"
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire display la modelele DAISY - necesită atenție sporită",
        steps: [
            "Verifică starea inițială a display-ului",
            "Verifică dacă există card SD (în special la Expert SX) introdus în casa de marcat",
            "Desface cu atenție casa de marcat de la fiecare șurub fără a forța excesiv",
            "Deconectează acumulatorul casei de marcat",
            "Cu grijă, scoate din portul de pe placa de bază banda display-ului",
            "Atașează noul display functional în port",
            "Fixează perfect în zona lui",
            "Atașează acumulatorul înapoi",
            "Închide casa de marcat",
            "Testează funcționalitatea display-ului nou"
        ],
        warnings: [
            "Nu uita să scoți acumulatorul",
            "Asigură-te că noul display e functional înainte de montaj",
            "Atenție la cablurile fragile"
        ],
        tools: "Șurubelnițe, pensetă, display nou specific"
    },
    
    "Înlocuire acumulator": {
        description: "Înlocuire acumulator intern la DAISY",
        steps: [
            "Caută un acumulator compatibil cu modelul casei de marcat",
            "Desfacem carcasa",
            "Scoate acumulatorul vechi din portul plăcii de bază",
            "Verifică bateria nouă să nu aibă defecțiuni",
            "Atașează în portul dedicat din placa de bază",
            "Asamblază carcasa"
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
    
    "eXpert SX procedura HARD RESET": {
        description: "Procedura de resetare hardware (hard reset) pentru Expert SX",
        steps: [
            "Îndepărtează cardul microSD pentru export date (dacă există)",
            "Desigilează casa de marcat (înlătură sigiliul)",
            "Îndepărtează cele trei șuruburi de pe spatele casei",
            "Îndepărtează șurubul de la capacul bateriei principale",
            "Îndepărtează cele două șuruburi dinspre afișajul de client (aflate sub piciorușele de cauciuc)",
            "Decuplează acumulatorul principal din soclul de pe placa de bază",
            "Înlătură spatele casei de marcat trăgând ușor din partea de sus",
            "Atenție: pe spate este prins CRIPTOMODULUL, care comunică cu placa de bază printr-o panglică de aproximativ 10 cm",
            "Localizează pe placa de bază jumperul aflat imediat sub bateria RAM",
            "Scoate jumperul din poziția inițială și mută-l cu un pin mai jos",
            "Astfel încât între bateria RAM și jumper să existe un pin liber, iar după jumper să rămână alți doi pini liberi",
            "Apasă de 3-4 ori butonul PORNIT/OPRIT al casei de marcat pentru a descărca condensatorii",
            "Dacă panglica criptomodulului a fost deconectată, reconecteaz-o",
            "Conectează acumulatorul principal",
            "Pornește casa de marcat. Pe ecran va apărea un counter care derulează documentele din jurnal și articolele",
            "După finalizare, pe ecran va apărea 'PAROLA_ _ _ _'",
            "Introdu parola de SERVICE setată de tehnicianul care a efectuat fiscalizarea casei",
            "Casa va solicita introducerea datei și orei în format ZZ-LL-AAAA HH:MM:SS",
            "Introdu corect și confirmă",
            "Pe ecran va apărea meniul VANZARE_ _ _ _ _",
            "Fără a opri casa, scoate jumperul și mută-l înapoi în poziția inițială (primii doi pini de sub bateria RAM)",
            "Oprește casa de marcat și asambleaz-o",
            "Verifică dacă erorile au dispărut"
        ],
        warnings: [
            "Procedura se aplică doar în cazurile menționate",
            "Pentru înlocuirea simplă a JE-ului se folosește procedura specifică",
            "Respectă cu strictețe pozițiile jumperilor",
            "După hard reset, asigură-te că data și ora sunt setate corect"
        ],
        tools: "Șurubelniță, pensetă (pentru manipularea jumperului), acumulator nou (dacă este necesar)"
    },
    
    "Listă erori AMEF": {
        description: "Listă completă de coduri de erori pentru casele DAISY",
        errors: [
            { code: "3", displayText: "MAXIM VANZ BON", description: "Nu se mai pot face vânzări pe acest bon.", solution: ["Apasă tasta C pentru a închide bonul","Începe un bon nou pentru vânzări suplimentare"] },
            { code: "4", displayText: "NR.MAX.PLATI", description: "Nu mai poți face plăți pe acest bon.", solution: ["Apasă tasta C pentru a închide bonul","Începe un bon nou pentru plăți suplimentare"] },
            { code: "5", displayText: "VALOARE ZERO", description: "Încercare de efectuare tranzacție cu sumă zero.", solution: ["Apasă tasta C pentru a închide bonul","Verifică prețul introdus","Asigură-te că suma nu este zero înainte de a finaliza tranzacția"] },
            { code: "6", displayText: "INCEPE PLATA", description: "Încercare de VANZARE, după ce plata a fost inițiată.", solution: ["Apasă tasta C pentru a închide bonul","Finalizează plata curentă sau anulează bonul"] },
            { code: "7", displayText: "OPER.INTERZISA", description: "Este interzisă această operație.", solution: ["Apasă tasta C pentru a închide bonul","Verifică dacă operația este permisă în setări"] },
            { code: "11", displayText: "MULTE PUNCTE", description: "Depașit numarul de cifre după punctul zecimal.", solution: ["Apasă tasta C și verifică parametrii sistemului","Verifică formatul numerelor introduse"] },
            { code: "14", displayText: "SIMBOL GRESIT", description: "Simbol incorect pentru codul de bare, care trebuie să conțină numai numere.", solution: ["Apasă tasta C și introduce numărul corect de simboluri","Verifică că codul de bare conține doar cifre"] },
            { code: "15", displayText: "MULTE PUNCTE", description: "Ați introdus mai multe simboluri decât cele permise.", solution: ["Apasă tasta C și verifică parametrii sistemului","Reduce numărul de simboluri introduse"] },
            { code: "16", displayText: "MULTE SIMBOLURI", description: "Ați introdus mai multe simboluri decât cele permise.", solution: ["Apasă tasta C și introduce numărul corect de simboluri","Verifică limita de caractere pentru câmpul respectiv"] },
            { code: "19", displayText: "BON DESCHIS", description: "Aveți un bon deschis.", solution: ["Apasă tasta C și continuă lucrul","Finalizează sau anulează bonul deschis"] },
            { code: "20", displayText: "TASTA INCORECTA", description: "În acest caz particular, tasta apăsată nu are funcție.", solution: ["Apasă tasta C și continuă lucrul","Folosește tastele corespunzătoare funcției dorite"] },
            { code: "21", displayText: "VAL.INCORECTA", description: "Valoarea este în afara limitelor permise.", solution: ["Apasă tasta C și introdu valoarea în limita admisă","Verifică intervalul de valori acceptat"] },
            { code: "22", displayText: "OPER.INTERZISA", description: "Operație interzisă - verifică parametrul sistem 8.", solution: ["Apasă tasta C și verifică parametrul 8","Verifică permisiunile operației în setări"] },
            { code: "23", displayText: "ANULARE INTERZ.", description: "Încercare de anulare 'Void' după un discount / adaos făcut pe subtotal.", solution: ["Apasă tasta C și închideți bonul","Anularea nu este permisă după aplicarea reducerii/adaosului"] },
            { code: "24", displayText: "OPERATIE GRESITA", description: "Încercare de anulare Void pentru o tranzactie inexistentă.", solution: ["Apasă tasta C și închide bonul","Verifică că tranzacția există înainte de anulare"] },
            { code: "25", displayText: "OPERATIE GRESITA", description: "Încercare de închidere bon fără a avea o VÂNZARE.", solution: ["Apasă tasta C și faceți VÂNZARE înainte de închidere bon","Adaugă cel puțin un articol înainte de închidere"] },
            { code: "26", displayText: "NU E STOC", description: "Încercare de vânzare articole (PLU) fără a avea cantitatea vândută pe stoc.", solution: ["Apasă tasta C și verifică stocul pentru acest articol PLU","Actualizează stocul sau dezactivează controlul stocului"] },
            { code: "27", displayText: "EROARE BALANTA", description: "Comunicare incorectă cu cântarul electronic.", solution: ["Apasă tasta C și introdu valoarea corectă","Verifică conexiunea cu cântarul"] },
            { code: "29", displayText: "FARA NUME", description: "Numele produsului nu este programat.", solution: ["Programați numele articolului PLU","Accesați modul PROGR și adăugați numele articolului"] },
            { code: "30", displayText: "MF PLINA", description: "Memoria fiscală este plină.", solution: ["Contactează tehnicianul de service imediat","Nu continua operarea casei de marcat","Memoria fiscală trebuie înlocuită de către un tehnician autorizat"], urgent: true },
            { code: "38", displayText: "CIF INCORECT!", description: "Codul CIF este incorrect.", solution: ["Apasă tasta C și introdu valoarea corectă","Verifică corectitudinea codului CIF introdus"] },
            { code: "39", displayText: "EROARE", description: "Lipsă unitate de măsură.", solution: ["Programați unitatea de măsură","Accesați modul PROGR și setează unitatea de măsură"] },
            { code: "41", displayText: "CODBARE INCORECT", description: "Cod de bare incorect (sumă de control greșită).", solution: ["Apasă tasta C și introdu cod de bare corect","Verifică validitatea codului de bare"] },
            { code: "42", displayText: "CODBARE ZERO", description: "Încercare de vânzare cu cod de bare nul.", solution: ["Apasă tasta C și introdu cod bare","Introdu un cod de bare valid, diferit de zero"] },
            { code: "43", displayText: "INTERZIS CODBARE", description: "Încercare de programare cu un cod de bare pentru greutate.", solution: ["Apasă tasta C și continuă lucrul","Folosește alt tip de cod de bare"] },
            { code: "44", displayText: "CODBARE NEPROG.", description: "Încercare de VANZARE cu un cod de bare neprogramat.", solution: ["Apasă tasta C și programează cod bare","Accesați modul PROGR și adăugați codul de bare pentru articol"] },
            { code: "45", displayText: "CODBARE EXISTENT", description: "Încercare de programare a unui cod de bare existent.", solution: ["Apasă tasta C și program another barcode","Folosește un cod de bare unic pentru fiecare articol"] },
            { code: "61", displayText: "EROARE CARD", description: "SD Card defect - casa de marcat blocată.", solution: ["Contactează technician de service","Nu încerca reparații proprii","Cardul SD trebuie înlocuit"], urgent: true },
            { code: "70", displayText: "FM NU EXISTA!!!", description: "Memoria fiscală nu este prezentă!", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Verifică conexiunea memoriei fiscale"], urgent: true },
            { code: "71", displayText: "INLOCUIRE FM!!!", description: "Date incorecte in memoria fiscală!", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Memoria fiscală necesită intervenție"], urgent: true },
            { code: "72", displayText: "EROARE INREG.FM!!!", description: "Eroare la scrierea datelor in memoria fiscală!", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Memoria fiscală poate fi defectă"], urgent: true },
            { code: "81", displayText: "DEPAS.RAP.ZILN", description: "Depășit limita pentru raportul fiscal zilnic.", solution: ["Apasă tasta C și rulează raportul fiscal zilnic cu reset","Accesează modul RAPORT Z și generează raportul"] },
            { code: "82", displayText: "DEPASIT 24h", description: "Au trecut mai mult de 24 ore fără să fie făcut raport fiscal zilnic.", solution: ["Efectuează imediat raportul fiscal zilnic","Accesează modul RAPORT Z și generează raportul"] },
            { code: "83", displayText: "DEPAS.RAP.OPER.", description: "Raportul pe operatori este plin.", solution: ["Apasă tasta C și rulează raportul pe operatori cu reset","Accesează modul RAPORT Z și generează raportul operatori"] },
            { code: "84", displayText: "DEPAS.RAP.ART.", description: "Raportul pe articole (PLU) plin.", solution: ["Apasă tasta C și rulează raportul pe articole (PLU) cu resetare","Accesează modul RAPORT Z și generează raportul articole"] },
            { code: "91", displayText: "NECESAR RAP.ZILN", description: "Raportul fiscal zilnic nu a fost făcut.", solution: ["Apasă tasta C și rulează raportul fiscal zilnic cu reset","Introdu parola pentru modul RAPORT Z și confirmă cu tasta CLK","Apasă tasta TL pentru a imprima un Raport zilnic cu ștergere"] },
            { code: "92", displayText: "NECESAR RAP.OPER", description: "Raportul pe operatori nu a fost resetat.", solution: ["Apasă tasta C și rulează raportul pe operatori cu reset","Accesează modul RAPORT Z și generează raportul operatori"] },
            { code: "93", displayText: "NECESAR RAP.ART.", description: "Raportul pe articole (PLU) nu a fost resetat.", solution: ["Apasă tasta C și rulează raportul pe articole (PLU) cu reset","Accesează modul RAPORT Z și generează raportul articole"] },
            { code: "97", displayText: "MODIF.INTERZISA", description: "Acest câmp nu poate fi modificat.", solution: ["Apasă tasta C și rulează raportul fiscal zilnic cu reset","Unele câmpuri sunt protejate și nu pot fi modificate"] },
            { code: "98", displayText: "LIPSĂ CERTIFICAT DIGITAL", description: "Nu există Certificat Digital instalat in AMEF.", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Certificatul digital trebuie instalat de către personal autorizat"], urgent: true },
            { code: "108", displayText: "PAROLA GRESITA", description: "Încercare de introducere a unei parole greșite.", solution: ["Apasă tasta C și introdu parola corectă","Verifică parola în manualul de utilizare"] },
            { code: "123", displayText: "SD CARD DEFECT", description: "Micro SD-cardul intern al Jurnalului Electronic este defect.", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Cardul micro SD trebuie înlocuit"], urgent: true },
            { code: "124", displayText: "SD CARD SCHIMBAT", description: "Micro SD-cardul intern al Jurnalului Electronic a fost schimbat.", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Cardul SD original trebuie reinstalat"], urgent: true },
            { code: "125", displayText: "SD CARD EXTERN NEACCEPTAT", description: "USB-ul extern folosit pentru salvarea informațiilor din casa de marcat nu este acceptat.", solution: ["Folosiți un alt USB stick","Verificați compatibilitatea dispozitivului USB","Formatați USB-ul în format FAT32"] },
            { code: "126", displayText: "SD CARD INTERN PLIN", description: "Micro SD-cardul intern al JE este plin. Cardul trebuie inlocuit.", solution: ["Nu se poate continua lucrul","Contactează tehnicianul de service imediat","Cardul micro SD trebuie înlocuit cu unul de capacitate mai mare"], urgent: true }
        ]
    },
        "Parametri de sistem": {
        description: "Accesarea și modificarea parametrilor de sistem (1-23) pentru configurarea avansată a casei de marcat DAISY",
        steps: [
            "Accesare regim PROG: Apasă tasta MODE în mod repetat până când pe ecran apare mesajul PROGR ....",
            "Introdu parola implicită 9999 și apasă tasta L pentru a confirma",
            "Apasă tasta R pentru a intra în modul de programare a parametrilor",
            "Pe ecran va apărea numărul parametrului curent (de exemplu, 1)",
            "Pentru a modifica un parametru, introdu numărul acestuia (ex: 11) și apasă tasta S",
            "Se va afișa numele parametrului și valoarea curentă",
            "Introdu noua valoare de la tastatură și apasă S pentru a salva",
            "Dacă nu dorești să modifici valoarea, apasă direct S pentru a trece la următorul parametru",
            "Pentru a ieși din modul de programare, apasă tasta MODE până la revenirea în meniul principal"
        ],
        warnings: [
            "Modificarea parametrilor de sistem poate influența modul de operare al casei",
            "Pentru parametrii care necesită rapoarte Z prealabile, emite-le înainte",
            "Unele modificări pot afecta modul de afișare și tipărire a sumelor"
        ],
        parameters: [
            { nr: 1, nume: "Punct zecimal", desc: "0 – numere întregi, 2 – două zecimale (implicit 2)" },
            { nr: 2, nume: "Număr linii antet", desc: "Valori posibile: 2…6 (implicit 2)" },
            { nr: 3, nume: "Număr linii reclamă", desc: "0…2 (implicit 1)" },
            { nr: 4, nume: "Opțiuni imprimare", desc: "Patru cifre pentru configurare" },
            { nr: 5, nume: "Imprimare detaliată bon", desc: "Analiză TVA și vânzare" },
            { nr: 8, nume: "Operațiuni permise", desc: "Majorare, reducere, corecție" },
            { nr: 10, nume: "Număr AMEF", desc: "Identificatorul casei" },
            { nr: 18, nume: "Linii goale după bon", desc: "1…50 (implicit 4)" },
            { nr: 19, nume: "Contrast imprimare", desc: "0…9" },
            { nr: 20, nume: "Autoînchidere", desc: "0 – nu se închide; 1…240 minute" }
        ]
    }
};