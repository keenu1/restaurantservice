/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


}
window.addEventListener('scroll', scrollActive)



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SUB MENU TOGGLE BUTTON ===============*/

let subMenu = document.getElementById("subMenu")

function toggleMenu() {

    subMenu.classList.toggle("open__menu");
}

/*=============== CHANGE FORM LOGIN/REGISTER ===============*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})
/*=============== CHANGE FORM INPUT FILE ===============*/

function fileValidation() {
    var fileInput = document.getElementById('file')
    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.pdf)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
    fileInput.classList.remove("active")
    fileInput.classList.toggle("active")
}

/*=============== CHANGE FORM INPUT FILE VIDEO===============*/

function fileValidation() {
    var fileInput = document.getElementById('file-video')
    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.mp4|\.avi|\.mkv|\.3gp)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
    fileInput.classList.remove("active")
    fileInput.classList.toggle("active")
}

/*=============== CHANGE FORM LOGIN/REGISTER ===============*/



function toggleMenuAdmin() {
    var admin = document.getElementById("admin-insert");
    admin.classList.add("none");

}

function toggleMenuAdminShow() {
    var admin = document.getElementById("admin-insert");
    admin.classList.remove("none");
}

function toggleMenuAdminEdit() {
    var admin = document.getElementById("admin-edit");
    admin.classList.add("none");
}

function toggleMenuAdminEditShow() {
    var admin = document.getElementById("admin-edit");
    admin.classList.remove("none");
}

if (e.key === "Escape") {
    alert("escappee")
}

/*=============== FUNCTION SEARCH ===============*/

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("UL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}