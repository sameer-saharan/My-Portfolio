// JS Projects
const image = document.querySelector("#jspr");

const jsprojects = "https://js-sameer.vercel.app/";

image.addEventListener('click', () => {
    window.open(jsprojects, "_blank")
})

// LinkedIn Profile
const linkedinImage = document.querySelector("#linkedin-img")
const linkedinUrl = "https://www.linkedin.com/in/sameer-saharan"

linkedinImage.addEventListener('click', () => {
    window.open(linkedinUrl, "_blank")
})

// Github Profile
const githubImage = document.querySelector("#github-img")
const githubUrl = "https://github.com/sameer-saharan"

githubImage.addEventListener('click', () => {
    window.open(githubUrl, "_blank")
})

// Mail to me
const emailImage = document.querySelector("#email-img")
const emailAddress = "mailto:sameerwebdev@outlook.com"

emailImage.addEventListener('click', () => {
    window.open(emailAddress, "_top")
})


// Navigation Bar
const jump = function () {
    const navLinks = document.querySelectorAll('#header-item');
    console.log(navLinks);

    navLinks.forEach( function(button) {
        console.log(button);
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const targetClass = this.getAttribute('href')
            const targetSection = document.querySelector(targetClass)

            if (targetSection) {
                const windowHeight = window.innerHeight;
                const sectionHeight = targetSection.offsetHeight
                const offset = (sectionHeight > windowHeight) ? 0 : (windowHeight - sectionHeight) / 2;

                targetSection.scrollIntoView({behaviour: 'smooth', 
                block: 'center',
                inline: 'center',
                offsetTop: offset
                })
            }
        })
    })

};

document.addEventListener('DOMContentLoaded', jump)



