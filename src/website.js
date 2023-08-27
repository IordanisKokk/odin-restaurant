import loadHome from '/src/modules/home';
import loadMenu from '/src/modules/menu';
import loadContact from '/src/modules/contact';

function createHeader(){
    // create header elements
    const header = document.createElement('header');
    header.classList.add('header');


    const reastaurantName = document.createElement('h1');
    reastaurantName.classList.add('restaurant-name');
    reastaurantName.textContent = 'Cosmic Cafe';

    header.appendChild(reastaurantName);
    header.appendChild(createNavBar());

    return header;

}

function createNavBar(){
    // create navigation buttons
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    // create and configure home button
    homeButton.classList.add('button-nav', 'home-button')
    homeButton.textContent = 'Home'
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
      });

    const menuButton = document.createElement('button');
    // create and configure menu button
    menuButton.classList.add('button-nav', 'menu-button')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
      });

    const contactButton = document.createElement('button');
    // create and configure contact button
    contactButton.classList.add('button-nav', 'contact-button')
    contactButton.textContent = 'Contact'
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    // Set active navigation button
    const buttons = document.querySelectorAll('.button-nav')

    buttons.forEach((btn) => {
        if(btn !== button){
            btn.classList.remove('active')
        }
    });

    button.classList.add('active')

} 

function createMain() {
    // create main content area
    const main = document.createElement('main');
    main.classList.add('main');

    main.setAttribute('id', 'main');
    
    return main;
}

function createFooter() {
    // create footer elements
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    const currentYear = new Date().getFullYear();
    copyright.textContent = `Copyright ©  ${currentYear} IordanisKokk`;

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/IordanisKokk';
    githubLink.textContent = 'Click for Github'
    githubLink.target = 'blank';

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

function initializeWebsite() {
    // Initialize the website
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.home-button'));

    loadHome();
}

export default initializeWebsite;