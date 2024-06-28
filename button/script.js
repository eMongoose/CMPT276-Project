// open or close filter dropdown
function filterSort() {
    // get parameters
    const menu = document.getElementById('filterMenu');
    // closed
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
    // open
    else {
        menu.style.display = 'block';
    }
}

window.onclick = function (event) {
    // get parameters
    const menu = document.getElementById('filterMenu');         // the menu
    const button = document.querySelector('.filter-button');    // the button

    // if user clicks out of dropdown space
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        if (menu.style.display === 'block') {
            // close it
            menu.style.display = 'none';
        }
    }
}