import _ from 'lodash';

import { header } from '/components/layout/header';
import { footer } from '/components/layout/footer';

function component() {
    const element = document.createElement('div');

    element.classList.add('main-container');

    element.innerHTML = 'MAIN CONTAINER';

    return element;
}

document.body.appendChild(header());
document.body.appendChild(component());
document.body.appendChild(footer());