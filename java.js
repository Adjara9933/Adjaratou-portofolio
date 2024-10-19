function handleSubmit(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
}



