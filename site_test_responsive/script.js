/* JAVASCRIPT RESPONSIVE SAMPLE WEB SITE */
/* COPYRIGHT RENAUD RESPONSIVE PROJECT */


// Tutoriel complet : https://youtu.be/enBAFo2kEfE?t=21
 
 
 // Scroll Navigation

 window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Active Navigation 

function toggleMenu() {
    let menuToggle = document.querySelector('.menuToggle');
    let navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};




// Gestion du Formulaire de Contact

let form = document.querySelector('#contactForm');

form.username.addEventListener('change', function() {
    validUsername(this);
});

form.email.addEventListener('change', function() {
    validEmail(this);
});

// Gestion Submit

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validUsername(form.username) && validEmail(form.email)) {
        form.submit();
    }
});

//*******************Validation username***************//

const validUsername = function(inputUsername) {
    let usernameRegExp = new RegExp(
        '^[a-zA-Z0-9-\s]+$','g'
    );

    let smallUsername = inputUsername.nextElementSibling;

    if (usernameRegExp.test(inputUsername.value)) {
        smallUsername.innerHTML = "Username valide";
        smallUsername.classList.remove('text-danger');
        smallUsername.classList.add('text-success');
        return true
    } else {
        smallUsername.innerHTML = "Votre username n'est pas valide";
        smallUsername.classList.remove('text-success');
        smallUsername.classList.add('text-danger');
        return false
    };
};


//*******************Validation email***************//

const validEmail = function(inputEmail) {
    //RegExp contrôle email
    let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g' 
    );

    // Récupération balise small email
    let smallEmail = inputEmail.nextElementSibling;
    // Test RegExp Email
    if (emailRegExp.test(inputEmail.value)) {
        smallEmail.innerHTML = "Adresse email valide";
        smallEmail.classList.remove('text-danger');
        smallEmail.classList.add('text-success');
        return true
    } else {
        smallEmail.innerHTML = "L'adresse email n'est pas valide";
        smallEmail.classList.remove('text-success');
        smallEmail.classList.add('text-danger');
        return false
    };
};


