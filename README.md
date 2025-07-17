# Anwesenheitsliste

🌐 Anwesenheit: Die Moderne Anwesenheitsliste 

Ein benutzerfreundliches Anwesenheitstool, das die interne Excel-Tabelle endgültig ersetzt.

Überblick

Anwesenheit ist eine moderne Webanwendung, die entwickelt wurde, um die Transparenz und Effizienz der Anwesenheits- und Abwesenheitsplanung in Teams zu revolutionieren. Schluss mit dem Wildwuchs, der schlechten Performance und den Einschränkungen von geteilten Excel-Listen. Dieses Tool bietet eine zentrale, intuitive und jederzeit verfügbare Lösung für alle Teammitglieder.

Das Problem: Der tägliche Kampf mit Excel

Kommt Ihnen das bekannt vor?

🚫 Keine gleichzeitige Bearbeitung: Immer nur eine Person kann die Liste bearbeiten, was zu Wartezeiten und veralteten Informationen führt.
🐢 Schlechte Performance: Die Datei wird mit jedem Eintrag größer und langsamer.
📄 Fehlende Übersicht: Keine automatische Filterung oder eine klare, visuelle Darstellung von Abwesenheiten.
✨ Key Features (Aktueller Stand)
📅 Interaktiver Jahreskalender: Vollständige Jahresansicht inklusive deutscher Feiertage, Ferien und Kalenderwochen für eine lückenlose Planung.
💅 Status-Management: Mitarbeiter können ihren Status (Büro, Homeoffice, Urlaub, Krank, Schulung) einfach selbst setzen. Änderungen sind sofort für das ganze Team sichtbar.
📞 Bereitschaftsplanung: Ein eigener Kalender zur einfachen Organisation und Anzeige von Bereitschaftsdiensten im Team.
🎨 Modernes & Barrierefreies Design: Eine intuitive, aufgeräumte Oberfläche mit Dark Mode für angenehmes Arbeiten zu jeder Tageszeit. (Ziel ist sogar die Barrierefreiheit)
🚀 Zukunftsvision & Roadmap

Die Entwicklung steht nicht still! Folgende Features sind geplant:

💳 Erweiterte Sicherheit: Integration von Single Sign-On (SSO) und die Möglichkeit zur Anmeldung via Smartcard (Zertifikat).
🤖 Automatisierte Workflows: Automatische Benachrichtigungen an Teamleiter bei Krankmeldungen und Erinnerungen zur Aktualisierung des eigenen Status.
🔌 API & Integrationen: Eine REST-API-Schnittstelle zur Anbindung an andere Systeme und ein Kalender-Export (iCal), um Abwesenheiten im eigenen Kalender zu abonnieren.
📊 Erweiterte Analysen: Visuelle Auswertungen wie Auslastungsdiagramme und Stoßzeiten-Analysen.
📜 Änderungsprotokoll: Eine transparente Historie, um alle Änderungen nachverfolgen zu können.
🏷️ Intelligente Suche: Erweiterte Filter- und Sortiermöglichkeiten durch den Einsatz von Tags.
⚙️ Technische Details

Das Projekt wird auf einem modernen Technologie-Stack aufgebaut, um eine hohe Performance, Skalierbarkeit und eine exzellente User Experience zu gewährleisten:

Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
Backend: Python, FastAPI
Datenbank: PostgreSQL
CI/CD: OpenShift/Kubernetes

---

Individueller Kalender (einzelner MA)
(eigener Name voreingestellt - Auswahl anderer Namen möglich!)
Darstellung in Monatsblöcken.
Einträge per Drop-down ändern - nur gestern, heute, Zukunft
Anzeige aktueller Eintrag per Mouseover (Buchung/Feiertag/Ferien)

Feiertage rote Schrift
Ferientage blaue Schrift
Normaltage schwarze Schrift
Bereitschaft fett orange Schrift (7 Tage)

Bürotage nicht unterlegt
R/H26/HD/E/I/W gelbe Schrift violett unterlegt
Homeoffice hellgrün unterlegt
Urlaub/Gleittag/Betriebsausflug hellblau unterlegt
BS/S/DR hellgelb unterlegt
K hellrot unterlegt
abw hellgrau unterlegt

Tag TÜRKIS unterlegt, wenn gleichzeitig U/GT und Bereitschaft



