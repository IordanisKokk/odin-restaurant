function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    home.appendChild(createParagraph("Welcome to the Cosmic Cafe"));
    home.appendChild(createParagraph("For culinary explorations "));
    home.appendChild(createParagraph("Made with passion"));
    home.appendChild(createParagraph("Order Online via e-food.gr and wolt"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    return paragraph;
}

export default function loadHome(){
    const main = document.getElementById('main');

    main.textContent = '';
    main.appendChild(createHome());
}