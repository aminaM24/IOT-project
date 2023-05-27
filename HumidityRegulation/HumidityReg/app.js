function spasiPodatke()
{
    vlaznostZraka=Number(document.getElementById('vlagaInput').value); 
    firebase.database().ref('vlaznost').set({
        parametarVlaga: vlaznostZraka,
            }, (error) => {
                if (error) {
            console.log("Greska u snimanju podataka!");
                    } else {
            console.log("Uspjesno snimljeni podaci!");
        }
});
}

function blinkaj(vrijednost)
{
    dugme=vrijednost; 
    firebase.database().ref('vlaznost').set({
        parametarDugme: dugme,
            }, (error) => {
                if (error) {
            console.log("Greska u snimanju podataka!");
                    } else {
            console.log("Uspjesno snimljeni podaci!");
        }
});
}

