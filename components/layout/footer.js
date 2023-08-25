function footer() {

    const element = document.createElement('div');
    const title = document.createElement('p')

    element.classList.add('header');

    title.textContent = 'Created by @IordanisKokk';


    element.appendChild(title);

    return element

}

export { footer };