// ==================== DATECS - TOATE PROCEDURILE ====================

const datecsProcedures = {
    "Fiscalizare": {
        description: "Procedura completă de fiscalizare pentru casele de marcat DATECS",
        steps: [
            "Conectați casa de marcat la PC și accesați meniul 6 (Conexiune PC)",
            "Deschideți programul Config_Tool.exe și apăsați butonul 'Connect & Login'",
            "Verificați data și ora sistemului. Dacă nu sunt corecte, sincronizați cu PC-ul",
            "Accesați meniul 'Header and Footer' și completați cu datele firmei conform fișei ANAF",
            "Verificați statutul de plătitor TVA. În meniul 'VATs' configurați cotele de TVA aplicabile",
            "Programați articolele comerciale din meniul 'Sale mode & Items'",
            "În secțiunea 'Fiscalization', completați 'Fiscal memory number' cu NUI-ul societății",
            "Completați 'Tax number' cu CUI-ul (cu prefixul 'RO' dacă e plătitor TVA)",
            "Apăsați butonul 'Fiscalize' - sistemul va genera automat un bon de test și un raport Z",
            "În secțiunea 'ANAF upload', încărcați profilul ANAF și profilul casei de marcat",
            "Accesați platforma 'Danubius' pentru activarea cartelei SIM (dacă folosiți GPRS)",
            "Programați revizia tehnică pentru anul următor din meniul 'Service Setting' (parola implicită 12345)",
            "Opriți casa de marcat pentru 1-2 minute, apoi reporniți",
            "Verificați transmiterea raportului Z către ANAF: accesați tasta 5, urmată de tasta 8",
            "Generați declarația de instalare, contractul și anexele aferente",
            "Completați cartea de intervenție și registrul special"
        ],
        warnings: [
            "Verificați seria casei de marcat să coincidă cu cea menționată în fișa ANAF",
            "Asigurați-vă că nivelul bateriei este optim înainte de demararea procedurii",
            "Procesul de fiscalizare este ireversibil - acordați atenție maximă introducerii datelor"
        ],
        tools: "Alimentator casă de marcat, cablu de comunicație USB, software Config_Tool, fișa ANAF cu datele firmei"
    },
    
    "Mod conectare la server ANAF": {
        description: "Configurare conexiune la serverele ANAF pentru transmiterea datelor fiscale",
        steps: [
            "Se activeaza cartela GPRS din platforma Danubius, https://danubius.online/ ",
            "Mergem la Mentenanta --> Solicitari unde se deschide panoul de Abonamente",
            "Apasam butonul de Adauga abonament nou, trecem seria casei si adaugam abonamentul",
            "Pentru conexiunea pe LAN, casele care au port LAN se introduce cablul LAN in casa de marcat",
            "Pentru verificarea conexiunii se apasa tasta ON pana apare meniul 1.Vanzare , apoi apasam tasta 5 --> 8, se va emite un bon e care scrie statusul trimis sau nu trimis"
        ],
        warnings: [
            "Asigurați-vă că SIM-ul are date mobile activate și credit suficient",
            "Verificați calitatea semnalului GSM (minim 3 linii)"
        ]
    },
    
    "Instructaj client": {
        description: "Instrucțiuni complete pentru operarea corectă a casei de marcat DATECS",
        steps: [
            "Pornire echipament: Apăsați tasta [ON] și așteptați afișarea meniului principal",
            "Accesare mod vânzare: Din meniul principal, apăsați 1 → introduceți parola 0030 → TOTAL",
            "Vânzare cu specificarea cantității: CANTITATE --> X --> suma --> PRET --> cod articol --> PLU --> STL --> TOTAL",
            "Anulare totală bon ÎNAINTE de finalizare: SHIFT + ANULARE + TASTA 3 → TOTAL",
            "Raport X (verificare fără închidere): Din meniul principal, apăsați 2 → parola 0030 TOTAL --> TOTAl",
            "Raport Z (închidere zi fiscală): Din meniul principal, apăsați 3 → parola 0030 TOTAL --> TOTAL",
            "Revenire la meniul principal: Apăsați tasta [ON] până la afișarea meniului principal",
            "Verificare transmitere raport Z: Din meniul principal, apăsați 5 → 8",
            "Oprire casă de marcat: Din meniul principal, apăsați tasta 0",
            "Descărcare date pe stick USB: Conectați adaptorul în portul mini-USB, introduceți stick-ul, intrați în meniul JURNAL ELECTRONIC → parola 0030 → TOTAL → EXPORT DATE → LUNAR ANAF → selectați luna → TOTAL",
            "Raport Jurnal Electronic: JURNAL ELECTRONIC → parola 0030 → TOTAL → RAPOARTE JE → TOTAL → RAP.DETALIAT JE → DUPA DATA/ORA → introduceți intervalul"
        ],
        warnings: [
            "Nu opriți casa de marcat în timpul transmiterii datelor către ANAF",
            "Verificați periodic stocul de hârtie termică"
        ]
    },
    
    "Revizie AMEF": {
        description: "Procedură de revizie tehnică anuală pentru casele de marcat DATECS",
        steps: [
            "Apăsați tasta [ON] până la afișarea meniului principal",
            "Navigați cu săgeata în jos până la opțiunea 'Service'",
            "Apăsați [TOTAL] și introduceți parola de service (0000, 1234 sau cea configurată)",
            "Navigați cu săgeata în jos până la 'Setare atenționare'",
            "Apăsați [TOTAL] și setați data reviziei tehnice - cu un an înainte",
            "Apăsați [TOTAL] pentru confirmare, apoi [ON] pentru revenire la meniul principal",
            "Navigați la 'Teste' și apăsați [TOTAL]",
            "Selectați 'Test complet' și apăsați [TOTAL]",
            "Lăsați sistemul să efectueze testarea automată",
            "După finalizare, apăsați [ON] până la revenirea în meniul principal",
            "Verificați transmiterea la ANAF: apăsați 5 → 8 (neconsecutiv)",
            "Pe bonul emis trebuie să apară 'trimis' sau 'netrimis'",
            "Notați în cartea de intervenție: 'Verificare tehnică anuală efectuată, test ANAF OK'",
            "Atașați bonul emis în cartea de intervenție"
        ],
        warnings: [
            "Efectuați toate testele de diagnostic înainte de finalizare",
            "Curățați capul de imprimare dacă este necesar"
        ],
        tools: "Șurubelnițe, soluție curățare cap imprimare"
    },
    
    "Schimbare punct de lucru": {
        description: "Procedură pentru modificarea sediului secundar în casa de marcat",
        steps: [
            "Accesați programul Config_Tool.exe și conectați casa de marcat",
            "În rubrica 'Header & Footer', modificați adresa cu noul sediu",
            "Apăsați 'Set header' pentru a programa modificarea",
            "Generați o nouă declarație de instalare cu data corespunzătoare",
            "Înregistrați modificarea în cartea de intervenții și registrul special"
        ],
        warnings: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat (cu noul punct de lucru, maxim 30 de zile), Declarația F4105",
            "Acordați atenție sporită întocmirii corecte a documentelor",
            "Modificarea se poate face doar în baza documentelor oficiale"
        ]
    },
    
    "Schimbare cote TVA": {
        description: "Procedură pentru modificarea cotelor de TVA în casa de marcat",
        steps: [
            "Verificați în Registrul ANAF dacă firma este plătitoare sau neplătitoare de TVA",
            "Conectați casa de marcat la PC și accesați modul PC (tasta 6)",
            "Deschideți programul Config_Tool și conectați-vă la echipament",
            "Accesați meniul 'VATs'",
            "Modificați procentele TVA conform noilor cote",
            "Apăsați 'Save VATs' pentru a salva modificările",
            "Notați intervenția în cartea de intervenție",
            "Verificați cu un bon de test că noile cote sunt aplicate corect"
        ],
        warnings: [
            "Verificați legislația în vigoare înainte de modificarea cotelor TVA",
            "Trecerea de la Neplătitor la Plătitor TVA necesită înlocuirea MF și DMJE"
        ]
    },
    
    "Introducere articole PLU": {
        description: "Procedură pentru programarea articolelor în casa de marcat",
        steps: [
            "Pregătiți lista de articole în format Excel (.csv)",
            "Conectați casa de marcat la PC și accesați modul PC (tasta 6)",
            "Deschideți programul Config_Tool și accesați meniul 'Sale mode & Items'",
            "Apăsați 'Read items' pentru a citi articolele existente",
            "Introduceți articolele noi manual sau importați un fișier CSV",
            "Verificați corectitudinea datelor introduse (cod, denumire, preț, TVA)",
            "Apăsați 'Send items' pentru a transfera articolele în casa de marcat",
            "Emiteti un bon de test pentru verificare"
        ],
        warnings: [
            "Dacă s-au efectuat deja vânzări, este necesar un raport Z pe articole înainte de modificare",
            "Respectați formatul corect al fișierului de import"
        ]
    },
    
    "Predare memorie fiscală": {
        description: "Procedură complexă pentru predarea memoriei fiscale. Se efectuează când: MF este plină, MF defectă, schimbarea datelor utilizatorului (după 16 modificări)",
        steps: [
            "Porniți casa de marcat și verificați transmiterea rapoartelor Z (tasta 5 → 8)",
            "Statusul trebuie să fie 'trimis' pentru toate rapoartele",
            "Conectați casa de marcat la PC prin cablu USB și accesați modul PC (meniul 6)",
            "Deschideți programul ConfigTool și apăsați 'Connect & Login'",
            "Din meniul 'FM reports', citiți raportul sumar al memoriei fiscale de la data fiscalizării până în prezent",
            "Din același meniu, citiți și salvați un raport detaliat al memoriei fiscale",
            "Accesați meniul 'JE reading' și citiți Jurnalul Electronic pentru aceeași perioadă",
            "Opțional, citiți și fișierele XML pentru ultimele 3 luni",
            "Generați un proces-verbal de predare a memoriei fiscale",
            "Desfaceți casa de marcat și extrageți memoria fiscală și jurnalul electronic",
            "Predați componentele clientului spre păstrare (minim 6 ani)"
        ],
        warnings: [
            "Procedura necesită maximă atenție - datele fiscale trebuie salvate corect",
            "Clientul este obligat să păstreze MF și JE pentru perioada legală de arhivare"
        ]
    },
    
    "Înlocuire jurnal electronic": {
        description: "Procedură pentru înlocuirea cardului de jurnal electronic",
        steps: [
            "Înlocuiți cardul JE cu unul nou (comandat special pentru model)",
            "Montați un jumper pe placa de bază și porniți casa de marcat",
            "Pe afișaj va apărea simbolul cheie și mesajul 'INCHIDERE DMJE 1 ? DA sau NU'",
            "Selectați DA și introduceți data și ora curentă",
            "Casa de marcat va afișa 'DESCHIDERE DMJE 2'",
            "Scoateți jumperul",
            "Conectați AMEF la calculator și lansați programul FMI.exe",
            "Citiți conținutul memoriei fiscale (meniu → Read fiscal memory)",
            "Exportați datele în format text (meniu → Export → As text...)",
            "Listați fișierul rezultat sau copiați pe stick USB și predați clientului",
            "Întocmiți proces-verbal de predare a cardului JE (plic sigilat, păstrare 10 ani)",
            "Informați clientul că raportarea lunară va fi alcătuită din două părți"
        ],
        warnings: [
            "JE-ul trebuie comandat special pentru model",
            "Respectați cu strictețe pozițiile jumperilor",
            "Păstrați JE-ul defect pentru eventuale controale"
        ],
        tools: "Cablu USB, șurubelnițe, JE nou specific"
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
        description: "Prelungire abonament pentru cartela SIM de date",
        steps: [
            "Accesați platforma Danubius Exim",
            "Autentificați-vă în contul de service",
            "Selectați casa de marcat din listă",
            "Alegeți opțiunea 'Prelungire abonament'",
            "Selectați perioada dorită (6 luni sau 12 luni)",
            "Efectuați plata conform instrucțiunilor",
            "Confirmați tranzacția",
            "Verificați noul termen de valabilitate în casa de marcat",
            "Testați conexiunea la serverul ANAF"
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
            "Pregătiți o baterie RAM specifică casei de marcat",
            "Măsurați bateria nouă - trebuie să aibă valori între 3-3.5V",
            "Desfaceți casa de marcat cu atenție",
            "Deconectați alimentarea și componentele care împiedică întoarcerea plăcii de bază",
            "Dezlipiți bateria RAM veche cu grijă",
            "Lipiți bateria RAM nouă în poziția corectă",
            "Măsurați din nou pentru siguranță (3-3.5V)",
            "Atașați toate panglicile și componentele înapoi",
            "Puneți casa la alimentare și porniți",
            "La pornire, treceți parola de service (implicit 0000)",
            "Setați data și ora din acel moment",
            "Atașați bonul emis în cartea de intervenții"
        ],
        warnings: [
            "Atenție la polaritatea bateriei RAM",
            "Folosiți lipire cu grijă pentru a nu deteriora placa de bază"
        ],
        tools: "Baterie RAM nouă, lipit, multimetru, șurubelnițe"
    },
    
    "Înlocuire tastatură AMEF": {
        description: "Înlocuire tastatură defectă",
        steps: [
            "Desfaceți carcasa casei de marcat",
            "Localizați cablul plat al tastaturii pe placa de bază",
            "Deconectați cablul cu grijă",
            "Scoateți șuruburile de fixare ale tastaturii",
            "Îndepărtați tastatura veche",
            "Poziționați tastatura nouă",
            "Fixați șuruburile",
            "Reconectați cablul plat în conector",
            "Asamblați carcasa",
            "Testați fiecare tastă pentru funcționare corectă"
        ],
        warnings: [
            "Aveți grijă la cablul plat - este fragil",
            "Asigurați-vă că noul model este compatibil"
        ],
        tools: "Tastatură nouă specifică, șurubelnițe"
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire afișaj defect",
        steps: [
            "Identificați corect modelul de display aferent casei de marcat",
            "Desfaceți cu atenție carcasa până când puteți accesa afișajul",
            "Deconectați cablul display-ului vechi din port",
            "Scoateți display-ul vechi",
            "Conectați display-ul nou cu atenție",
            "Asamblați carcasa",
            "Verificați funcționalitatea display-ului nou"
        ],
        warnings: [
            "Atenție la cablurile fragile ale display-ului",
            "Asigură-te că noul display este compatibil cu modelul"
        ],
        tools: "Display nou specific modelului, șurubelnițe"
    },
    
    "Înlocuire acumulator": {
        description: "Înlocuire acumulator intern",
        steps: [
            "Căutați un acumulator compatibil cu modelul casei de marcat",
            "Desfaceți carcasa",
            "Localizați acumulatorul pe placa de bază",
            "Scoateți acumulatorul vechi din port",
            "Verificați acumulatorul nou să nu aibă defecțiuni",
            "Măsurați tensiunea acumulatorului nou",
            "Atașați acumulatorul nou în portul dedicat",
            "Asamblați carcasa",
            "Porniți casa și verificați funcționarea"
        ],
        warnings: [
            "Verifică polaritatea acumulatorului înainte de montare",
            "Asigură-te că acumulatorul nou este de aceeași tensiune"
        ],
        tools: "Acumulator nou compatibil, șurubelnițe, multimetru"
    },
    
    "Înlocuire imprimantă termică": {
        description: "Înlocuirea mecanismului de imprimare termică",
        steps: [
            "Desfaceți carcasa casei de marcat",
            "Deconectați cablul plat al imprimantei de pe placa de bază",
            "Scoateți șuruburile de fixare ale imprimantei",
            "Îndepărtați imprimanta veche",
            "Montați imprimanta nouă și fixați șuruburile",
            "Reconectați cablul plat cu atenție",
            "Asamblați carcasa",
            "Introduceți hârtie termică nouă",
            "Testați cu un bon de test"
        ],
        warnings: [
            "Atenție la cablul plat - este foarte fragil",
            "Asigură-te că imprimanta nouă este compatibilă cu modelul"
        ],
        tools: "Imprimantă termică nouă, șurubelnițe"
    },
    
    "Listă erori AMEF": {
        description: "Listă completă de coduri de erori pentru casele DATECS",
        errors: [
            { code: "0", displayText: "Operation successful", description: "Operațiune finalizată cu succes.", solution: ["Nu este necesară nicio acțiune - operațiunea s-a desfășurat corect"] },
            { code: "-1", displayText: "General error / Unknown error", description: "Eroare generală sau necunoscută.", solution: ["Reporniți aparatul","Verificați conexiunile","Contactați service-ul dacă problema persistă"] },
            { code: "-2", displayText: "Create error", description: "Eroare la creare.", solution: ["Verificați permisiunile de creare","Verificați spațiul disponibil","Reporniți aplicația"] },
            { code: "-3", displayText: "Open error", description: "Eroare la deschidere.", solution: ["Verificați dacă resursa există","Verificați permisiunile de acces","Închideți alte aplicații care ar putea folosi resursa"] },
            { code: "-4", displayText: "Close error", description: "Eroare la închidere.", solution: ["Verificați starea conexiunii","Încercați să reporniți aplicația"] },
            { code: "-5", displayText: "Device or resource busy", description: "Dispozitiv sau resursă ocupată.", solution: ["Așteptați eliberarea resursei","Închideți alte aplicații care folosesc dispozitivul","Reporniți aparatul"] },
            { code: "-6", displayText: "Timeout expired", description: "Timpul de așteptare a expirat.", solution: ["Verificați conexiunea","Creșteți timpul de timeout în setări","Încercați din nou"] },
            { code: "-7", displayText: "The operation is not supported", description: "Operațiunea nu este suportată.", solution: ["Verificați compatibilitatea versiunii","Consultați documentația tehnică","Actualizați firmware-ul"] },
            { code: "-8", displayText: "Memory allocation error", description: "Eroare de alocare a memoriei.", solution: ["Reporniți aparatul","Verificați memoria disponibilă","Reduceți volumul de date procesat"] },
            { code: "-9", displayText: "Invalid parameter", description: "Parametru invalid.", solution: ["Verificați parametrii introduși","Consultați manualul pentru valori corecte","Corectați datele de intrare"] },
            { code: "-10", displayText: "Input/Output error", description: "Eroare de intrare/ieșire.", solution: ["Verificați conexiunile hardware","Reporniți dispozitivul","Contactați service-ul"] },
            { code: "-11", displayText: "CRC error", description: "Eroare de sumă de control.", solution: ["Verificați integritatea datelor","Retransmiteți datele","Contactați service-ul"] },
            { code: "-12", displayText: "Flash memory error", description: "Eroare de memorie flash.", solution: ["Reporniți aparatul","Contactați service-ul pentru verificare","Este posibil să necesite înlocuire"], urgent: true },
            { code: "-13", displayText: "EEPROM error", description: "Eroare de memorie EEPROM.", solution: ["Reporniți aparatul","Contactați service-ul pentru verificare","Este posibil să necesite reconfigurare"], urgent: true },
            { code: "-14", displayText: "Device error", description: "Eroare de dispozitiv.", solution: ["Verificați starea hardware","Reporniți aparatul","Contactați service-ul"] },
            { code: "-15", displayText: "The operation is not implemented", description: "Operațiunea nu este implementată.", solution: ["Verificați versiunea de firmware","Consultați documentația","Contactați producătorul"] },
            { code: "-16", displayText: "The device or resource does not exists", description: "Dispozitivul sau resursa nu există.", solution: ["Verificați conexiunile","Verificați configurația","Asigurați-vă că dispozitivul este conectat"] },
            { code: "-17", displayText: "Invalid command", description: "Comandă invalidă.", solution: ["Verificați sintaxa comenzii","Consultați manualul de comandă","Corectați comanda"] },
            { code: "-18", displayText: "Not exist object", description: "Obiect inexistent.", solution: ["Verificați existența obiectului","Creați obiectul înainte de utilizare"] },
            { code: "-19", displayText: "No more items or operations", description: "Nu mai există elemente sau operațiuni.", solution: ["Finalizați operațiunea curentă","Verificați limita maximă atinsă"] },
            { code: "-20", displayText: "Command failed", description: "Comanda a eșuat.", solution: ["Verificați parametrii","Încercați din nou","Verificați starea dispozitivului"] },
            { code: "-21", displayText: "Invalid command", description: "Comandă invalidă.", solution: ["Verificați sintaxa","Consultați documentația","Corectați comanda"] },
            { code: "-22", displayText: "No registered", description: "Neînregistrat.", solution: ["Efectuați înregistrarea necesară","Verificați statusul înregistrării"] },
            { code: "-23", displayText: "Error which was obtained in GetStatus method", description: "Eroare obținută în metoda GetStatus. Unii biți din statusul dispozitivului fiscal sunt activați.", solution: ["Verificați starea detaliată a dispozitivului","Consultați lista de erori pentru biții specifici","Contactați service-ul"] },
            { code: "-10500", displayText: "Missing input parameter", description: "Parametru de intrare lipsă.", solution: ["Completați toți parametrii obligatorii","Verificați cerințele comenzii"] },
            { code: "-10502", displayText: "Check for exceeding the upper limit of the parameter (length)", description: "Depășire limită superioară a parametrului (lungime).", solution: ["Reduceți lungimea parametrului","Verificați limita maximă permisă"] },
            { code: "-10503", displayText: "Check for exceeding the lower limit of the parameter (length)", description: "Depășire limită inferioară a parametrului (lungime).", solution: ["Măriți lungimea parametrului","Verificați limita minimă permisă"] },
            { code: "-10504", displayText: "Check for availability in the enumerated list of values", description: "Verificare disponibilitate în lista de valori.", solution: ["Utilizați o valoare din lista permisă","Consultați lista de valori acceptate"] },
            { code: "-10505", displayText: "Check whether the parameter is real number", description: "Verificare dacă parametrul este număr real.", solution: ["Introduceți un număr real valid","Verificați formatul numeric"] },
            { code: "-10506", displayText: "Check for exceeding the upper limit of the parameter (Currency value)", description: "Depășire limită superioară a parametrului (valoare monetară).", solution: ["Reduceți valoarea","Verificați limita maximă pentru sume"] },
            { code: "-10507", displayText: "Check for exceeding the lower limit of the parameter (Currency value)", description: "Depășire limită inferioară a parametrului (valoare monetară).", solution: ["Măriți valoarea","Verificați limita minimă pentru sume"] },
            { code: "-10508", displayText: "Check for exceeding the upper limit of the parameter (QTY value)", description: "Depășire limită superioară a parametrului (cantitate).", solution: ["Reduceți cantitatea","Verificați limita maximă de cantitate"] },
            { code: "-10509", displayText: "Check for exceeding the lower limit of the parameter (QTY value)", description: "Depășire limită inferioară a parametrului (cantitate).", solution: ["Măriți cantitatea","Verificați limita minimă de cantitate"] },
            { code: "-10510", displayText: "Check whether the parameter is an integer value", description: "Verificare dacă parametrul este număr întreg.", solution: ["Introduceți un număr întreg","Eliminați zecimalele"] },
            { code: "-10511", displayText: "Check for exceeding the upper limit of the parameter (INT value)", description: "Depășire limită superioară a parametrului (valoare întreagă).", solution: ["Reduceți valoarea","Verificați limita maximă pentru numere întregi"] },
            { code: "-10512", displayText: "Check for exceeding the lower limit of the parameter (INT value)", description: "Depășire limită inferioară a parametrului (valoare întreagă).", solution: ["Măriți valoarea","Verificați limita minimă pentru numere întregi"] },
            { code: "-10525", displayText: "Timeout error", description: "Eroare de timeout.", solution: ["Verificați conexiunea","Încercați din nou","Creșteți timpul de așteptare"] },
            { code: "-10526", displayText: "Command not found (By name)", description: "Comandă negăsită (după nume).", solution: ["Verificați numele comenzii","Consultați lista de comenzi disponibile"] },
            { code: "-10527", displayText: "Command not found (By values)", description: "Comandă negăsită (după valori).", solution: ["Verificați valorile parametrilor","Consultați documentația"] },
            { code: "-10528", displayText: "Successfully canceled PinPad transaction (automatically - from settings)", description: "Tranzacție PinPad anulată cu succes (automat - din setări).", solution: ["Nu este necesară acțiune - anulare automată","Verificați setările PinPad"] },
            { code: "-10529", displayText: "The CSV file is not in format", description: "Fișierul CSV nu este în formatul corect.", solution: ["Verificați formatul fișierului CSV","Asigurați-vă că delimitatorul este corect"] },
            { code: "-10530", displayText: "This is a header row", description: "Acesta este un rând de antet.", solution: ["Ignorați rândul de antet","Procesați doar rândurile cu date"] },
            { code: "-100001", displayText: "General error in fiscal device: In - out error (cannot read or write)", description: "Eroare generala AMEF: eroare in - out (nu poate citi sau scrie)", solution: ["Verifică conexiunile cablurilor","Restartează aparatul","Contactează service dacă problema persistă"] },
            { code: "-100002", displayText: "General error in fiscal device: Wrong checksum", description: "Eroare generala AMEF: Suma de control gresita", solution: ["Verificați integritatea datelor","Reporniți aparatul","Contactați service-ul"] },
            { code: "-100003", displayText: "General error in fiscal device: No more data", description: "Eroare generala AMEF: Lipsa informatii", solution: ["Verificați disponibilitatea datelor","Asigurați-vă că există informații de citit"] },
            { code: "-100004", displayText: "General error in fiscal device: The element is not found", description: "Eroare generala AMEF: Element inexistent", solution: ["Verificați existența elementului","Creați elementul înainte de utilizare"] },
            { code: "-100005", displayText: "General error in fiscal device: There are no records found", description: "Eroare generala AMEF: Nu sunt inregistrari", solution: ["Verificați perioada selectată","Asigurați-vă că există înregistrări"] },
            { code: "-100006", displayText: "General error in fiscal device: The operation is aborted", description: "Eroare generala AMEF: Operatie abandonata", solution: ["Încercați din nou operația","Verificați starea dispozitivului"] },
            { code: "-100007", displayText: "Wrong mode (standart training...) is selected", description: "Selectare Mod Gresit (standard training)", solution: ["Selectați modul corect de operare","Verificați setările"] },
            { code: "-100008", displayText: "General error in fiscal device: Device is not ready", description: "Eroare generala AMEF: Echipamentul nu este pregatit", solution: ["Așteptați inițializarea dispozitivului","Reporniți aparatul","Verificați conexiunile"] },
            { code: "-100009", displayText: "General error in fiscal device: Nothing to print", description: "Eroare generala AMEF: Nu exista nimic de printat", solution: ["Adăugați produse în bon","Verificați dacă există date de imprimat"] },
            { code: "-100100", displayText: "Fiscal memory error: Fiscal memory is busy", description: "Eroare memorie fiscala: Memorie fiscala ocupata", solution: ["Așteptați finalizarea operației curente","Reporniți aparatul","Contactați service-ul dacă persistă"] },
            { code: "-100101", displayText: "Fiscal memory error: Fiscal memory failure. Could not read or write", description: "Eroare memorie fiscala: Esuare Memorie Fiscala. nu poate citi sau scrie", solution: ["Nu continuați operarea","Contactați service-ul autorizat","Memoria fiscală poate fi defectă"], urgent: true },
            { code: "-100102", displayText: "Fiscal memory error: Forbidden write in fiscal memory", description: "Eroare memorie fiscala: Scriere interzisa in MF", solution: ["Operația nu este permisă în acest moment","Verificați starea memoriei fiscale","Contactați service-ul"] },
            { code: "-100103", displayText: "Fiscal memory error: Wrong address in fiscal memory", description: "Eroare memorie fiscala: Adresa gresita in MF", solution: ["Reporniți aparatul","Contactați service-ul autorizat"], urgent: true },
            { code: "-100104", displayText: "Fiscal memory error: Wrong size in fiscal memory", description: "Eroare memorie fiscala: Marime gresita in MF", solution: ["Verificați configurația","Contactați service-ul autorizat"], urgent: true },
            { code: "-100105", displayText: "Fiscal memory error: Fiscal memory is not connected", description: "Eroare memorie fiscala: MF nu e conectata", solution: ["Verificați conexiunea memoriei fiscale","Contactați service-ul autorizat"], urgent: true },
            { code: "-100106", displayText: "Fiscal memory error: Wrong checksum in fiscal memory (invalid data)", description: "Eroare memorie fiscala: Suma de control gresita in MF (invalid data)", solution: ["Datele din MF sunt corupte","Contactați service-ul autorizat"], urgent: true },
            { code: "-100107", displayText: "Fiscal memory error: Empty block in fiscal memory", description: "Eroare memorie fiscala: Bloc de memorie gol in MF", solution: ["Verificați integritatea MF","Contactați service-ul"] },
            { code: "-100108", displayText: "Fiscal memory error: Maximum number of block in fiscal memory", description: "Eroare memorie fiscala: Numar maxim de blocuri in MF", solution: ["Memoria fiscală este aproape plină","Contactați service-ul pentru evaluare"] },
            { code: "-100109", displayText: "Fiscal memory error: Wrong range in fiscal memory", description: "Eroare memorie fiscala: Zona de memorie gresita in MF", solution: ["Contactați service-ul autorizat","Este posibilă o eroare hardware"], urgent: true },
            { code: "-100110", displayText: "Fiscal memory error: Empty range in fiscal memory", description: "Eroare memorie fiscala: zona de memorie goala in MF", solution: ["Verificați datele din MF","Contactați service-ul"] },
            { code: "-100111", displayText: "Fiscal memory error: New module in fiscal memory", description: "Eroare memorie fiscala: Modul nou MF", solution: ["Memoria fiscală a fost înlocuită","Contactați service-ul pentru configurare"], urgent: true },
            { code: "-100112", displayText: "Fiscal memory error: Fiscal memory is not empty", description: "Eroare memorie fiscala: MF nu e goala", solution: ["Memoria fiscală conține deja date","Contactați service-ul"] },
            { code: "-100113", displayText: "Fiscal memory error: Fiscal memory is not equal", description: "Eroare memorie fiscala: MF nu e egala", solution: ["Incompatibilitate memorie fiscală","Contactați service-ul autorizat"], urgent: true },
            { code: "-100114", displayText: "Fiscal memory error: Fiscal memory is full", description: "Eroare memorie fiscala: MF plina", solution: ["Nu se mai pot face înregistrări fiscale","Contactați service-ul pentru înlocuire MF"], urgent: true },
            { code: "-100115", displayText: "Fiscal memory error: Fiscal memory needs update", description: "Eroare memorie fiscala: MF necesita update", solution: ["Contactați service-ul pentru actualizare","Este necesară intervenția tehnicianului"], urgent: true },
            { code: "-100116", displayText: "Fiscal memory error: Fiscal memory is blocked", description: "Eroare memorie fiscala: MF blocata", solution: ["Memoria fiscală este blocată","Contactați service-ul autorizat"], urgent: true },
            { code: "-100400", displayText: "Line thermal printer mechanism error: Power supply error (3,3 V)", description: "Eroare imprimanta termica: Eroare alimentare (3,3 V)", solution: ["Verificați sursa de alimentare","Reporniți aparatul","Contactați service-ul"], urgent: true },
            { code: "-100401", displayText: "Line thermal printer mechanism error: Power supply error (24V or 8V)", description: "Eroare imprimanta termica: Eroare alimentare (24V sau 8V)", solution: ["Verificați sursa de alimentare","Reporniți aparatul","Contactați service-ul"], urgent: true },
            { code: "-100402", displayText: "Line thermal printer mechanism error: Head overheating", description: "Eroare imprimanta termica: Cap imprimare supraincalzit", solution: ["Opriți aparatul și lăsați-l să se răcească","Reduceți volumul de tipărire","Verificați ventilarea"] },
            { code: "-100403", displayText: "Line thermal printer mechanism error: Paper end", description: "Eroare imprimanta termica: Lipsa hartie", solution: ["Încărcați hârtie termică nouă","Verificați dacă hârtia este introdusă corect","Curățați senzorii de hârtie"] },
            { code: "-100404", displayText: "Line thermal printer mechanism error: Cover is open", description: "Eroare imprimanta termica: Capac deschis", solution: ["Închideți capacul imprimantei","Verificați dacă capacul este fixat corect"] },
            { code: "-100405", displayText: "Line thermal printer mechanism error: Near paper end", description: "Eroare imprimanta termica: Atentie! Se termina hartia", solution: ["Pregătiți o rolă nouă de hârtie","Înlocuiți hârtia când se termină"] },
            { code: "-100407", displayText: "Line thermal printer mechanism error: Cutter error", description: "Eroare imprimanta termica: Eroare Cutter", solution: ["Verificați dacă cutter-ul nu este blocat","Curățați zona cutter-ului","Contactați service-ul"] },
            { code: "-100414", displayText: "Printer on time is overrun", description: "Tiparire desincronizata", solution: ["Reporniți imprimanta","Verificați sincronizarea","Contactați service-ul"] },
            { code: "-100500", displayText: "System error: Memory structure error", description: "Eroare sistem: Eroare structura memorie", solution: ["Reporniți aparatul","Contactați service-ul autorizat"], urgent: true },
            { code: "-100501", displayText: "System error: Error in RAM", description: "Eroare sistem: Eroare RAM", solution: ["Reporniți aparatul","Contactați service-ul - posibilă defecțiune hardware"], urgent: true },
            { code: "-100502", displayText: "System error: Flash memory error", description: "Eroare sistem: Eroare memorie flash", solution: ["Reporniți aparatul","Contactați service-ul autorizat"], urgent: true },
            { code: "-100503", displayText: "System error: SD card error", description: "Eroare sistem: Eroare card SD", solution: ["Verificați cardul SD","Înlocuiți cardul SD dacă este necesar","Contactați service-ul"], urgent: true },
            { code: "-100504", displayText: "System error: Invalid message file", description: "Eroare sistem: Fisier mesaje invalid", solution: ["Reporniți aparatul","Contactați service-ul pentru reinstalare"] },
            { code: "-100505", displayText: "System error: Fiscal memory error (could not write or read)", description: "Eroare sistem: Eroare memorie fiscala (nu poate scrie sau citi)", solution: ["Nu continuați operarea","Contactați service-ul autorizat"], urgent: true },
            { code: "-100506", displayText: "System error: No RAM battery", description: "Eroare sistem: Lipsa baterie RAM", solution: ["Contactați service-ul pentru înlocuire baterie","Datele pot fi pierdute la oprire"], urgent: true },
            { code: "-100507", displayText: "System error: SAM module error", description: "Eroare sistem: eroare modul SAM", solution: ["Verificați modulul SAM","Contactați service-ul autorizat"], urgent: true },
            { code: "-100508", displayText: "System error: Real time clock error", description: "Eroare sistem: eroare ceas timp real", solution: ["Setați data și ora corectă","Înlocuiți bateria","Contactați service-ul"] },
            { code: "-100509", displayText: "System error: Memory error", description: "Eroare sistem: eroare de memorie", solution: ["Reporniți aparatul","Contactați service-ul"] },
            { code: "-100510", displayText: "System error: The size of SD card is wrong", description: "Eroare sistem: Marimea SD Card-ului este gresita", solution: ["Folosiți un card SD cu dimensiunea corectă","Verificați specificațiile tehnice"] },
            { code: "-101000", displayText: "Common logical error: No heap memory", description: "Eroare logica: memorie insuficienta", solution: ["Reporniți aparatul","Reduceți volumul de date procesat"] },
            { code: "-101001", displayText: "Common logical error: File manipulate error", description: "Eroare logica: fisier eronat", solution: ["Verificați integritatea fișierului","Reporniți aparatul"] },
            { code: "-101003", displayText: "Common logical error: Operation is rejected", description: "Eroare logica: operatie respinsa", solution: ["Verificați parametrii operației","Încercați din nou"] },
            { code: "-101004", displayText: "Common logical error: Bad input. Some of the data or parameters are incorrect", description: "Eroare logica: Introducere gresita. Parametri incorecti", solution: ["Verificați datele introduse","Corectați parametrii"] },
            { code: "-101005", displayText: "Common logical error: In Application Programming error", description: "Eroare logica: programare aplicatie gresita", solution: ["Verificați setările aplicației","Contactați service-ul"] },
            { code: "-101006", displayText: "Common logical error: The execution of the operation is not possible", description: "Eroare logica: operatiunea nu poate fi executata", solution: ["Verificați starea dispozitivului","Încercați o altă operație"] },
            { code: "-101007", displayText: "Common logical error: Timeout. The time for waiting execution is out", description: "Eroare logica: Timp de executie depasit", solution: ["Încercați din nou","Verificați conexiunea"] },
            { code: "-101008", displayText: "Common logical error: Invalid time", description: "Eroare logica: data invalida", solution: ["Setați data și ora corectă","Verificați formatul datei"] },
            { code: "-101009", displayText: "Common logical error: The operation is cancelled", description: "Eroare logica: Operatiune abandonata", solution: ["Operația a fost anulată de utilizator","Reîncepeți operația dacă este necesar"] },
            { code: "-101010", displayText: "Common logical error: Invalid format", description: "Eroare logica: format invalid", solution: ["Verificați formatul datelor","Utilizați formatul corect"] },
            { code: "-101011", displayText: "Common logical error: Invalid data", description: "Eroare logica: informatie invalida", solution: ["Verificați datele introduse","Corectați informațiile"] },
            { code: "-101012", displayText: "Common logical error: Data parsing error", description: "Eroare logica: eroare analiza informatie", solution: ["Verificați structura datelor","Reporniți aplicația"] },
            { code: "-101013", displayText: "Common logical error: Hardware configuration error", description: "Eroare logica: eroare configurare hw", solution: ["Verificați configurația hardware","Contactați service-ul"] },
            { code: "-101014", displayText: "ERR_ACCESS_DENIED", description: "Acces interzis", solution: ["Verificați permisiunile","Autentificați-vă cu drepturi corespunzătoare"] },
            { code: "-101015", displayText: "Wrong data length", description: "Lungime gresita a datelor", solution: ["Verificați lungimea datelor","Corectați datele introduse"] },
            { code: "-101016", displayText: "Error during verification of Z reports", description: "Eroare in timpul verificarilor rapoartelor Z", solution: ["Verificați rapoartele Z","Contactați service-ul"] },
            { code: "-101017", displayText: "Common logical error: No permission", description: "Eroare logica: Fara Permisiune", solution: ["Verificați drepturile utilizatorului","Autentificați-vă cu un utilizator autorizat"] },
            { code: "-102000", displayText: "Battery error: Low battery", description: "eroare acumulator: Nivel scazut acumulator", solution: ["Conectați aparatul la rețea","Înlocuiți bateria"] },
            { code: "-102001", displayText: "Battery error: Low battery warning", description: "eroare acumulator: Atentie, nivel scazut acumulator", solution: ["Pregătiți înlocuirea bateriei","Conectați la rețea pentru încărcare"] },
            { code: "-102002", displayText: "Operator error: Wrong operator password", description: "eroare operator: parola operator gresita", solution: ["Introduceți parola corectă","Contactați administratorul"] },
            { code: "-102003", displayText: "ECR error: ID number is empty", description: "Eroare AMEF: Numar ID necompletat", solution: ["Completați numărul de identificare","Programați ID-ul corect"] },
            { code: "-102004", displayText: "Bluetooth error: Bluetooth is not found", description: "Eroare Bluetooth: Nu exista Bluetooth", solution: ["Verificați dacă Bluetooth este disponibil","Activați Bluetooth-ul"] },
            { code: "-102005", displayText: "Display error: Display is not connected", description: "Eroare ecran: Afisaj client deconectat", solution: ["Verificați conexiunea afișajului","Reporniți aparatul"] },
            { code: "-102006", displayText: "Printer error: Printer is not connected", description: "Eroare printer: Printer deconectat", solution: ["Verificați conexiunea imprimantei","Reporniți imprimanta"] },
            { code: "-102007", displayText: "SD card error: SD card not present", description: "Eroare card SD: Nu exista card SD", solution: ["Introduceți un card SD","Verificați dacă cardul este inserat corect"] },
            { code: "-102008", displayText: "SD card error: SD2 card not present", description: "Eroare card SD: Nu exista card SD2", solution: ["Verificați al doilea card SD","Introduceți cardul necesar"] },
            { code: "-102009", displayText: "ECR error: VAT rates is not set", description: "Eroare AMEF: Cota TVA ne-setata", solution: ["Programați cotele de TVA","Verificați setările fiscale"] },
            { code: "-102010", displayText: "ECR error: Header lines are empty", description: "Eroare AMEF: Linii antet goale", solution: ["Programați antetul bonului","Completați informațiile firmei"] },
            { code: "-103000", displayText: "PLU database error: PLU database is not found", description: "Eroare baza PLU: Baza de date PLU inexistenta", solution: ["Creați baza de date PLU","Contactați service-ul"] },
            { code: "-103001", displayText: "PLU database error: PLU code already exists", description: "Eroare baza PLU: codul PLU existent", solution: ["Utilizați un alt cod PLU","Verificați codurile existente"] },
            { code: "-103002", displayText: "PLU database error: Barcode already exists", description: "Eroare baza PLU: Cod bare existent", solution: ["Utilizați un alt cod de bare","Codul de bare trebuie să fie unic"] },
            { code: "-103003", displayText: "PLU database error: PLU database is full", description: "Eroare baza PLU: Baza date PLU plina", solution: ["Ștergeți PLU-uri nefolosite","Contactați service-ul pentru extindere"] },
            { code: "-103004", displayText: "PLU database error: PLU has turnover", description: "Eroare baza PLU: PLU are rulaj", solution: ["Nu se poate șterge PLU-ul cu rulaj","Efectuați raportul Z înainte de modificare"] },
            { code: "-103005", displayText: "PLU database error: In the PLU base has an article with same name", description: "Eroare baza PLU: Nume PLU existent", solution: ["Utilizați un alt nume","Numele trebuie să fie unic"] },
            { code: "-103006", displayText: "PLU database error: PLU name is not unique", description: "Eroare baza PLU: Nume PLU duplicat", solution: ["Schimbați numele PLU-ului","Folosiți un nume unic"] },
            { code: "-103007", displayText: "PLU database error: Database format is not compatible", description: "Eroare baza PLU: Formatul bazei de date nu e compatibil", solution: ["Actualizați formatul bazei de date","Contactați service-ul"] },
            { code: "-103008", displayText: "Can't open the PLU database file", description: "Baza date PLU nu poate fi deschisa", solution: ["Verificați integritatea bazei de date","Reporniți aparatul","Contactați service-ul"] },
            { code: "-104000", displayText: "Service operation error: Z report is needed for this operation", description: "Eroare operare service: Rulati Raport Z inaintea acestei operatiuni", solution: ["Efectuați Raportul Z","Reluați operația după raport"] },
            { code: "-104001", displayText: "Service operation error: Service jumper is needed for this operation", description: "Eroare operare service: Service jumper este necesar pentru aceasta operatiune", solution: ["Contactați service-ul autorizat","Este necesară intervenția fizică"], urgent: true },
            { code: "-104002", displayText: "Service operation error: Service password is needed for this operation", description: "Eroare operare service: Parola Service este necesara pentru aceasta operatiune", solution: ["Introduceți parola de service","Contactați service-ul pentru parolă"] },
            { code: "-104003", displayText: "Service operation error: The operation is forbidden", description: "Eroare operare service: Operatiune interzisa", solution: ["Operația nu este permisă","Verificați drepturile"] },
            { code: "-104004", displayText: "Service operation error: Service intervention is needed", description: "Eroare operare service: Interventie Service", solution: ["Contactați service-ul autorizat","Este necesară intervenția tehnicianului"], urgent: true },
            { code: "-104005", displayText: "Service operation error: All clearing report is needed", description: "Eroare operare service: Rulati toate rapoartele de golire inaintea acestei operatiuni", solution: ["Efectuați toate rapoartele de golire","Reluați operația"] },
            { code: "-104006", displayText: "Service operation error: Z report closed", description: "Eroare operare service: Raport inchis", solution: ["Verificați starea raportului Z","Efectuați un nou raport dacă este necesar"] },
            { code: "-104007", displayText: "Service operation error: Montly report needed", description: "Eroare operare service: Introduceti luna de raportare", solution: ["Selectați luna pentru raport","Completați parametrul lunii"] },
            { code: "-104008", displayText: "Service operation error: Year report needed", description: "Eroare operare service:Introduceti anul de raportare", solution: ["Selectați anul pentru raport","Completați anul corect"] },
            { code: "-104009", displayText: "Service operation error: Backup needed", description: "Eroare operare service: Efectuati Backup", solution: ["Faceți backup înainte de operație","Salvați datele existente"] },
            { code: "-111006", displayText: "Registration mode error: Overflow in multiplication of quantity and price", description: "Eroare in mod Inregistrare: Depasire in produsul dintre cantitate si pret", solution: ["Reduceți cantitatea sau prețul","Verificați limitele maxime"] },
            { code: "-111013", displayText: "Registration mode error: ECR daily registers overflow", description: "Eroare in mod Inregistrare: Depasire registri zilnici AMEF", solution: ["Efectuați Raportul Z","Registrele zilnice sunt pline"] },
            { code: "-111014", displayText: "Registration mode error: Bill total register overflow", description: "Eroare in mod Inregistrare: Depasire registrii total", solution: ["Închideți bonul curent","Începeți un bon nou"] },
            { code: "-111015", displayText: "Registration mode error: Receipt is opened", description: "Eroare in mod Inregistrare: Bon deschis", solution: ["Finalizați bonul curent","Închideți bonul înainte de operație"] },
            { code: "-111016", displayText: "Registration mode error: Receipt is closed", description: "Eroare in mod Inregistrare: Bon inchis", solution: ["Deschideți un bon nou","Operația necesită un bon deschis"] },
            { code: "-111019", displayText: "Registration mode error: Maximum number of sales in receipt", description: "Eroare in mod Inregistrare: Numar maxim de vanzari in bon", solution: ["Închideți bonul curent","Continuați pe un bon nou"] },
            { code: "-111024", displayText: "Registration mode error: End of 24 hour blocking", description: "Eroare in mod Inregistrare: Au trecut 24 ore fara Raport Z!", solution: ["Efectuați Raportul Z imediat","Nu mai puteți opera până la efectuarea raportului"] },
            { code: "-111030", displayText: "Registration mode error: Multiplication of quantity and price is 0", description: "Eroare in mod Inregistrare: Produsul cantitate x pret este 0", solution: ["Verificați cantitatea și prețul","Asigurați-vă că valoarea nu este zero"] },
            { code: "-111031", displayText: "Registration mode error: Value is too big", description: "Eroare in mod Inregistrare: Valoare prea mare", solution: ["Reduceți valoarea","Verificați limita maximă"] },
            { code: "-111032", displayText: "Registration mode error: Value is bad", description: "Eroare in mod Inregistrare: Valoare gresita", solution: ["Corectați valoarea introdusă","Introduceți o valoare validă"] },
            { code: "-111033", displayText: "Registration mode error: Price is too big", description: "Eroare in mod Inregistrare: Pret prea mare", solution: ["Reduceți prețul","Verificați limita maximă de preț"] },
            { code: "-111034", displayText: "Registration mode error: Price is bad", description: "Eroare in mod Inregistrare: Pret gresit", solution: ["Introduceți un preț valid","Verificați formatul prețului"] },
            { code: "-111050", displayText: "Registration mode error: Payment is not initiated", description: "Eroare in mod Inregistrare: Plata nu a fost initiata", solution: ["Inițiați plata","Selectați metoda de plată"] },
            { code: "-111052", displayText: "Registration mode error: Receipt total limit is reached", description: "Eroare in mod Inregistrare: Limita total bon atinsa", solution: ["Închideți bonul curent","Continuați pe un bon nou"] },
            { code: "-111063", displayText: "Registration mode error: Entered sum is bigger than receipt sum", description: "Eroare in mod Inregistrare: Suma introdusa este mai mare decat suma bonului", solution: ["Introduceți o sumă mai mică sau egală","Verificați suma de plată"] },
            { code: "-111064", displayText: "Registration mode error: Entered sum is smaller than receipt sum", description: "Eroare in mod Inregistrare: Suma introdusa este mai mica decat suma bonului", solution: ["Introduceți suma corectă","Plata trebuie să acopere totalul"] },
            { code: "-111076", displayText: "Operator not logged in", description: "Eroare in mod Inregistrare: Operatorul nu s-a logat", solution: ["Autentificați-vă ca operator","Introduceți codul de operator"] },
            { code: "-111080", displayText: "Registration mode error: Out of stock", description: "Eroare in mod Inregistrare: Depasire stoc", solution: ["Verificați stocul disponibil","Reduceți cantitatea"] },
            { code: "-112000", displayText: "Fiscal printer error: Fiscal printer invalid command", description: "Eroare imprimanta fiscala: Comanda gresita imprimanta fiscala", solution: ["Verificați comanda trimisă","Consultați manualul de comandă"] },
            { code: "-112001", displayText: "Fiscal printer error: Fiscal printer command invalid syntax", description: "Eroare imprimanta fiscala: Sintaxa gresita in comanda imprimanta fiscala", solution: ["Corectați sintaxa comenzii","Verificați parametrii"] },
            { code: "-112002", displayText: "Fiscal printer error: Command is not permitted", description: "Eroare imprimanta fiscala: Comanda nu e permisa", solution: ["Verificați permisiunile","Comanda nu este disponibilă în acest mod"] },
            { code: "-112003", displayText: "Fiscal printer error: Register overflow", description: "Eroare imprimanta fiscala: Depasire registri", solution: ["Efectuați Raportul Z","Registrele imprimantei sunt pline"] },
            { code: "-112004", displayText: "Fiscal printer error: Wrong date/time", description: "Eroare imprimanta fiscala: Data/ora gresita", solution: ["Setați data și ora corectă","Verificați setările de dată"] },
            { code: "-112005", displayText: "Fiscal printer error: PC mode is needed", description: "Eroare imprimanta fiscala: Treceti in mod PC", solution: ["Comutați în modul PC","Configurați modul de operare"] },
            { code: "-112006", displayText: "Fiscal printer error: No paper", description: "Eroare imprimanta fiscala: Lipsa hartie", solution: ["Încărcați hârtie termică","Verificați senzorul de hârtie"] },
            { code: "-112007", displayText: "Fiscal printer error: Cover is open", description: "Eroare imprimanta fiscala: Capac deschis", solution: ["Închideți capacul imprimantei","Verificați dacă este fixat corect"] },
            { code: "-112008", displayText: "Fiscal printer error: Printing mechanism error", description: "Eroare imprimanta fiscala: Eroare mecanism imprimare", solution: ["Reporniți imprimanta","Contactați service-ul"], urgent: true }
        ]
    },
        "Parametri de sistem": {
        description: "Configurarea parametrilor de sistem pentru DATECS",
        steps: [
            "Accesați programul Config_Tool",
            "Conectați-vă la casa de marcat",
            "Accesați meniul 'Device configuration'",
            "Modificați parametrii după cum urmează:",
            "Logical number - numărul logic al AMEF",
            "Barcode mask - prefix pentru coduri de bare cântar",
            "Auto-power off (min) - interval pentru închidere automată",
            "Light auto-off (min) - interval pentru lumina de fundal",
            "Pentru parametrii binari: activați/dezactivați opțiunile dorite",
            "Open drawer on each total - deschidere sertar la fiecare bon",
            "Ask for password - cere parolă după fiecare bon",
            "Midnight warning for Z report - avertizare înainte de miezul nopții",
            "Apăsați 'Save configuration' pentru a salva modificările"
        ],
        parameters: [
            { nr: 1, nume: "Logical number", desc: "Numărul logic al AMEF în magazin" },
            { nr: 2, nume: "Barcode mask", desc: "Prefix pentru coduri de bare cântar" },
            { nr: 3, nume: "Auto-power off", desc: "Timp până la închiderea automată (minute)" },
            { nr: 4, nume: "Open drawer on total", desc: "0=Nu, 1=Da - deschide sertarul la finalizare bon" },
            { nr: 5, nume: "Ask for password", desc: "0=Nu, 1=Da - cere parolă la ieșirea din vânzări" },
            { nr: 6, nume: "Z report warning", desc: "0=Nu, 1=Da - avertizare înainte de miezul nopții" }
        ]
    }
};