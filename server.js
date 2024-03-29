const express = require('express');
const app = express();
const port = 3000; // Wählen Sie einen freien Port

// Statische Dateien wie HTML, CSS und JavaScript aus dem öffentlichen Ordner bereitstellen
app.use(express.static('public'));

// Starten Sie den Server und geben Sie eine Bestätigungsmeldung aus
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
