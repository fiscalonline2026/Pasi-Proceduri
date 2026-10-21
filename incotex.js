// ==================== INCOTEX - TOATE PROCEDURILE ====================

const incotexProcedures = {
    "Fiscalizare": {
        description: "Procedura completă de fiscalizare pentru modelele INCOTEX Succes M7",
        steps: [
            "Instalează driverul USB al AMEF Succes M7 (com0com – port serial virtual)",
            "Conectează AMEF la PC cu cablu USB A-B și pornește AMEF",
            "Instalează aplicația Fisc.exe (versiunea corespunzătoare sistemului de operare – 32 sau 64 biți)",
            "Lansează aplicația Fisc.exe – se va conecta automat la AMEF",
            "Pe ecran va apărea 'Connected'; dacă apare 'Disconnected', verifică conexiunea și driverele",
            "Efectuează programările în următoarea ordine:",
            "   • Daily Z report",
            "   • Set Date and Time",
            "   • Header lines programming",
            "   • Set VAT rates",
            "   • Set FM Serial",
            "   • Fiscal Start",
            "",
            "Programarea antetului:",
            "   • Introdu denumirea (max 38 caractere)",
            "   • Adresa punctului de lucru",
            "   • Codul fiscal (format recomandat: 'C.F. RO 12616722')",
            "   • Bifează 'VAT Payer' dacă este plătitor TVA",
            "   • Opțional, antet comercial (max 3 linii) și mesaj final (max 2 linii)",
            "   • Apasă OK – se tipărește bon nefiscal cu antetul nou",
            "",
            "Programarea cotelor TVA:",
            "   • Click pe Set VAT rates, se citesc valorile curente",
            "   • Modifică procentele (max 6 cote)",
            "   • Apasă OK – se tipărește bon cu cotele vechi și noi",
            "",
            "Setarea seriei fiscale:",
            "   • Click pe Set FM Serial",
            "   • Introdu seria de fabricație (10 cifre)",
            "   • Verifică și confirmă cu OK",
            "   • Pe afișajul casei apare 'SERIE FISCALA xxxxxxxxxx' – confirmă cu STL",
            "   • ATENȚIE: după confirmare, seria nu mai poate fi modificată!",
            "",
            "Activarea memoriei fiscale (Fiscal Start):",
            "   • Click pe Fiscal Start, aplicația afișează toate datele programate",
            "   • Verifică corectitudinea, apoi OK → reintrodu seria fiscală pentru confirmare",
            "   • Dacă SD Card-ul nu este activat, se inițializează automat (poate dura câteva minute)",
            "   • Se tipărește bon cu informațiile memoriei JE",
            "",
            "Gestionarea certificatului digital (dacă apar icoane E sau C):",
            "   • Dacă apare E (eroare SD Card XML) – accesează meniul SERVICE și aplică procedura de serializare SD Card",
            "   • Dacă apare C (eroare lipsă certificat) – folosește o memorie USB pentru a exporta fișierul CSR",
            "   • Trimite fișierul CSR la furnizor pentru emiterea certificatului",
            "   • Descarcă certificatul în casă",
            "",
            "Finalizarea fiscalizării:",
            "   • După confirmarea tuturor datelor, AMEF tipărește două bonuri nefiscale (inițializare JE și inițializare MF)",
            "   • Casa trece în modul TEST și tipărește un bon fiscal TEST și rapoartele Z",
            "   • Apoi comută în modul NORMAL",
            "   • Arhivează în cartea de intervenții bonul fiscal TEST și raportul fiscal Z TEST"
        ],
        warnings: [
            "Verifică data și ora înainte de fiscalizare",
            "Seria fiscală odată confirmată nu mai poate fi modificată – atenție maximă",
            "Fiscalizarea este ireversibilă",
            "Dacă apar icoane de eroare (E, C) pe afișaj, rezolvă-le înainte de a continua"
        ],
        tools: "Cablu USB A-B, driver Incotex-Win-USB-Driver, aplicația Fisc.exe, eventual memorie USB FLASH pentru certificat"
    },
    
    "Mod conectare la server ANAF": {
        description: "Configurare conexiune la serverul ANAF pentru INCOTEX",
        steps: [
            "Asigură-te că ai conexiune la internet (cablu Ethernet sau WiFi)",
            "Conectează cablul Ethernet în mufa dedicată",
            "Verifică icoana de conexiune din stânga sus a afișajului",
            "Pentru a vedea IP-ul alocat, alege un mod de operare fără să-l accesezi (afișează 6 *)",
            "Apasă tasta X – se tipărește bon cu IP-ul alocat",
            "Verifică setările DNS și gateway dacă este necesar",
            "Efectuează un test de conectivitate la serverul ANAF"
        ],
        warnings: [
            "Asigură-te că firma are conexiune la internet",
            "Verifică setările de rețea cu administratorul"
        ]
    },
    
    "Instructaj client": {
        description: "Instrucțiuni de operare pentru utilizatorul casei de marcat INCOTEX Succes M7",
        steps: [
            "Pornire: Apasă butonul [ON] (lateral dreapta)",
            "Casa va porni pe meniul 'INREGISTRARE' – selectează cu tasta [TOTAL] – se afișează 0,00",
            "Vânzare cantitativă: 2 [X] 5.0 [PRET] 1 [PLU] [TOTAL]",
            "Anulare vânzare înainte de finalizare: apasă [ANUL.BON] după introducerea articolului",
            "Exemplu: 2 [X] 5.0 [PRET] 1 [PLU] [ANUL.BON]",
            "Raport X (verificare): Cu tasta [MOD] (dreapta sus) mergi pe 'RAPOARTE X' și confirmă cu [TOTAL] [TOTAL]",
            "Raport Z (închidere zi): Cu tasta [MOD] mergi pe 'RAPOARTE Z' și confirmă cu [TOTAL] [TOTAL]",
            "După Raport Z, așteaptă tipărirea bonului nefiscal care confirmă transmiterea la ANAF",
            "Raport detaliat (după dată):",
            "   • Din meniu 'RAPOARTE X' → [TOTAL] → 11 [STL] [TOTAL] [TOTAL]",
            "   • Introduce DATA ÎNCEPUT (ZZLLAA) [TOTAL]",
            "   • Introduce DATA SFÂRȘIT (ZZLLAA) [TOTAL]",
            "Export pe stick USB pentru ANAF:",
            "   • Cu tasta [Mode] mergi pe 'RAPOARTE X' [TOTAL] → 8 [STL]",
            "   • DATA ÎNCEPUT [TOTAL] → DATA SFÂRȘIT [TOTAL]",
            "   • Se afișează 'EXPORT FINALIZAT / EXTRAGETI MEMORIA'",
            "   • Ieși cu tasta C, apoi [MOD] pentru a reveni la meniu"
        ],
        warnings: [
            "Verifică periodic stocul de hârtie termică",
            "După Raport Z, nu opri casa imediat – așteaptă confirmarea transmiterii"
        ]
    },
    
    "Revizie AMEF": {
        description: "Procedură pentru programarea datei de service obligatoriu (anual) și comportamentul la expirare",
        steps: [
            "PROGRAMARE DATĂ EFECTUARE SERVICE:",
            "   • Accesează regimul SERVICE (apasă succesiv tasta MODE până la meniul SERVICE, apoi TOTAL)",
            "   • Dacă există parolă programată, se introduce Parola (753) și se apasă TOTAL",
            "   • Apasă tasta PLU pentru a accesa modul de testare – se va afișa 'Test'",
            "   • Apasă tasta 00 pentru a începe procedura de programare a datei service",
            "   • Se afișează S_pass – introdu parola 2 1 0 4 2 0 4 1 3 (cifrele consecutive)",
            "   • Confirmă cu tasta TOTAL",
            "   • Se va afișa S_date",
            "   • Introduce data la care trebuie efectuată întreținerea periodică, în format ZZLLAA (ex: 250325)",
            "   • Apasă TOTAL – se va tipări data programată",
            "   • Apasă tasta C pentru ieșirea din programarea datei de service",
            "COMENZI RAPIDE: Service → (753) - TL → PLU → 00 → PAROLA: 210420413 → TL → DATA SERVICE (ZZLLAA) → TL",
            "COMPORTAMENTUL CASEI LA EXPIRAREA VERIFICĂRII TEHNICE ANUALE:",
            "   • La pornire și accesarea regimului de înregistrare după expirare, se afișează 'Verificarea Tehnica A Expirat'",
            "   • Se tipărește bon nefiscal cu mesajul 'Chemati Tehnicianul pentru Verificarea Tehnica Anuala'",
            "   • După 10 zile: mesaj înainte de fiecare bon fiscal cu întârziere 2 secunde",
            "   • După 20 de zile: întârziere 5 secunde",
            "   • După 30 de zile: eroare 40 (Depășire Interval Service) și nu mai tipărește bonuri fiscale",
            "VERIFICAREA DATEI PROGRAMATE:",
            "   • Accesează regimul SERVICE, PLU, 00",
            "   • La S_pass introdu parola 210420413 și confirmă cu STL",
            "   • Se tipărește data programată curentă"
        ],
        warnings: [
            "Parola pentru programarea datei service este 210420413",
            "După 30 de zile de la expirare, casa se blochează – intervine obligatoriu service-ul"
        ]
    },
    
    "Schimbare punct de lucru": {
        description: "Modificarea adresei punctului de lucru în antetul fiscal",
        steps: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat (cu noul punct de lucru, maxim 30 zile), Declarația F4105",
            "Instalează driverul USB Incotex-Win-USB-Driver-34 (dacă nu este deja instalat)",
            "Conectează AMEF la PC cu cablu USB A-B și pornește casa",
            "Deschide aplicația Fisc.exe – trebuie să apară 'Connected'",
            "Apasă butonul 'Header lines programming'",
            "Modifică adresa în câmpurile corespunzătoare",
            "Bifează opțiunile necesare (de exemplu, pentru a programa antetul fiscal)",
            "Apasă OK – se tipărește bon nefiscal cu antetul nou",
            "Generează o nouă declarație de instalare cu noul punct de lucru",
            "Atașează declarația în cartea de intervenții"
        ],
        warnings: [
            "Modificarea se poate face doar în baza documentelor oficiale",
            "Nu uita să generezi declarația de instalare cu noul punct de lucru"
        ],
        tools: "Cablu USB, aplicația Fisc.exe"
    },
    
    "Schimbare cote TVA": {
        description: "Procedură simplă de modificare a cotelor TVA prin aplicația Fisc.exe",
        steps: [
            "Verifică în Registrul ANAF dacă firma este plătitoare de TVA și care sunt cotele aplicabile",
            "Instalează driverul USB și conectează AMEF la PC (cablu USB A-B, AMEF pornit)",
            "Lansează Fisc.exe – așteaptă 'Connected'",
            "Apasă butonul 'Set VAT rates'",
            "Aplicația citește cotele actuale și deschide fereastra de modificare",
            "Modifică procentele TVA (se pot programa până la 6 cote)",
            "Valorile implicite sunt TVA A 19.00% și TVA B 9.00%",
            "Apasă OK – se transmit noile cote în AMEF",
            "Se tipărește un bon nefiscal cu cotele vechi și noi, precum și numărul de modificări rămase",
            "Verifică înregistrarea corectă printr-un bon de test"
        ],
        warnings: [
            "Verifică în Registrul ANAF dacă firma este plătitoare de TVA și care sunt cotele aplicabile",
            "Până la activarea MF, numărul de modificări disponibile rămâne 30"
        ]
    },
    
    "Introducere articole PLU": {
        description: "Articolele se pot adăuga din programul CMU Manager",
        steps: [
            "Deschide programul CMU Manager",
            "Accesează meniul de PC al casei de marcat navigând cu săgețile până apare 'PC'",
            "Introdu parola 2020",
            "Conectează casa de marcat la PC",
            "Accesează meniul 'Articole'",
            "Poți adăuga/șterge manual articolele",
            "După finalizare, programează articolele",
            "Verifică cu un bon de test"
        ],
        warnings: [
            "Respectă parametrii din tabel pentru fiecare articol",
            "Dacă s-au efectuat deja vânzări, este necesar un raport Z înainte de modificări masive"
        ]
    },
    
    "Predare memorie fiscală": {
        description: "Procedură pentru predarea memoriei fiscale la INCOTEX",
        steps: [
            "Verifică transmiterea tuturor rapoartelor Z",
            "Asigură-te că toate rapoartele sunt în zero",
            "Conectează o memorie USB FLASH de minim 4 GB în interfata USB HOST",
            "Din meniul SERVICE, exportă fișierul CSR (cerere certificat) dacă este cazul",
            "Când exportul este finalizat, extrage memoria",
            "Trimite prin e-mail fișierul CSR către MILO TRADING 2000 pentru emiterea certificatului digital",
            "Copiază certificatul digital pe aceeași memorie USB FLASH, direct în root",
            "Conectează memoria pe interfața USB HOST a casei de marcat",
            "Accesează meniul SERVICE și introdu secvența de taste pentru descărcarea certificatului",
            "După înregistrarea certificatului, icoana de eroare C dispare",
            "Generează proces-verbal de predare a memoriei fiscale",
            "Desface casa și extrage MF și JE"
        ],
        warnings: [
            "Fiscalizarea nu se poate efectua dacă nu există Certificatul Digital instalat",
            "Clientul păstrează MF și JE minim 6 ani"
        ]
    },
    
    "Înlocuire jurnal electronic": {
        description: "Procedură pentru înlocuirea microSD card-ului Jurnal Electronic",
        steps: [
            "Salvează datele de pe JE-ul vechi (raportul după dată sau număr Z pentru toată perioada de utilizare)",
            "Oprește casa de marcat și deconectează alimentarea",
            "Scoate sigiliul și dezasamblează carcasa pentru a avea acces la placa de bază",
            "Deblocați suportul pentru carduri SD (poziția 15 pe placa de bază)",
            "Scoateți vechiul card SD",
            "Predați vechiul SD Card împreună cu memoria USB FLASH care conține Jurnalul Electronic salvat",
            "Completați procesul-verbal de predare-primire",
            "Plasați noul card SD și blocați suportul",
            "Asamblați casa de marcat și sigilați-o",
            "Porniți casa de marcat și intrați în Service mode",
            "Apăsați PRET pentru a începe inițializarea noului card SD. Se va afișa SERVICE / SET CL",
            "Apăsați TOTAL ENTER pentru a porni inițializarea",
            "Casa de marcat va cere o confirmare. Apăsați STL SERTAR pentru confirmare",
            "Așteptați finalizarea – pe afișaj apare FRT XXXX, apoi 'FRT rdy'",
            "Se tipărește un bon nefiscal cu datele inițializării memoriei JE",
            "Notați în cartea de intervenții operațiunile de service efectuate"
        ],
        warnings: [
            "Operațiunea trebuie efectuată de un tehnician autorizat",
            "Utilizatorul trebuie să achiziționeze o memorie USB FLASH de cel puțin 4 GB",
            "Păstrează vechiul SD Card și USB-ul cu datele salvate"
        ],
        tools: "Șurubelnițe, memorie USB FLASH, card SD nou specific INCOTEX"
    },
    
    "Înlocuire placă de bază": {
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
    },
    
    "Înlocuire modul SAM": {
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
    },
    
    "Prelungire abonament de date AMEF": {
        description: "Prelungire abonament pentru date",
        steps: [
            "Contactați distribuitorul MILO TRADING 2000",
            "Accesați platforma dedicată",
            "Selectați casa de marcat INCOTEX",
            "Alegeți perioada de prelungire",
            "Efectuați plata",
            "Verificați noul termen în casa de marcat"
        ]
    },
    
    "Înlocuire placă de alimentare": {
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
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
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire display la INCOTEX",
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
            "Verifică bateria nouă să nu aibă defecțiuni",
            "Atașează în portul dedicat din placa de bază",
            "Asamblează carcasa"
        ],
        tools: "Acumulator nou compatibil, șurubelnițe"
    },
    
    "Înlocuire imprimantă termică": {
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
    },
    
    "Listă erori AMEF": {
        description: "Listă completă de coduri de erori pentru casele INCOTEX",
        errors: [
            { code: "Er 1", displayText: "Depășire valoare maximă în urma înmulțirii!", description: "Eroare la calcularea valorii totale - depășire limită.", solution: ["Verificați cantitatea și prețul introdus","Reduceți cantitatea sau prețul","Contactați service-ul dacă problema persistă"] },
            { code: "Er 2", displayText: "Depășire valoare maximă zilnică!", description: "S-a depășit valoarea maximă permisă pentru operațiile zilnice.", solution: ["Efectuați raportul fiscal zilnic","Verificați setările casei de marcat"] },
            { code: "Er 3", displayText: "Operație ilegală!", description: "Operația încercată nu este permisă.", solution: ["Verificați permisiunile operatorului","Consultați manualul de utilizare"] },
            { code: "Er 4", displayText: "Discount-ul valorilor este mai mare decât valoarea la care se aplică!", description: "Reducerea aplicată depășește valoarea produsului.", solution: ["Verificați valoarea discount-ului introdus","Introduceți o valoare mai mică pentru discount"] },
            { code: "Er 5", displayText: "Suma este ZERO!", description: "Încercare de efectuare operație cu suma zero.", solution: ["Verificați valoarea introdusă","Introduceți o sumă diferită de zero"] },
            { code: "Er 6", displayText: "Depășire valoare bon!", description: "Valoarea bonului a depășit limita maximă permisă.", solution: ["Închideți bonul curent","Începeți un bon nou pentru restul produselor"] },
            { code: "Er 7", displayText: "Depășire cantitate maximă!", description: "Cantitatea introdusă depășește limita maximă.", solution: ["Reduceți cantitatea","Verificați limita maximă de cantitate programată"] },
            { code: "Er 8", displayText: "Depășire preț maxim!", description: "Prețul introdus depășește limita maximă permisă.", solution: ["Reduceți prețul","Verificați limita maximă de preț programată"] },
            { code: "Er 9", displayText: "Valoarea este ZERO!", description: "Valoarea introdusă este zero.", solution: ["Introduceți o valoare diferită de zero","Verificați datele introduse"] },
            { code: "Er 10", displayText: "Prețul liber este dezactivat pentru acest PLU sau Departament!", description: "Nu se poate introduce preț manual pentru acest produs.", solution: ["Utilizați prețul programat pentru PLU","Activați opțiunea de preț liber din setări"] },
            { code: "Er 11", displayText: "Cantitatea trebuie să fie întreagă!", description: "Cantitatea introdusă trebuie să fie un număr întreg.", solution: ["Introduceți o cantitate fără zecimale","Verificați formatul cantității"] },
            { code: "Er 12", displayText: "Depășire număr maxim operatii pe bon. Bonul trebuie finalizat!", description: "S-a atins numărul maxim de operații permis pe un bon.", solution: ["Finalizați bonul curent","Începeți un bon nou"] },
            { code: "Er 13", displayText: "Valoare procent este nu este în intervalul 0,01 – 99,99!", description: "Procentul introdus este în afara intervalului permis.", solution: ["Introduceți o valoare procentuală între 0.01 și 99.99","Verificați valoarea introdusă"] },
            { code: "Er 14", displayText: "Operația este dezactivată deoarece rezultatul este NEGATIV!", description: "Operația ar genera un rezultat negativ, ceea ce nu este permis.", solution: ["Verificați valorile introduse","Asigurați-vă că rezultatul nu devine negativ"] },
            { code: "Er 16", displayText: "Cantitatea din stoc este insuficientă pentru această operație!", description: "Nu există suficient stoc pentru operația solicitată.", solution: ["Verificați stocul disponibil","Reduceți cantitatea sau alimentați stocul"] },
            { code: "Er 19", displayText: "Nu există înregistrări în bonul fiscal care pot fi corectate! / Depășire raport periodic!", description: "Nu există operații de corectat în bon sau s-a depășit raportul periodic.", solution: ["Verificați bonul pentru operații existente","Efectuați raportul periodic necesar"] },
            { code: "Er 21", displayText: "Valoarea care se scoate din sertar este mai mare decât disponibilă!", description: "Încercare de scoatere a unei sume mai mari decât cea disponibilă în sertar.", solution: ["Verificați suma disponibilă în sertar","Introduceți o sumă mai mică"] },
            { code: "Er 22", displayText: "Depășire Raport Operator!", description: "Raportul pe operator a atins limita maximă.", solution: ["Efectuați raportul pe operator cu resetare","Consultați tehnicianul de service"] },
            { code: "Er 23", displayText: "Operatorul nu are drept pentru această operație – setări opțiunile operatorului!", description: "Operatorul nu are permisiunea pentru operația încercată.", solution: ["Verificați drepturile operatorului în setări","Utilizați un alt operator cu permisiuni corespunzătoare"] },
            { code: "Er 24", displayText: "S-a atins numărul maxim de modificări / înregistrări în MF!", description: "Memoria fiscală a atins limita de înregistrări.", solution: ["Contactați urgent service-ul autorizat","Memoria fiscală trebuie înlocuită"], urgent: true },
            { code: "Er 25", displayText: "Interval ilegal pentru raport!", description: "Intervalul selectat pentru raport nu este valid.", solution: ["Verificați datele de început și sfârșit","Selectați un interval corect"] },
            { code: "Er 26", displayText: "Depășire Raport PLU!", description: "Raportul pe articole (PLU) a atins limita maximă.", solution: ["Efectuați raportul PLU cu resetare","Consultați tehnicianul de service"] },
            { code: "Er 27", displayText: "Jurnalul Electronic nu conține numărul bonului fiscal introdus!", description: "Numărul bonului căutat nu există în Jurnalul Electronic.", solution: ["Verificați numărul introdus","Verificați intervalul de date pentru căutare"] },
            { code: "Er 28", displayText: "Acest cod de bare este deja programat pentru un alt PLU!", description: "Codul de bare este deja folosit pentru un alt produs.", solution: ["Utilizați un alt cod de bare","Verificați lista de coduri de bare existente"] },
            { code: "Er 29", displayText: "Trebuie efectuate Raport 2 PLU și Raport Fiscal Zilnic!", description: "Este necesară efectuarea rapoartelor înainte de a continua.", solution: ["Efectuați mai întâi Raport 2 PLU","Efectuați apoi Raportul Fiscal Zilnic"] },
            { code: "Er 30", displayText: "Depășire Raport Grupe!", description: "Raportul pe grupe a atins limita maximă.", solution: ["Efectuați raportul pe grupe cu resetare","Consultați tehnicianul de service"] },
            { code: "Er 31", displayText: "Storno nepermis – TVA nu poate fi negativ!", description: "Anularea nu este permisă deoarece ar genera TVA negativ.", solution: ["Verificați operația de anulare","Consultați manualul de utilizare"] },
            { code: "Er 32", displayText: "Operație ilegală – nu este asociată cota TVA la Departamentul / Grup!", description: "Departamentul sau grupa nu are o cotă TVA asociată.", solution: ["Asociați o cotă TVA departamentului/grupei","Verificați programarea TVA"] },
            { code: "Er 33", displayText: "Au trecut 24 ore de la primul bon fiscal. Efectuați Raport Fiscal Zilnic!", description: "S-a depășit intervalul de 24 ore fără raport fiscal zilnic.", solution: ["Efectuați imediat Raportul Fiscal Zilnic","Nu mai puteți opera până la efectuarea raportului"] },
            { code: "Er 40", displayText: "Depășire Interval service. Chemați tehnicianul de service!", description: "S-a depășit intervalul pentru service-ul periodic.", solution: ["Contactați tehnicianul de service autorizat","Este necesară intervenția pentru service periodic"], urgent: true },
            { code: "Er 43", displayText: "Număr neprogramat în câmpul obligatoriu!", description: "Un câmp obligatoriu nu a fost programat corect.", solution: ["Verificați programarea câmpurilor obligatorii","Completați datele lipsă în setări"] },
            { code: "Er 73", displayText: "Baterie descărcată.", description: "Bateria internă a casei de marcat este descărcată.", solution: ["Contactați service-ul pentru înlocuire baterie","Nu opriți aparatul de la rețea"], urgent: true },
            { code: "Er 74", displayText: "Raport 2 din PC nu se poate face! Data PC este anterioară datei ultimei înregistrări din MF.", description: "Data din calculator este mai veche decât ultima înregistrare fiscală.", solution: ["Corectați data din calculator","Asigurați-vă că data este corectă"] },
            { code: "Er 75", displayText: "Înregistrare imposibilă deoarece limita preț în PLU – PREȚ MAXIM sau IN DEPARTAMENTE – PREȚ MAXIM sau VALOARE MAXIMĂ este prea mică!", description: "Limitele de preț sau valoare sunt prea mici pentru operația solicitată.", solution: ["Verificați limitele programate în setări","Măriți limitele sau reduceți prețul/valoarea"] },
            { code: "Er 76", displayText: "Eroare ceas de timp real!", description: "Ceasul intern al casei de marcat nu funcționează corect.", solution: ["Contactați service-ul autorizat","Este posibilă înlocuirea bateriei sau a circuitului"], urgent: true },
            { code: "Er 77", displayText: "Eroare generală Jurnal Electronic!", description: "Jurnalul Electronic a întâmpinat o eroare generală.", solution: ["Verificați cardul SD al JE","Contactați service-ul autorizat"], urgent: true },
            { code: "Er 78", displayText: "Jurnal Electronic PLUS!", description: "Eroare specifică Jurnalului Electronic Plus.", solution: ["Verificați starea JE","Contactați service-ul autorizat"] },
            { code: "Er 79", displayText: "SD Card JE invalid – înlocuiți SD Card!", description: "Cardul SD pentru Jurnalul Electronic este invalid.", solution: ["Înlocuiți cardul SD al JE","Contactați service-ul autorizat"], urgent: true },
            { code: "Er 81", displayText: "Valoare SHA eronată. Înlocuiți memoria JE!", description: "Eroare de integritate a datelor în Jurnalul Electronic.", solution: ["Înlocuiți memoria JE","Contactați service-ul autorizat"], urgent: true },
            { code: "Er 88", displayText: "Eroare în Memoria Fiscală!", description: "Memoria fiscală a întâmpinat o eroare.", solution: ["Nu continuați operarea","Contactați imediat service-ul autorizat"], urgent: true },
            { code: "Er 90", displayText: "Eroare la export fișier XML – nu există fișiere în intervalul de raportare ales.", description: "Nu există date în intervalul selectat pentru export XML.", solution: ["Verificați intervalul selectat","Asigurați-vă că există date în perioada respectivă"] },
            { code: "Er 93", displayText: "Eroare generală în modulul TPM. Efectuați TEST 1 în Service mode și verificați starea modulelor!", description: "Eroare în modulul de securitate TPM.", solution: ["Intrați în modul Service","Efectuați TEST 1","Verificați starea modulelor"], urgent: true },
            { code: "Er 1100", displayText: "Eroare HW – nu există comunicație între MCU1 și MCU2", description: "Eroare hardware de comunicație între procesoare.", solution: ["Contactați service-ul autorizat","Este posibilă o defecțiune hardware majoră"], urgent: true },
            { code: "Er 1005", displayText: "Lipsă Certificat digital. Instalați certificatul digital!", description: "Certificatul digital lipsește sau este corupt.", solution: ["Instalați certificatul digital","Contactați service-ul autorizat"], urgent: true },
            { code: "Er 1011", displayText: "Eroare SD Card MCU2", description: "Cardul SD pentru MCU2 este defect sau lipsă.", solution: ["Verificați cardul SD","Contactați service-ul autorizat"], urgent: true },
            { code: "Er 1012", displayText: "Eroare Crypto Chip", description: "Eroare a cipului criptografic.", solution: ["Contactați service-ul autorizat","Este necesară înlocuirea componentelor"], urgent: true },
            { code: "Er 1014", displayText: "Eroare RAM", description: "Eroare a memoriei RAM.", solution: ["Contactați service-ul autorizat","Este posibilă o defecțiune hardware"], urgent: true },
            { code: "Er 1015", displayText: "Eroare Crypto Chip", description: "Eroare a cipului criptografic (dublură).", solution: ["Contactați service-ul autorizat","Este necesară înlocuirea componentelor"], urgent: true },
            { code: "Er 1026", displayText: "Eroare SD Card FAT / Serie SD Card MCU2 diferită", description: "Eroare de sistem de fișiere pe cardul SD sau serie diferită.", solution: ["Formatați cardul SD MCU2","Contactați service-ul pentru înlocuire card SD"], urgent: true },
            { code: "Er MF 1", displayText: "Lipsește MF", description: "Memoria fiscală nu este detectată.", solution: ["Verificați conexiunea memoriei fiscale","Contactați service-ul autorizat"], urgent: true },
            { code: "Er MF 2", displayText: "Eroare scriere în MF", description: "Nu se poate scrie în memoria fiscală.", solution: ["Nu continuați operarea","Contactați service-ul autorizat"], urgent: true },
            { code: "Er MF 3", displayText: "Eroare citire din MF", description: "Nu se poate citi din memoria fiscală.", solution: ["Nu continuați operarea","Contactați service-ul autorizat"], urgent: true },
            { code: "Er MF 4", displayText: "Eroare sumă de Control", description: "Suma de control a memoriei fiscale este incorectă.", solution: ["Contactați service-ul autorizat","Datele din MF pot fi corupte"], urgent: true },
            { code: "Er MF 5", displayText: "Eroare verificare prezență MF sau MF nu este recunoscută", description: "Memoria fiscală nu este recunoscută de sistem.", solution: ["Verificați memoria fiscală","Contactați service-ul autorizat"], urgent: true },
            { code: "Er MF 6", displayText: "Eroare în conținut înregistrare", description: "Conținutul unei înregistrări din MF este eronat.", solution: ["Contactați service-ul autorizat","Memoria fiscală poate fi defectă"], urgent: true },
            { code: "Er MF 7", displayText: "MF Înlocuită. Efectuați Reset RAM sau introduceți MF corectă.", description: "Memoria fiscală a fost înlocuită cu alta.", solution: ["Efectuați Reset RAM dacă este cazul","Introduceți memoria fiscală corectă"], urgent: true },
            { code: "Er MF 8", displayText: "Diferență între număr TVA în casa de marcat și în MF / S-a găsit o înregistrare goală", description: "Neconcordanță între datele casei și memoria fiscală.", solution: ["Contactați service-ul autorizat","Verificați programarea TVA"], urgent: true },
            { code: "Er MF 10", displayText: "Eroare MF 10", description: "Eroare specifică memoriei fiscale.", solution: ["Contactați service-ul autorizat","Memoria fiscală necesită intervenție"], urgent: true }
        ]
    },
        "Parametri de sistem": {
        description: "Configurarea parametrilor de sistem pentru INCOTEX",
        steps: [
            "Accesați aplicația Fisc.exe",
            "Conectați casa de marcat la PC",
            "Explorați meniurile disponibile pentru configurare",
            "Modificați parametrii conform necesităților",
            "Salvați modificările"
        ],
        parameters: [
            { nr: 1, nume: "Data și ora", desc: "Setare dată și oră corectă" },
            { nr: 2, nume: "Antet fiscal", desc: "Datele firmei și punctul de lucru" },
            { nr: 3, nume: "Cote TVA", desc: "Procentele de TVA configurate" }
        ]
    }
};