April 2025
|Mo|Di|Mi|Do|Fr|Sa|So|
|--|--|--|--|--|--|--|
|31|1 |2 |3 |4 |5 |6 |
|7 |8 |9 |10|11|12|13|
|14|15|16|17|18|19|20|
|21|22|23|24|25|26|27|
|28|29|30|1 |2 |3 |4 |



Übersicht (1154 - alle)
Aktuelle und die nächsten zwei Wochen
Sortiert nach Teams
TL an erster Stelle
MA nach Nachname sortiert
Datum oben
	Feiertage rote Schrift
	Ferientage blaue Schrift
	Normaltage schwarze Schrift
Einträge darunter
	Bürotage nicht unterlegt
	R/H26/HD/E/I/W gelbe Schrift violett unterlegt
	Homeoffice hellgrün unterlegt
	Urlaub/Gleittag/Betriebsausflug hellblau unterlegt
	BS/S/DR hellgelb unterlegt
	K hellrot unterlegt
	abw hellgrau unterlegt
	Bereitschaft fett orange Schrift (7 Tage)
	
Exportfunktion -> Excel

Bereitschaftsliste (1154 - alle)
Datum oben
	Feiertage rote Schrift/hellgrau unterlegt
	Ferientage blaue Schrift
	Normaltage schwarze Schrift
MA nach Nachname sortiert
Einträge darunter
	Radiobuttons (genau 1 Auswahl je Tag - JEDER Tag)
	Orange unterlegt, wenn aktiv und U/GT
	ändern - nur gestern, heute, Zukunft


Urlaubsübersicht (BL/TL)
Fortlaufend (unbegrenzt)
Datum oben
Sortiert nach Teams
TL an erster Stelle
MA nach Nachname sortiert
Datum oben
	Feiertage rote Schrift
	Ferientage blaue Schrift
	Normaltage schwarze Schrift
Einträge darunter
	Urlaub/Gleittag/Betriebsausflug hellblau unterlegt
	BS/S/DR hellgelb unterlegt
	K hellrot unterlegt
	abw hellgrau unterlegt

Adminliste (1154-44 Infrastruktur)
(Liste zum Bearbeiten der Mitarbeiter-Zughörigkeit)
Liste der MA nach Nachnamen sortiert
Kennung
Kürzel
Team
Urlaubstage/Jahr
Durchwahl
Diensthandy
DienstMail
Eintritt
Austritt

Funktionen:
MA hinzufügen
	Kürzel wird automatisch vorgeschlagen
	(KEINE Dopplungen - auch nicht mit ehemaligen!)
	Kürzel kann frei gewählt werden
	Arbeitstage (3-/4-/5-Tage-Woche)

Stammdaten ändern
	Beim ausscheidenden MA wird das Austrittsdatum hinzugefügt
	Ansonsten kann außer Name und Kürzel alles geändert werden.
	
Teamwechsel
	Alter Datensatz wird mit Austritt versehen
	Kopie vom alten Datensatz mit neuem Team und ohne Austritt
	Funktion kann auch für Namenswechsel (& Kürzel) verwendet werden!

Mitarbeiterliste (1154 - alle)
Nach Teams sortiert
	TL an erster Stelle
	MA nach Nachnamen sortiert
Kürzel
A-Kennung
Tel-Nummer
Mail-Adresse

Exportfunktion -> Excel

---

R (Ruhrstr.)
H26 (Heilbronner Str.)
HD (Hohenzollerndamm)
E (Eisenzahnstraße)
I (Innolab)
W (Weitere Berlin)
HO (Home Office)
LJ (Urlaub)
BA (Betriebsausflug)
GT (Gleittag)
BS/S/DR (Berufsschule, Schulung, Dienstreise)
K (Krank)
abw (Abwesend)

## Frontend – Mockup (V1)

Diese erste Version enthält ausschließlich das Frontend-Gerüst (Next.js 14, React 18, Tailwind CSS). Eine echte Datenbank- oder API-Anbindung ist noch nicht vorhanden und wird in **Version 2** integriert.

### Lokale Entwicklung starten

Voraussetzungen: Node.js ≥ 18

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Der Server läuft standardmäßig auf http://localhost:3000. Nutzen Sie die Sidebar, um zwischen den verschiedenen Seiten (Kalender, Übersicht usw.) zu navigieren.
