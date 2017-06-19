import React from 'react';

const Oppgave5Text = () =>
  <div>
    <p>I oppgave 3 hentet vi karakterer med direkte funksjonskall. I den virkelige verden gjør vi sjeldent det. Vi bruker heller async kall mot api'er for å hente data. I mappen "util" har vi laget en mock for et slikt api vha <a href="https://www.npmjs.com/package/redux-pack">redux-pack</a>. Lurt å ta en titt på linken. Det er satt på en delay på 2 sek for å simulere et backend kall. Hvis du ser i oppgave5Reducer nå så ser den litt annerledes ut og hvis du klikker på knappen "Hent karakterer" så kan du se i redux devtools og console at ting skjer.
    </p>
    <p>
      a) Implementer "success" i oppgave3Reducer og sørg for at listen av karakterer lastes på siden. (Hvis du ikke ønsker repetisjon i koden så kan du kopiere fra tidligere oppgaver)
    </p>
  </div>;

export default Oppgave5Text;
