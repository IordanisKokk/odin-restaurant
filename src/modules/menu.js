function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Photon Pulled Pork Tacos', 'ender pulled pork infused with flavors from across the galaxy, nestled in cosmic tortillas. Served with nebula slaw and stardust salsa for an explosion of taste.'));
    menu.appendChild(createMenuItem('UFO Unagi Roll', ' A delectable roll featuring smoked eel, cucumber, and avocado, rolled in black and green soy paper to mimic an otherworldly spacecraft. Drizzled with an alien teriyaki glaze.' ));
    menu.appendChild(createMenuItem('Andromeda Ahi Poke Bowl', 'A starry bowl of diced ahi tuna marinated in celestial soy dressing, accompanied by quinoa asteroids, spiralized zucchini stardust, and a constellation of pickled ginger.'));
    menu.appendChild(createMenuItem('Stellar Steak Nebula', 'A succulent ribeye steak cooked to perfection, accompanied by truffle-infused space potatoes and a swirl of intergalactic mushroom gravy.' ));  
    menu.appendChild(createMenuItem('Galactic Gnocchi Geyser', 'Pillow-soft potato gnocchi erupting like geysers from a pool of cosmic tomato and roasted red pepper sauce. Topped with meteor-shower Parmesan.'));
    menu.appendChild(createMenuItem('Nova Nacho Platter', 'A supernova of flavor with layers of cosmic chips, black bean quasar dip, meteor cheese, and asteroid guacamole. Enhanced with a warp-speed jalapeño kick.' ));
    menu.appendChild(createMenuItem('Stellar Steak Nebula', 'A succulent ribeye steak cooked to perfection, accompanied by truffle-infused space potatoes and a swirl of intergalactic mushroom gravy.' ));  
    menu.appendChild(createMenuItem('Galactic Gnocchi Geyser', 'Pillow-soft potato gnocchi erupting like geysers from a pool of cosmic tomato and roasted red pepper sauce. Topped with meteor-shower Parmesan.'));
    menu.appendChild(createMenuItem('Nova Nacho Platter', 'A supernova of flavor with layers of cosmic chips, black bean quasar dip, meteor cheese, and asteroid guacamole. Enhanced with a warp-speed jalapeño kick.' ));
    
    // menu.appendChild(createMenuItem('', ''));
    // menu.appendChild(createMenuItem('', ''));
    // menu.appendChild(createMenuItem('', ''));
    // menu.appendChild(createMenuItem('', ''));
    // menu.appendChild(createMenuItem('', ''));
    
    
    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    //Create elements for the dish name, and description;

    const itemName = document.createElement('h2');
    const itemDescription = document.createElement('p')

    itemName.textContent = name;
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

export default function loadMenu(){
    const main = document.getElementById('main');

    main.textContent = '';
    main.appendChild(createMenu());
}