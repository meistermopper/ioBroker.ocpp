# Obsidian MCP – Kurzbefehle & Integration

Dieser Leitfaden beschreibt die verfügbaren MCP-Werkzeuge (Model Context Protocol) zur direkten Interaktion mit dem lokalen Obsidian-Vault.

---

## 🛠️ Verfügbare MCP-Befehle / Tools

| Werkzeug | Kurzbeschreibung | Parameter |
|---|---|---|
| `sync_vault` | Scannt den gesamten Obsidian-Vault rekursiv und aktualisiert alle Markdown-Dateien im Vektorindex (ChromaDB). | *Keine* |
| `search_notes` | Führt eine semantische Ähnlichkeitssuche über alle indexierten Obsidian-Notizen durch. | `query` (string, Pflicht), `limit` (int, optional, Standard: 4) |
| `save_note` | Erstellt oder aktualisiert eine Notizdatei direkt im Vault und indexiert sie automatisch in der Vektordatenbank. | `relative_path` (string, Pflicht), `content` (string, Pflicht), `append` (boolean, optional, Standard: false) |

---

## 💡 Typische Anwendungsfälle & Workflows

### 1. Nach Notizen suchen (`search_notes`)
Findet thematisch passende Abschnitte auch ohne exakte Stichwort-Übereinstimmung über semantische Vektoreinbettungen.
* **Beispiel-Prompt:** *„Suche in Obsidian nach Notizen zur Miele-Authentifizierung“*
* **Aufruf:** `search_notes({ query: "Miele Authentifizierung OAuth GroupKey" })`

### 2. Notiz vollständig laden (`read_full_note`)
Liest den gesamten Text inklusive Frontmatter und Verlinkungen.
* **Beispiel-Prompt:** *„Lies die Projektnotiz zu ioBroker.miele-local“*
* **Aufruf:** `read_full_note({ relative_path: "10_Projects/ioBroker.miele-local.md" })`

### 3. Notiz erstellen oder überschreiben (`save_note`)
Speichert eine neue Notiz oder überschreibt eine bestehende Datei und indexiert die Chunks sofort in der ChromaDB.
* **Beispiel-Prompt:** *„Erstelle eine Notiz 10_Projects/MeinProjekt.md mit folgendem Inhalt...“*
* **Aufruf:** `save_note({ relative_path: "10_Projects/MeinProjekt.md", content: "...", append: false })`

### 4. An bestehende Notiz anfügen (`save_note` mit `append: true`)
Fügt Text am Ende einer existierenden Datei an (z. B. für Changelogs, Logs oder Übersichtslisten).
* **Beispiel-Prompt:** *„Ergänze die Notiz 20_Areas/SmartHome.md um den neuen Adapter...“*
* **Aufruf:** `save_note({ relative_path: "20_Areas/SmartHome.md", content: "\n## Neuer Abschnitt\n...", append: true })`

### 5. Gesamten Vault neu indexieren (`sync_vault`)
Scannt alle `.md`-Dateien im Vault neu und synchronisiert die Vektordatenbank (empfohlen nach manuellen Änderungen im Obsidian-Editor).
* **Beispiel-Prompt:** *„Synchronisiere den Obsidian Vault“*
* **Aufruf:** `sync_vault({})`

---

## 📂 Empfohlene Ordnerstruktur (PARA-Methode)

* `00_Inbox/` – Temporäre Notizen, Chat-Exporte, Ideen
* `10_Projects/` – Aktive Projekte & Adapter (z. B. `ioBroker.miele-local.md`, `ioBroker.harvia-fenix.md`)
* `20_Areas/` – Dauerhafte Verantwortungsbereiche (z. B. `SmartHome.md`, `Infrastruktur.md`)
* `30_Resources/` – Referenzen, Cheatsheets, API-Dokumentationen
* `40_Archive/` – Abgeschlossene Projekte & historische Dokumente
