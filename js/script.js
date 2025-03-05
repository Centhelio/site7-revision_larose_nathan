const boutonsModale = document.querySelectorAll('.btn_card');
const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale(e) {
    const bouton = e.currentTarget;
    const image = document.createElement('img');

    console.log(chemin);

    image.setAttribute('src', chemin);
    image.classList.add('zoom');

    modale.appendChild(image);
    modale.classList.add('visible');


    image.addEventListener("click", closeModale);
}

function closeModale(event) {
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}