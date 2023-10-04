// Existing code
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Added function to send email
function sendEmail() {
    Email.send({
        SecureToken: "ifxz twds sala gkkh",
        To: 'waltertanui2020@gmail.com',
        From: document.querySelector('#email').value,
        Subject: "New message from " + document.querySelector('#name').value,
        Body: document.querySelector('#message').value,
    }).then(
        message => {
            alert("mail sent successfully: " + message);
            console.log(message);
        }
    );
}
