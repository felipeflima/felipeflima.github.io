const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

function nav (){
    $("#nav-placeholder").load("../nav.html");
}

function footer(){
$("#footer-placeholder").load("footer.html");
}