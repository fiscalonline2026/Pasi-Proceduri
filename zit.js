// ==================== TREMOL - TOATE PROCEDURILE ====================

const zitProcedures = {
    "Fiscalizare": {
        description: "Fiscalizare ZIT - procedura completă",
        steps: [
            "Instalați driver-ul VCP pentru ZIT",
            "Conectați casa la PC prin cablu micro USB",
            "Puneți AMEF în mod PC (parola 2020)",
            "Deschideți ECR UPDATER SERVICE",
            "Completați NUI, CIF (cu RO dacă are TVA) și seria aparatului",
            "Apăsați Fiscalizare",
            "Verificați starea conexiunii ANAF: 1* → 714"
        ],
        warnings: ["Fiscalizarea este ireversibilă!", "Verificați data și ora înainte"],
        tools: "Cablu micro USB, ECR UPDATER SERVICE"
    },
    
 "Instructaj client": {
        description: "Instrucțiuni ZIT B20",
        steps: [
            "Pornire: țineți apăsat butonul",
            "Mod vânzare: MODE → Vanzare → parola 2020 → TOTAL",
            "Vânzare: cantitate --> X --> suma --> * --> cod articol -->  PLU --> STL --> TOTAL",
            "Raport X: MODE → Raport X → parola 2020 → TOTAL → 1 *",
            "Raport Z: MODE → Raport Z → parola 2020 → TOTAL → 1 *",
            "Cod fiscal: după produse, 1 → ține * + STL → cod fiscal → STL → TOTAL"
        ],
        warnings: ["Nu opriți casa în timpul raportului Z!"]
    },
    
    "Schimbare punct de lucru": {
        description: "Procedură pentru modificarea adresei punctului de lucru",
        steps: [
            "Deschide programul CMU MANAGER",
            "Conectează casa de marcat la PC in mod PC cu parola 2020",
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
            "Din casa de marcat: Service --> 3 *",
            "Scrie noile cote TVA",
            "Ieși cu tasta de pornire",
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
            "Pune casa de marcat în modul PC",
            "Accesează din AMEF: Service ",
            "Deschide programul CMU MANAGER",
            "Redactează codurile PLU trimise de client",
            "Dacă articolele sunt trimise în format .xls, salvează fișierul în format .txt",
            "Importă fișierul în aplicație sau adaugă manual articolele",
            "Verifică corectitudinea datelor (cod, denumire, preț, TVA)",
            "Programează articolele în casa de marcat (apasă LA ECR)",
            "SAU direct din casa de marcat:",
            "SERVICE → parola → 8 *",
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
            "Intrați în meniul RAPOARTE MF",
            "Pentru a emite un raport sumar: 31 --> STL --> data inceput --> X --> data sfarsit --> VD",
            "Conectati in PC si salvati datele cu ajutorul programului CMU Manager",
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
            "Procedura in curs de documentare"
        ],
        warnings: [
            "JE-ul trebuie comandat special pentru modelul de casă",
            "Asigură-te că toate rapoartele sunt în zero înainte de schimbare",
            "Păstrează JE-ul defect pentru eventuale controale"
        ],
        tools: "Șurubelnițe, jumper, JE nou specific modelului"
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
        description: "Prelungire abonament pentru cartela SIM",
        steps: [
            "Accesați platforma Valmed",
            "Autentificați-vă în contul de service",
            "Selectați casa de marcat",
            "Alegeți opțiunea 'Prelungire abonament'",
            "Selectați perioada dorită",
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
        description: "Înlocuire display la ZIT",
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
        description: "Procedură în curs de documentare",
        steps: [
            "Se desface casa de marcat",
            "Se scot suruburile care tin imprimanta termica",
            "Se inlocuieste cu imprimanta si rola noua"
        ]
    },
    
    "Listă erori AMEF": {
        description: "Listă completă de coduri de erori pentru casele ZIT",
        errors: [
            { code: "2", displayText: "PREA MULTE SIMBOLURI", description: "S-a depășit limita maximă de simboluri posibile pentru câmpul dat", solution: ["Modificați denumirea introdusă","Încadrați-vă în limita maximă de caractere permisă"] },
            { code: "3", displayText: "OPERATIE GRESITA", description: "Operație sau tastă greșită", solution: ["Apăsați tasta C și încercați din nou"] },
            { code: "9", displayText: "ERR SCRIERE MF", description: "Eroare în Memoria Fiscală", solution: ["Contactați SERVICE autorizat","Nu continuați operarea casei de marcat"], urgent: true },
            { code: "16", displayText: "DEP. REGISTRI", description: "Depășire sume/valori maxime posibile pentru ziua curentă", solution: ["Dacă nu știți care este motivul, contactați SERVICE înainte de a efectua Raport Z","Efectuați Raportul Z pentru resetarea registrelor"] },
            { code: "19", displayText: "OPERATIE GRESITA", description: "Operație eronată", solution: ["Apăsați tasta C și încercați din nou"] },
            { code: "21", displayText: "BARCODE GRESIT", description: "Cod de Bare introdus greșit", solution: ["Apăsați tasta C și încercați din nou","Verificați corectitudinea codului de bare"] },
            { code: "26", displayText: "DEP REG RAP Z", description: "Depășire sume/valori maxime posibile pentru ziua curentă", solution: ["Dacă nu știți care este motivul, contactați SERVICE înainte de a efectua Raport Z","Efectuați Raportul Z pentru resetarea registrelor"] },
            { code: "28", displayText: "SCHIMB INTERZIS", description: "Nu se poate modifica valoarea (programare antet)", solution: ["Efectuați Rapoartele necesare","Contactați SERVICE dacă problema persistă"] },
            { code: "35", displayText: "STOC INSUFICIENT", description: "Stoc insuficient, ajuns pe 0", solution: ["Modificați valoarea stocului","Alimentați stocul pentru produsul respectiv"] },
            { code: "37", displayText: "0 BARCODE", description: "Nu ați introdus Cod de Bare", solution: ["Introduceți Codul de Bare","Verificați că ați scanat corect produsul"] },
            { code: "40", displayText: "EROARE", description: "Parola introdusă este greșită", solution: ["Introduceți codul corect","Verificați parola în manualul de utilizare"] },
            { code: "42", displayText: "DEP RAP 24H", description: "Au trecut 24 ore de la primul BON emis", solution: ["Efectuați Raportul Z imediat","Nu mai puteți opera până la efectuarea raportului"] },
            { code: "44", displayText: "CERTIFICAT", description: "Nu este încărcat certificatul digital", solution: ["Contactați unitatea de SERVICE pentru încărcarea certificatului digital al AMEF","Certificatul digital trebuie instalat de personal autorizat"], urgent: true },
            { code: "48", displayText: "DEP NR LINII BON", description: "Depășire Poziții maxime pe un bon", solution: ["Închideți Bonul","Continuați vânzarea pe următorul bon"] },
            { code: "49", displayText: "PREA MULTE ZECIMALE", description: "Depășire număr maxim de zecimale", solution: ["Limitați-vă la numărul de zecimale definit pentru UM respectivă","Verificați setările unității de măsură"] },
            { code: "50", displayText: "EROARE BON DESCHIS", description: "Bon deschis, nu puteți ieși din Regim Vânzare", solution: ["Închideți bonul pentru a continua","Finalizați sau anulați bonul curent"] },
            { code: "51", displayText: "EROARE CANTAR", description: "Eroare comunicare cântar", solution: ["Verificați comunicarea cu cântarul","Contactați SERVICE dacă problema persistă"] },
            { code: "53", displayText: "BC INTERZIS", description: "Cod de bare interzis", solution: ["Verificați parametri Articole","Codul de bare nu este permis pentru acest tip de operație"] },
            { code: "58", displayText: "DEP REG RAP OP", description: "Depășire sume/valori maxime posibile pentru ziua curentă", solution: ["Dacă nu știți care este motivul, contactați SERVICE înainte de a efectua Raport Z","Efectuați Raportul Operatorilor cu resetare"] },
            { code: "59", displayText: "LISTATI RAP Z", description: "Trebuie să listați Raport Z", solution: ["Efectuați Raportul Z","Accesați modul rapoarte și generați Raportul Zilnic"] },
            { code: "64", displayText: "DEP NR PLATI", description: "Depășire număr plăți posibile", solution: ["Verificați plățile folosite","Închideți bonul și începeți unul nou"] },
            { code: "66", displayText: "OPERATIE NEPERMISA / PAROLA GRESITA", description: "Nu este permisă operația în regimul selectat sau parolă greșită", solution: ["Apăsați CL apoi ON/OFF, după care faceți selecția în ordinea corectă","Reintroduceți parola corectă"] },
            { code: "69", displayText: "BC NU EXISTA", description: "Cod de bare inexistent", solution: ["Verificați parametri Articole","Programați codul de bare în baza de date"] },
            { code: "74", displayText: "DEP REG RAP ART", description: "Depășire sume/valori maxime posibile pentru ziua curentă", solution: ["Dacă nu știți care este motivul, contactați SERVICE înainte de a efectua Raport Z","Efectuați Raportul de Articole cu resetare"] },
            { code: "75", displayText: "LISTATI RAP OP", description: "Trebuie să listați Raport Operatori", solution: ["Listați Raportul de Operatori","Accesați modul rapoarte și generați Raportul Operatorilor"] },
            { code: "77", displayText: "PAROLA GRESITA", description: "Parolă eronată", solution: ["Reintroduceți parola corectă","Verificați parola în manual"] },
            { code: "80", displayText: "TRANZACTIE ZERO", description: "Tranzacție cu valoare 0", solution: ["Verificați pozițiile vândute","Asigurați-vă că ați introdus produse cu valoare > 0"] },
            { code: "82", displayText: "VALOARE GRESITA", description: "Valoare greșită", solution: ["Reintroduceți o valoare corectă","Verificați formatul valorii introduse"] },
            { code: "83", displayText: "NUME NECOMPLETAT", description: "Nu ați completat numele", solution: ["Completați numele și reîncercați","Reprogramare denumire articol"] },
            { code: "85", displayText: "BC EXISTENT", description: "Cod de Bare deja există", solution: ["Verificați codul de bare în baza de date a casei","Utilizați un cod de bare unic"] },
            { code: "87", displayText: "EROARE CARD SD", description: "Eroare SD card", solution: ["Înlocuiți cardul SD","Contactați SERVICE pentru înlocuire"], urgent: true },
            { code: "91", displayText: "LISTATI RAP ART", description: "Trebuie să listați Raport Articole", solution: ["Listați Raportul de Articole","Accesați modul rapoarte și generați Raportul Articole"] },
            { code: "96", displayText: "PLATA", description: "Efectuați PLATA", solution: ["Efectuați plata pentru bonul curent","Finalizați tranzacția"] },
            { code: "98", displayText: "OPERATIUNE NEPERMIS", description: "Nu este permisă operația în regimul selectat", solution: ["Apăsați C, STL, va afișa conținutul bonului","Verificați starea bonului curent"] },
            { code: "112", displayText: "OPERATIE INTERZISA", description: "Trebuie făcut Raport Z", solution: ["Listați Raport Z pe toate categoriile 1*2*8*","Apoi reluați operația"] }
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

