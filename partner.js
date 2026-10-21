// ==================== PARTNER - TOATE PROCEDURILE ====================

const partnerProcedures = {
    "Fiscalizare": {
        description: "Manualul PARTNER 200 încărcat descrie utilizarea și programarea, dar nu publică pașii tehnici de fiscalizare.",
        steps: [
            "Verificați integritatea aparatului, alimentarea, hârtia și corectitudinea datei/orei.",
            "Programați antetul, cotele TVA, operatorii, articolele și parametrii necesari conform manualului.",
            "Nu accesați proceduri de service sau fiscalizare fără acreditare și fără documentele fiscale necesare.",
            "Fiscalizarea se execută de unitatea de service autorizată, care înscrie operația în documentele aparatului.",
            "După fiscalizare, verificați antetul și cotele TVA printr-un bon de test și un raport fiscal."
        ],
        warnings: [
            "Manualul din 2015 nu conține procedura tehnică de fiscalizare și nu descrie conectarea ANAF a generațiilor noi.",
            "Nu utilizați secvențe de taste sau parole preluate de la alte modele."
        ]
    },
    
    "Mod conectare la server ANAF": {
        description: "Modelul și manualul PARTNER 200 furnizat nu conțin o procedură de conectare directă la serverul ANAF.",
        steps: [
            "Verificați exact modelul și versiunea fiscală înscrise pe eticheta aparatului.",
            "Nu aplicați setări de rețea sau certificat provenite de la alte modele PARTNER.",
            "Pentru un model modern cu modul de comunicație ANAF, solicitați manualul tehnic corespunzător seriei și firmware-ului.",
            "Configurarea comunicației și a certificatului se efectuează de service-ul autorizat."
        ],
        warnings: [
            "PARTNER 200 din manualul furnizat are conexiuni PC USB/RS232, nu o procedură documentată de raportare ANAF."
        ]
    },
    
    "Instructaj client": {
        description: "Instrucțiuni de utilizare pentru modelele PARTNER 200, 300, 600",
        steps: [
            "Pornirea și oprirea casei de marcat: tasta [C]",
            "Introducere sold inițial: sumă → [SHIFT] → [R/A]",
            "Scoatere bani din casă: sumă → [SHIFT] → [P/O]",
            "Vânzare pe coduri:",
            "   • Cantitate → [X]",
            "   • Preț unitar → [PRET]",
            "   • Cod produs → [PLU]",
            "   • [SUBTOTAL] → [TOTAL]",
            "Corecție: tasta [C] șterge suma sau eroarea de pe afișaj",
            "Anulare bon: după subtotal → [SHIFT] → [ANUL BON]",
            "Atenție: după apăsarea tastei [TOTAL] nu se mai poate șterge suma înregistrată!",
            "Raport X: [MENIU] → [TOTAL] → [TOTAL], ieșire cu [C]",
            "Raport Z: [MENIU] → [↓] → [TOTAL] → [TOTAL], ieșire cu [C]",
            "Cod fiscal client pe bon (RO CLIENT PE BON):",
            "   • În cadrul bonului, apasă [SHIFT] → [C.I.F/X]",
            "   • Introduce numele beneficiarului pe două rânduri",
            "   • Pe rândul 3 se introduce C.I.F. Beneficiar",
            "   • Se pot introduce atât cifre cât și caractere (RO în față)",
            "   • Rândurile 4,5,6 sunt opționale",
            "   • După fiecare linie se apasă [TOTAL]",
            "Raport pe perioadă (din memoria fiscală):",
            "   • Intră în MOD Z ([MENIU] → [↓] → [TOTAL])",
            "   • Selectează 'DIN MEMORIA FISCALA' ([↑] → [TOTAL])",
            "   • Selectează 'TIPARIRE' ([↓] → [TOTAL])",
            "   • Alege 'PERIODIC', 'SUMAR', 'DE LA DATA LA DATA' ([TOTAL])",
            "   • Introdu data început (ZZLLAA) → [TOTAL]",
            "   • Introdu data sfârșit (ZZLLAA) → [TOTAL]",
            "Export fișiere XML pe USB:",
            "   • Oprește casa de marcat",
            "   • Introdu stick-ul USB în mufa micro USB",
            "   • Pornește casa și intră în MOD S: [MENIU] → [↓] → [TOTAL]",
            "   • Parola: 20100102 → [TOTAL]",
            "   • Selectează 'EXPORT FISIERE XML' ([↑] → [TOTAL])",
            "   • Alege 'DE LA DATA LA DATA' → [TOTAL]",
            "   • Introdu data început (ex: 010219) → [TOTAL]",
            "   • Introdu data sfârșit (ex: 280219) → [TOTAL]",
            "   • Așteaptă finalizarea, oprește casa cu [C] și scoate stick-ul",
            "Setare oră (atenție: după raport Z, așteptați cel puțin o oră):",
            "   • Intră în MOD S: [MENIU] → [↓] → [TOTAL]",
            "   • Parola: 20100102 → [TOTAL]",
            "   • Selectează 'PROG DATA ORA' ([↓] → [TOTAL])",
            "   • Apasă [TOTAL] pentru a confirma data",
            "   • Introduce ora, minutele, secundele (OOMMSS) → [TOTAL]",
            "   • Ieșire cu [C]"
        ],
        warnings: [
            "După apăsarea tastei [TOTAL] nu se mai poate șterge suma înregistrată",
            "Pentru schimbarea orei de la vară la iarnă, așteptați cel puțin o oră de la ultimul raport Z"
        ]
    },
    
    "Revizie AMEF": {
        description: "Procedura de revizie tehnică pentru PARTNER - acces meniu service",
        steps: [
            "Accesul în meniul de service se face din interfața de vânzare",
            "Tastează parola 05925935859 urmată de apăsarea tastei [MENIU]",
            "Teste disponibile (se pornește cu [TOTAL], se iese cu [Avans Hartie]):",
            "1. Test Tastatură - verifică fiecare tastă succesiv",
            "2. Test Afișaj - apasă o dată [Avans Hartie] pentru test client, a doua oară pentru ieșire",
            "3. Ethernet Test",
            "4. Wirelan Test - după test se iese automat",
            "5. SD Test",
            "6. USB Storage Test - se face cu un dispozitiv conectat pe microUSB",
            "7. Test Imprimantă",
            "8. Test Ceas",
            "9. Test MF",
            "10. Versiune S/W - afișează versiunea de firmware",
            "11. Auto Test - test complet de afișaje și imprimantă",
            "12. Test Imprimantă la fiecare 4 minute",
            "13. Test Imprimantă continuu - tipărește încontinuu",
            "14. Test Sertar",
            "15. Test Imprimantă 1 - se iese cu [C] de trei ori",
            "16. Test Imprimantă 2 - se iese cu [C] de trei ori",
            "17. Test Imprimantă 3 - se iese cu [C] de trei ori",
            "18. Test Imprimantă 4 - se iese cu [C] de trei ori",
            "Programare linii de antet:",
            "   • Alege linia de modificat → [TOTAL]",
            "   • Introduce noul text → [TOTAL]",
            "   • La final se cere confirmarea 'Salveaza'",
            "   • Apasă [TOTAL] pentru a tipări varianta veche și cea nouă",
            "   • Selectează DA pentru a confirma și salva",
            "Programare revizie:",
            "   • Se programează data următoarei revizii",
            "   • Cu 15 zile înainte se tipărește mesajul 'Efectuati Revizia Periodica'",
            "   • Pe afișaj apare 'Termen Revizie la Data :'"
        ],
        warnings: [
            "Efectuează toate testele de diagnostic înainte de finalizare",
            "Curăță capul de imprimare dacă este necesar"
        ],
        tools: "Șurubelnițe, soluție curățare cap imprimare"
    },
    
    "Schimbare punct de lucru": {
        description: "Modificarea adresei punctului de lucru pentru PARTNER",
        steps: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat (cu noul punct de lucru, maxim 30 zile), Declarația F4105",
            "Procedură:",
            "   • Conectați casa de marcat la PC",
            "   • Deschideți programul PcConfig.exe",
            "   • Accesați secțiunea de antet (Header)",
            "   • Modificați adresa cu noul punct de lucru",
            "   • Salvați modificările",
            "   • Generați noua declarație de instalare",
            "   • Verificați pe un bon de test"
        ],
        warnings: [
            "Modificarea se poate face doar în baza documentelor oficiale",
            "Nu uitați să generați declarația de instalare"
        ],
        tools: "Cablu USB/RS232, program PcConfig.exe"
    },
    
    "Schimbare cote TVA": {
        description: "Modificarea cotelor TVA pentru PARTNER",
        steps: [
            "Verificați în Registrul ANAF dacă firma este plătitoare de TVA",
            "Procedură:",
            "   • Conectați casa de marcat la PC",
            "   • Deschideți programul PcConfig.exe",
            "   • Accesați secțiunea 'TAX RATE'",
            "   • Programați noile cote TVA",
            "   • Apăsați UPLOAD pentru a trimite în casă",
            "   • Verificați cu un bon de test"
        ],
        warnings: [
            "Verificați legislația în vigoare înainte de modificare"
        ]
    },
    
    "Introducere articole PLU": {
        description: "Procedură pentru introducerea articolelor în casa de marcat PARTNER",
        steps: [
            "Pregătiți lista de articole în format Excel conform șablonului",
            "Completați denumirea produselor",
            "Procedură:",
            "   • Conectați casa de marcat la PC",
            "   • Deschideți programul PcConfig.exe",
            "   • Copiați datele din Excel în program",
            "   • Apăsați UPLOAD pentru a programa articolele în casă",
            "   • Verificați cu un bon de test"
        ],
        warnings: [
            "Respectați formatul Excel specificat de producător",
            "Dacă s-au efectuat deja vânzări, este necesar un raport Z înainte de modificări masive"
        ],
        tools: "Cablu USB/RS232, program PcConfig.exe, fișier Excel cu articole"
    },
    
    "Predare memorie fiscală": {
        description: "Procedură pentru predarea memoriei fiscale la PARTNER",
        steps: [
            "Exportul memoriei fiscale pe stick-ul USB:",
            "   • Conectează stick-ul USB",
            "   • Intră în MOD Z ([MENIU] → [↓] → [TOTAL])",
            "   • Selectează 'DIN MEMORIA FISCALA'",
            "   • Alege 'SALVARE IN MEM. USB' → 'PERIODIC' → 'DETALIAT' → 'DE LA DATA LA DATA'",
            "   • Introduce data început (ZZLLAA) → [TOTAL]",
            "   • Introduce data sfârșit (ZZLLAA) → [TOTAL]",
            "   • Așteaptă afișarea meniului anterior",
            "Exportul jurnalului electronic pe stick-ul USB:",
            "   • Intră în MOD X ([MENIU] → [TOTAL])",
            "   • Selectează 'RAPORT DIN J'",
            "   • Alege 'SALVARE IN MEM. USB' → 'DETALIAT' → 'TOTUL' → 'DE LA DATA LA DATA'",
            "   • Introduce data început (ZZLLAA-OOMM) → [TOTAL]",
            "   • Introduce data sfârșit (ZZLLAA-OOMM) → [TOTAL]",
            "   • Așteaptă afișarea meniului anterior",
            "   • Poți deconecta dispozitivul de date",
            "Raport pe suport hârtie:",
            "   • În MOD Z, la 'DIN MEMORIA FISCALA'",
            "   • Selectează 'TIPARIRE' → 'PERIODIC' → 'SUMAR' → 'DE LA DATA LA DATA'",
            "   • Introduce data început și data sfârșit",
            "Schimbarea memoriei fiscale:",
            "   • Odată cu schimbarea MF se înlocuiește obligatoriu și JE-ul",
            "   • Înainte de schimbare, asigură-te că a fost tipărit raportul Z",
            "   • Operația se face cu echipamentul oprit",
            "   • Desfaceți capacul superior",
            "   • Decuplați panglica memoriei din conector",
            "   • Extrageți memoria veche, introduceți-o pe cea nouă",
            "   • După înlocuire, se efectuează procedura de reset",
            "   • Se reprogramează numărul unic și seria fiscală",
            "   • Se sigilează echipamentul"
        ],
        warnings: [
            "La înlocuirea MF se înlocuiește obligatoriu și JE-ul",
            "Programarea unei serii greșite duce la anularea certificatului digital",
            "Clientul păstrează componentele vechi minim 6 ani"
        ],
        tools: "Stick USB, șurubelnițe, MF nouă, JE nou"
    },
    
    "Înlocuire jurnal electronic": {
        description: "Procedură pentru înlocuirea dispozitivului de memorare JE la PARTNER",
        steps: [
            "Operația se face cu echipamentul oprit de la comutatorul PORNIT/OPRIT",
            "Extragerea microSD cardului:",
            "   • Apasă cardul în plan orizontal paralel cu placa de bază",
            "   • În sensul săgeții de culoare verde până se aude un 'click'",
            "   • Soclul va elibera SD cardul",
            "Introducerea noului SD card:",
            "   • Contactele aurii ale microSD card trebuie să fie orientate în jos",
            "   • Introduce în sensul săgeții verzi",
            "   • Apasă până se aude un 'click'",
            "Înregistrarea noului card JE:",
            "   • După înlocuire, echipamentul va afișa 'JE NEINREGISTRAT' sau 'EROARE 75'",
            "   • Intră în meniul service: parola 05925935859 → [MENIU]",
            "   • Alege opțiunea 'INREGISTREAZA JE'",
            "   • Se va afișa contorul de EJ",
            "   • Apasă [1] pentru a accepta înregistrarea",
            "   • Apasă [TOTAL] pentru confirmare finală",
            "   • Se va tipări un bon de confirmare",
            "Citirea din JE:",
            "   • Apasă [MENIU] → alege [MOD X] → [RAPORT DIN JE]",
            "   • Opțiuni: 1.SALVARE IN MEM. USB, 2.TIPARIRE, 3.SALVARE SI TIPARIRE",
            "   • Fiecare opțiune are variantele SUMAR sau DETALIAT",
            "   • Se poate selecta intervalul după dată sau după număr"
        ],
        warnings: [
            "Această situație apare la echipament nefiscalizat sau la schimbarea cardului",
            "Păstrează JE-ul defect pentru eventuale controale"
        ],
        tools: "Șurubelnițe, card JE nou specific PARTNER"
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
        description: "Procedură pentru prelungirea abonamentului de date",
        steps: [
            "Accesează platforma distribuitorului PARTNER",
            "Autentifică-te în contul de service",
            "Selectează casa de marcat din listă",
            "Alege opțiunea 'Prelungire abonament'",
            "Selectează perioada dorită (6 luni sau 12 luni)",
            "Efectuează plata conform instrucțiunilor",
            "Confirmă tranzacția",
            "Verifică noul termen de valabilitate în casa de marcat",
            "Testează conexiunea la serverul ANAF"
        ],
        warnings: [
            "Asigură-te că abonamentul este activ înainte de expirare"
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
        description: "Procedură pentru înlocuirea bateriei RAM",
        steps: [
            "Debranșează casa de la alimentare",
            "Deschide carcasa",
            "Localizează bateria RAM pe placa de bază",
            "Scoate bateria veche cu grijă",
            "Montează bateria nouă (CR2032 sau specifică modelului)",
            "Verifică polaritatea (+ în sus de obicei)",
            "Închide carcasa",
            "Pornește casa",
            "Resetează data și ora",
            "Verifică funcționarea corectă"
        ],
        warnings: [
            "Atenție la polaritatea bateriei",
            "Asigură-te că folosești bateria corectă pentru model"
        ],
        tools: "Baterie nouă CR2032 sau specifică, șurubelnițe"
    },
    
    "Înlocuire tastatură AMEF": {
        description: "Procedură pentru înlocuirea tastaturii",
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
        tools: "Tastatură nouă specifică modelului, șurubelnițe"
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire display la PARTNER",
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
        description: "Listă de coduri de erori pentru casele PARTNER",
        errors: [
            { code: "EROARE 75", description: "JE neînregistrat", solution: "Intră în meniul service și înregistrează noul card JE" }
        ]
    },
    
    "Parametri de sistem": {
        description: "Configurarea parametrilor de sistem pentru PARTNER",
        steps: [
            "Accesați programul PcConfig.exe",
            "Conectați casa de marcat la PC",
            "Explorați meniurile de configurare disponibile",
            "Modificați parametrii conform necesităților"
        ],
        parameters: [
            { nr: 1, nume: "Data și ora", desc: "Setare dată și oră corectă" },
            { nr: 2, nume: "Antet", desc: "Datele firmei și punctul de lucru" },
            { nr: 3, nume: "Cote TVA", desc: "Procentele de TVA configurate" }
        ]
    }
};