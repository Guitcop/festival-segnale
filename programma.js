
const griglia = document.querySelector(".event-grid");

function mostraMessaggio(testo) {
  const messaggio = document.createElement("p");
  messaggio.textContent = testo;
  griglia.replaceChildren(messaggio);
}

async function caricaProgramma() {
  mostraMessaggio("Caricamento del programma…");

  try {
    const [rispostaEventi, rispostaSedi] = await Promise.all([
      fetch("dati/eventi.json"),
      fetch("dati/sedi.json")
    ]);

    if (!rispostaEventi.ok || !rispostaSedi.ok) {
      throw new Error("Errore nel caricamento dei dati");
    }

    const eventi = await rispostaEventi.json();
    const sedi = await rispostaSedi.json();

    if (!Array.isArray(eventi) || !Array.isArray(sedi)) {
      throw new Error("Formato dei dati non valido");
    }

    if (eventi.length === 0) {
      mostraMessaggio("Nessun evento in programma.");
      return;
    }

    griglia.replaceChildren();

    eventi.forEach(evento => {
      const sede = sedi.find(s => s.id === evento.sede_id);
      const nomeSede = sede ? sede.nome : "Sede da definire";

      const data = new Date(evento.data + "T00:00:00");

      const dataFormattata = data.toLocaleDateString("it-IT", {
        weekday: "long",
        day: "numeric",
        month: "long"
      });

      const dataFinale =
        dataFormattata.charAt(0).toUpperCase() +
        dataFormattata.slice(1);

      const scheda = document.createElement("article");
      scheda.className = "event-card";

      const immagine = document.createElement("img");
      immagine.src = evento.immagine;
      immagine.alt = evento.immagine_alt;
      immagine.width = 900;
      immagine.height = 600;

      const corpo = document.createElement("div");
      corpo.className = "event-body";

      const meta = document.createElement("p");
      meta.className = "event-meta";
      meta.textContent =
        `${dataFinale} · ${evento.orario} · ${evento.categoria}`;

      const titolo = document.createElement("h3");
      titolo.textContent = evento.titolo;

      const descrizione = document.createElement("p");
      descrizione.textContent = evento.descrizione;

      const luogo = document.createElement("p");
      luogo.className = "event-place";

      const etichetta = document.createElement("strong");
      etichetta.textContent = "Sede:";

      luogo.append(etichetta, " " + nomeSede);

      corpo.append(meta, titolo, descrizione, luogo);
      scheda.append(immagine, corpo);
      griglia.append(scheda);
    });

  } catch (errore) {
    console.error(errore);
    mostraMessaggio("Il programma non è disponibile.");
  }
}

caricaProgramma();
