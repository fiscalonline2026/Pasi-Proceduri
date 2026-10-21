// ==================== DATECS BLUECASH - TOATE PROCEDURILE ====================

const datecsBluecashProcedures = {
    "Fiscalizare": {
        description: "Procedura completă de fiscalizare pentru DATECS BlueCash-50",
        steps: [
            "Conectați casa la o rețea WiFi",
            "Accesați aplicația DUDE din meniul Aplicații",
            "Faceți sincronizarea DATEI și OREI - acest pas este OBLIGATORIU!",
            "Tipăriți un raport pentru a verifica data și ora echipamentului",
            "Accesați modul Service prin opțiunea Service Login",
            "În momentul logării, setați o parolă de minim 4 cifre",
            "Urmați pașii de la Initializare în Config_Tool BlueCash:",
            "   • Verificare Data și ora",
            "   • Setare Antet și Text Final (Header and Footer)",
            "   • Setare parametri AMEF (Device Configuration)",
            "   • Setare tipărire (Print Configuration) - puneți obligatoriu logo Fiscal Online",
            "   • Setare Cote TVA (VATs)",
            "   • Setări parametri Service (Service Setting) - data următoarei revizii",
            "Verificați Serial Number să fie același cu cel de pe echipament",
            "Completați Numarul Unic de Identificare (NUI) în rubrica 'Fiscal Memory Number'",
            "Completați Codul de Identificare Fiscala în rubrica 'Tax number' (cu prefixul 'CIF: ')",
            "Bifați 'VAT registered' dacă utilizatorul este plătitor TVA",
            "Apăsați butonul FISCALIZE și nu întrerupeți procesul",
            "Confirmați operațiunea dacă sunteți sigur de datele introduse",
            "După fiscalizare, imprimanta va emite un bon de probă și primul raport Z",
            "Intocmiți DECLARAȚIA DE INSTALARE a aparatului de marcat electronic fiscal"
        ],
        warnings: [
            "Sincronizarea datei și orei înainte de fiscalizare este OBLIGATORIE!",
            "Dacă nu se face, fiscalizarea se face cu data/ora greșită",
            "Fiscalizarea este ireversibilă - verificați de două ori datele introduse"
        ],
        tools: "Config_Tool BlueCash, aplicația DUDE, conexiune WiFi, cablu USB"
    },
    
    "Mod conectare la server ANAF": {
        description: "Configurare conexiune la serverele ANAF pentru BlueCash",
        steps: [
            "Asigurați-vă că aveți conexiune la internet (WiFi sau GPRS)",
            "Accesați aplicația DUDE",
            "Verificați starea conexiunii în setările aplicației",
            "Configurați manual serverul ANAF dacă este necesar",
            "Efectuați un test de conectivitate",
            "Verificați statusul transmiterii în rapoartele casei"
        ],
        warnings: [
            "Asigurați-vă că SIM-ul are date mobile activate (dacă folosiți GPRS)",
            "Verificați calitatea semnalului"
        ]
    },
    
    "Instructaj client": {
        description: "Instrucțiuni de utilizare pentru DATECS BlueCash-50",
        steps: [
            "Pornirea casei: apăsare scurtă pe butonul de pornire",
            "În mod așteptare, apăsare lungă (2 secunde) deschide meniul cu opțiunile:",
            "   • POWER OFF - oprire",
            "   • Restart - repornire",
            "   • Screenshot - captură ecran",
            "   • Emergency - mod de urgență",
            "Accesare aplicație de vânzare DUDE: din meniul Aplicații apăsați pe iconiță",
            "Operațiunile de vânzare sunt similare cu celelalte modele DATECS",
            "Vânzare: cantitate [X] → preț [PRET] → cod [PLU] → [SUBTOTAL] → [TOTAL]",
            "Raport X și Z se accesează din meniul principal",
            "Verificare transmitere ANAF: verificați iconița de conexiune"
        ],
        warnings: [
            "Modul Service este destinat exclusiv tehnicienilor autorizați",
            "Nu opriți casa în timpul transmiterii datelor"
        ]
    },
    
    "Revizie AMEF": {
        description: "Revizie tehnică anuală pentru BlueCash",
        steps: [
            "Accesați aplicația Config_Tool BlueCash",
            "Conectați casa de marcat la PC",
            "Intrați în modul Service",
            "Accesați secțiunea 'Service Setting'",
            "Setați noua dată pentru revizia tehnică (peste un an)",
            "Configurați textul de avertizare care va apărea la expirare",
            "Efectuați testele de diagnostic disponibile",
            "Verificați starea conexiunii la serverul ANAF",
            "Notați intervenția în cartea de intervenție"
        ],
        warnings: [
            "Asigurați-vă că ați efectuat toate testele necesare",
            "Puneți eticheta de service cu data următoarei revizii"
        ],
        tools: "Config_Tool BlueCash, cablu USB"
    },
    
    "Schimbare punct de lucru": {
        description: "Modificarea adresei punctului de lucru pentru BlueCash",
        steps: [
            "DOCUMENTE NECESARE: Certificat constatator actualizat, Declarația F4105",
            "Conectați casa de marcat la PC",
            "Deschideți Config_Tool BlueCash",
            "Accesați meniul 'Header and Footer'",
            "Modificați adresa cu noul punct de lucru",
            "Apăsați 'Set header' pentru a salva",
            "Generați o nouă declarație de instalare",
            "Verificați pe un bon de test că noua adresă apare corect"
        ],
        warnings: [
            "Modificarea se poate face doar în baza documentelor oficiale",
            "Nu uitați să înregistrați modificarea în cartea de intervenție"
        ]
    },
    
    "Schimbare cote TVA": {
        description: "Modificarea cotelor de TVA la BlueCash",
        steps: [
            "Verificați în Registrul ANAF statutul de plătitor TVA",
            "Conectați casa la PC",
            "Deschideți Config_Tool BlueCash",
            "Accesați meniul 'VATs'",
            "Modificați procentele TVA conform noilor cote",
            "Apăsați 'Save VATs' pentru a salva",
            "Efectuați un bon de test pentru verificare"
        ],
        warnings: [
            "Verificați legislația în vigoare înainte de modificare",
            "Trecerea de la Neplătitor la Plătitor TVA necesită înlocuirea MF"
        ]
    },
    
    "Introducere articole PLU": {
        description: "Programare articole la BlueCash",
        steps: [
            "Conectați casa la PC",
            "Deschideți Config_Tool BlueCash",
            "Accesați meniul 'Sale mode & Items'",
            "Introduceți articolele manual sau importați fișier CSV",
            "Verificați corectitudinea datelor",
            "Apăsați 'Send items' pentru a transfera articolele"
        ],
        warnings: [
            "Dacă s-au efectuat deja vânzări, este necesar raport Z înainte de modificări"
        ]
    },
    
    "Predare memorie fiscală": {
        description: "Procedură pentru predarea memoriei fiscale la BlueCash",
        steps: [
            "Verificați transmiterea tuturor rapoartelor Z",
            "Conectați casa la PC și accesați Config_Tool BlueCash",
            "Citiți raportul sumar al memoriei fiscale",
            "Citiți și salvați raportul detaliat al MF",
            "Citiți Jurnalul Electronic pentru aceeași perioadă",
            "Citiți fișierele XML pentru ultimele 3 luni",
            "Generați proces-verbal de predare",
            "Desfaceți casa și extrageți MF și JE",
            "Predați componentele clientului spre păstrare"
        ],
        warnings: [
            "Procedura necesită maximă atenție - datele fiscale trebuie salvate corect",
            "Clientul păstrează MF și JE minim 6 ani"
        ]
    },
    
    "Înlocuire jurnal electronic": {
        description: "Procedură pentru înlocuirea cardului JE la BlueCash",
        steps: [
            "Salvați datele de pe JE-ul vechi",
            "Desfaceți casa de marcat",
            "Localizați slotul cardului SD",
            "Scoateți cardul vechi",
            "Introduceți cardul nou (comandat special pentru model)",
            "Asamblați casa",
            "Porniți și urmați instrucțiunile de pe ecran",
            "Inițializați noul card JE",
            "Verificați funcționarea cu un bon de test",
            "Întocmiți proces-verbal de predare"
        ],
        warnings: [
            "JE-ul trebuie comandat special pentru BlueCash",
            "Păstrați JE-ul defect pentru eventuale controale"
        ]
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
        description: "Prelungire abonament pentru BlueCash",
        steps: [
            "Accesați platforma Danubius Exim",
            "Selectați casa de marcat BlueCash",
            "Alegeți 'Prelungire abonament'",
            "Selectați perioada dorită",
            "Efectuați plata",
            "Verificați noul termen în aplicația DUDE"
        ]
    },
    
    "Înlocuire placă de alimentare": {
        description: "Procedură în curs de documentare",
        steps: ["Procedură în curs de actualizare"]
    },
    
    "Înlocuire baterie RAM": {
        description: "Înlocuire baterie RAM la BlueCash",
        steps: [
            "Desfaceți carcasa casei de marcat",
            "Localizați bateria RAM pe placa de bază",
            "Dezlipiți bateria veche cu grijă",
            "Măsurați bateria nouă (trebuie să aibă 3-3.5V)",
            "Lipiți bateria nouă în poziția corectă",
            "Asamblați carcasa",
            "Porniți casa și setați data și ora",
            "Atașați bonul emis în cartea de intervenții"
        ],
        tools: "Baterie RAM nouă, lipit, multimetru"
    },
    
    "Înlocuire tastatură AMEF": {
        description: "Înlocuire tastatură la BlueCash",
        steps: [
            "Desfaceți carcasa",
            "Deconectați cablul tastaturii de pe placa de bază",
            "Scoateți tastatura veche",
            "Montați tastatura nouă",
            "Reconectați cablul",
            "Testați fiecare tastă"
        ]
    },
    
    "Înlocuire display client-operator": {
        description: "Înlocuire afișaj la BlueCash",
        steps: [
            "Desfaceți carcasa cu atenție",
            "Deconectați cablul display-ului vechi",
            "Scoateți display-ul vechi",
            "Conectați display-ul nou",
            "Asamblați și testați"
        ]
    },
    
    "Înlocuire acumulator": {
        description: "Înlocuire acumulator intern la BlueCash",
        steps: [
            "Desfaceți carcasa",
            "Localizați acumulatorul pe placa de bază",
            "Scoateți acumulatorul vechi",
            "Verificați acumulatorul nou",
            "Montați acumulatorul nou în port",
            "Asamblați carcasa"
        ]
    },
    
    "Înlocuire imprimantă termică": {
        description: "Înlocuire imprimantă termică la BlueCash",
        steps: [
            "Desfaceți carcasa",
            "Deconectați cablul imprimantei",
            "Scoateți șuruburile de fixare",
            "Îndepărtați imprimanta veche",
            "Montați imprimanta nouă",
            "Reconectați cablul",
            "Testați cu un bon"
        ]
    },
    
    "Listă erori AMEF": {
        description: "Listă coduri erori pentru DATECS BlueCash (similar DATECS)",
        errors: [
            { code: "-100001", description: "Eroare generală in - out", solution: "Verifică conexiunile, restartează" },
            { code: "-100114", description: "Memoria fiscală este plină", solution: "Contactați service-ul", urgent: true },
            { code: "-100403", description: "Lipsă hârtie în imprimantă", solution: "Încărcați hârtie termică nouă" },
            { code: "-105010", description: "Jurnalul electronic este plin", solution: "Contactați service-ul", urgent: true },
            { code: "-107007", description: "Certificatul digital lipsește", solution: "Instalați certificatul", urgent: true },
            { code: "-110104", description: "Aparatul nu este fiscalizat", solution: "Efectuați fiscalizarea", urgent: true },
            { code: "-111024", description: "Au trecut 24 ore fără raport Z", solution: "Efectuați raportul Z imediat" }
        ]
    },
    
    "Parametri de sistem": {
        description: "Configurarea parametrilor de sistem pentru BlueCash",
        steps: [
            "Accesați aplicația DUDE",
            "Intrați în setările avansate",
            "Modificați parametrii după necesități",
            "Salvați configurația",
            "Verificați funcționarea"
        ],
        parameters: [
            { nr: 1, nume: "IP Server ANAF", desc: "82.78.86.211" },
            { nr: 2, nume: "Port", desc: "5000" },
            { nr: 3, nume: "APN", desc: "Setări specifici operatorului SIM" }
        ]
    }
};