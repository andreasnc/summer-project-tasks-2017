import React from 'react';

const Oppgave3Text = () =>
  <div>
    <p>a) Til nå har vi lastet inn characters fra en .json fil direkte til komponenten *View.js.
      Denne gangen skal vi få den ifra en action istedet.
      Funksjonen med filnavn fetchCharacters returnerer nå listen av karakterer
      gjennom en action med type "FETCH_CHARACTERS_SUCCEEDED" og selve listen som payload.
      Oppgaven her blir å plukke opp action og servere listen over karakterer som props til StarWarsCharacters.
      (HINT: se i reducer, container og index.js i mappen Oppgave3)
    </p>
    <p>b) Lag din egen action som kalles når knappen "Hent ny karakter". Denne skal hente karakteren fra additional_data.json
      og legge karakteren til i listen med de andre karakterene.</p>
  </div>;

export default Oppgave3Text;
