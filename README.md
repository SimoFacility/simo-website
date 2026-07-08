# SIMO Website – Deployment

Statische Seite, kein Build-Schritt nötig. Dateien: `index.html`, `impressum.html`, `datenschutz.html`, `styles.css`, `script.js`, `assets/` (inkl. `assets/fonts/` – Poppins wird seit 8. Juli 2026 selbst gehostet, DSGVO-konform ohne Google-Fonts-Server; die Font-Dateien müssen mit deployt werden).

## Vor dem Live-Gang prüfen
- In `impressum.html`: verbleibende gelb markierte Platzhalter (Name, Adresse, Gewerbeamt, HWK-Status) ausfüllen. Telefonnummer ist eingetragen.
- Telefonnummer +49 1515 0080016 (Arbeitsnummer Osama) ist als tel:-Link in Navigation, Kontakt und mobiler Leiste hinterlegt; WhatsApp-Anfragen laufen über wa.me auf dieselbe Nummer.
- E-Mail-Adresse `info@simo-facility.de` bei Ionos tatsächlich eingerichtet/weitergeleitet?

## Deployment über GitHub Pages
1. Neues Repository auf GitHub anlegen (z. B. `simo-website`, public – Pages ist im Free-Plan nur für öffentliche Repos kostenlos).
2. Inhalt dieses Ordners (`10_Website/`) in das Repository hochladen (Dateien direkt im Hauptverzeichnis, nicht in einem Unterordner). Die Datei `CNAME` (Inhalt: `simo-facility.de`) liegt bereits bei und muss mit hochgeladen werden.
3. Im Repository: Settings → Pages → Branch `main` / Ordner `/ (root)` auswählen → Speichern.
4. GitHub zeigt eine `<username>.github.io/simo-website`-Adresse an – erste Sichtprüfung dort.
5. Im Repo unter Settings → Pages als „Custom domain" `simo-facility.de` eintragen; „Enforce HTTPS" aktivieren, sobald verfügbar (Zertifikat braucht nach DNS-Umstellung etwas Zeit).

## DNS bei Ionos (Domains & SSL → simo-facility.de → DNS)
Für die Root-Domain `simo-facility.de` vier A-Records anlegen (Host: `@`), vorhandene A-/AAAA-Records auf `@` vorher entfernen:

| Typ | Host | Wert |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `simofacility.github.io` |

Wichtig: Die MX-/E-Mail-Einträge von Ionos NICHT anfassen, sonst fällt `info@simo-facility.de` aus. Nach DNS-Verbreitung (Minuten bis max. 24 Std.) läuft die Seite unter `simo-facility.de` – dauerhaft online, unabhängig vom eigenen PC.

## Nach dem Live-Gang
- Seite einmal komplett auf Desktop + Handy durchscrollen (Schriften laden lokal? Logo scharf? Formular öffnet E-Mail-Programm?).
- Danach: Google Business Profile einrichten und Website-URL dort hinterlegen.
