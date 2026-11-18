
const riquadroMeteo = document.querySelector("#meteo-dati");

const urlMeteo = "https://api.open-meteo.com/v1/forecast?latitude=45.0703&longitude=7.6869&current=temperature_2m,wind_speed_10m&timezone=Europe%2FRome";

async function caricaMeteo() {
  riquadroMeteo.textContent = "Caricamento del meteo…";

  try {
    const risposta = await fetch(urlMeteo);

    if (!risposta.ok) {
      throw new Error("Errore nel caricamento del meteo");
    }

    const dati = await risposta.json();
    const meteo = dati.current;

    const temperatura = document.createElement("p");
    temperatura.textContent =
      `Temperatura: ${meteo.temperature_2m} °C`;

    const vento = document.createElement("p");
    vento.textContent =
      `Velocità del vento: ${meteo.wind_speed_10m} km/h`;

    const aggiornamento = document.createElement("p");
    aggiornamento.textContent =
      `Ultimo aggiornamento: ${meteo.time.replace("T", " · ")}`;

    riquadroMeteo.replaceChildren(
      temperatura,
      vento,
      aggiornamento
    );

  } catch (errore) {
    console.error(errore);
    riquadroMeteo.textContent = "Il meteo non è disponibile.";
  }
}

caricaMeteo();
