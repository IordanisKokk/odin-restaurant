function header() {

    const element = document.createElement('div');
    const title = document.createElement('h2')

    element.classList.add('header');

    title.textContent = 'Cosmic Cafe';


    element.appendChild(title);

    return element

}

export { header };