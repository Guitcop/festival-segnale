
# Resoconto del lavoro con l'AI

## Sessione 1 · 18 novembre 2026

### Recupero del progetto precedente

Ho chiesto all'AI di aiutarmi a ritrovare la cartella
del progetto collegata a GitHub. Attraverso i comandi
del terminale, abbiamo identificato la repository
corretta e verificato lo stato del progetto.

### Completamento dei file JSON

Ho fornito all'AI il contenuto dei file programma.html,
info.html e dei due file JSON iniziali.

L'AI mi ha aiutato a completare i sei eventi e le tre
sedi, mantenendo i contenuti originali del sito e gli
identificativi già assegnati.

### Schema dei dati

Ho chiesto all'AI di preparare il file SCHEMA.md
con la descrizione delle entità, dei campi, delle
chiavi e della relazione tra Evento e Sede.

Ho utilizzato lo schema Mermaid proposto e verificato
la sua visualizzazione nell'anteprima di VS Code.

### Programma dinamico

L'AI mi ha proposto il codice JavaScript per generare
automaticamente le schede degli eventi a partire
dai file JSON.

Ho utilizzato il codice e modificato programma.html,
mantenendo l'identità visiva del sito precedente.

Ho verificato la visualizzazione dei sei eventi e
il caricamento dei due file JSON nella scheda Rete
del browser.

Abbiamo inoltre previsto i quattro stati del programma:
caricamento, successo, vuoto ed errore.

### Integrazione del meteo

Ho chiesto all'AI di aiutarmi a integrare l'API
Open-Meteo nella pagina Info e luoghi.

Ho utilizzato il codice JavaScript proposto e aggiunto
un riquadro HTML, mantenendo lo stile grafico del sito.

Ho verificato la visualizzazione della temperatura,
della velocità del vento, dell'orario di aggiornamento
e della fonte dei dati.

### Problemi e verifiche

- Difficoltà nel ritrovare la repository locale:
  risolta attraverso i comandi Git nel terminale.
- Codice 304 nella scheda Rete: risolto disattivando
  la cache del browser per verificare il codice 200.
- Verifica della modifica del nome di una sede.
- Verifica dello stato senza eventi.
- Verifica di un identificativo di sede inesistente.
- Verifica dell'errore dell'API meteo.
- Verifica della visualizzazione su computer
  e in modalità responsive.

Dopo i test ho ripristinato i dati e l'indirizzo
originale dell'API.

Ho salvato progressivamente il lavoro attraverso
diversi commit Git.

### Verifiche finali e correzioni

Ho fornito all'AI i documenti guida-iniziale.md
e requisiti-nuova-consegna.md per verificare il rispetto
di tutte le richieste del docente.

- Ho verificato il messaggio di errore rinominando
  temporaneamente il file sedi.json.
- Ho verificato nuovamente il funzionamento dell'API meteo.
- Ho aggiunto una frase per chiarire che i dati meteo
  riguardano il giorno attuale e non le date del festival.
- Ho ripristinato i dati originali dopo i test.
- Ho organizzato la cartella progettazione con i file
  moodboard.pdf e resoconto-ai.md.
