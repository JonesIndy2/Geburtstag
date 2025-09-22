// Funktion zum Senden der E-Mail
function sendMail(event) {
    event.preventDefault(); // Verhindert das automatische Abschicken des Formulars

    let parms = {
    name: document.getElementById("name").value,
    begleitung: document.getElementById("begleitung").value,
    begruendung: document.getElementById("begruendung").value,
    teilnahme: document.querySelector('input[name="teilnahme"]:checked')?.value || "",
    essen: document.querySelector('input[name="vegetarisch"]:checked')?.value || "",
    getraenke: document.querySelector('input[name="trinke"]:checked')?.value || ""
    };


    emailjs.send("service_1dz1n55", "template_jschp4w", parms)
        .then(() => alert("Email gesendet!!"))
        .catch((error) => alert("Fehler beim Senden: " + error));
}

// Funktion zum Anzeigen/Verstecken der Textfelder je nach Auswahl
function togglebegleitung() {
    const radios = document.getElementsByName("teilnahme");
    const feldBegleitung = document.getElementById("begleitung-feld");
    const feldBegruendung = document.getElementById("begruendung-feld");

    let selectedValue = "";
    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    // Felder zurücksetzen
    feldBegleitung.classList.add("hidden");
    feldBegruendung.classList.add("hidden");

    if (selectedValue === "komme_mit") {
        feldBegleitung.classList.remove("hidden");
    } else if (selectedValue === "nicht_komme") {
        feldBegruendung.classList.remove("hidden");
    }
}

// Event Listener für das Formular
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("geburtstagsForm");
    if (form) {
        form.addEventListener("submit", sendMail);
    }
});
