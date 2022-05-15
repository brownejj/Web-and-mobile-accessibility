/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
}, false);




$('#font-increase-button').click(function() {
    curSize = parseInt($('html').css('font-size')) + 2;
    if (curSize <= 32)
        $('html').css('font-size', curSize);
});


$('#font-decrease-button').click(function() {
    curSize = parseInt($('html').css('font-size')) - 2;
    if (curSize >= 14)
        $('html').css('font-size', curSize);
});




function MenuKeyboardClose(){
    let subs = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
        for (let i = 0; i < subs.length; i++) {
            subs[i].classList.remove('show');
            subs[i].parentNode.firstElementChild.setAttribute("aria-expanded", "false");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .addEventListener('keydown', MenuKeyboardPressed, false);
    }, false);




function MenuKeyboardPressed(e) {
   
   //ESC ==> KeyCode = 27
    if (e.keyCode === 27) {
        e.stopPropagation();
        e.preventDefault();
        MenuKeyboardClose();
    }


    //Tab ==> KeyCode = 9
    if (e.shiftKey && e.keyCode === 9) {
        let currentDropDownButton = e.target;
        if (currentDropDownButton.className === "dropdown-item"){
            let sub = currentDropDownButton.parentNode.parentNode.firstElementChild.firstElementChild
            if (currentDropDownButton.textContent === sub.textContent){
                 MenuKeyboardClose();
            }
        }
        else if (currentDropDownButton.className === "nav-link dropdown-toggle"){
            MenuKeyboardClose();
        }
    }


    
    else if (e.keyCode === 9) {
        let currentDropDownButton = e.target;
        if (currentDropDownButton.className === "dropdown-item"){
            let sub_last = currentDropDownButton.parentNode.parentNode.lastElementChild.lastElementChild

            if (currentDropDownButton.textContent === sub_last.textContent){
                MenuKeyboardClose();
            }
        }
    }

    //Space ==> KeyCode = 32
    if (e.keyCode === 32) {
        e.stopPropagation();
        e.preventDefault();
        let currentDropDownButton = e.target;
        if (currentDropDownButton.className === "nav-link" || currentDropDownButton.className === "nav-link dropdown-toggle" || currentDropDownButton.className === "dropdown-item"  ){
            currentDropDownButton.click()
        }
    }
}



