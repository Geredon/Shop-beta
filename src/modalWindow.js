export function startModale(err) {
    let popupText = document.querySelector(".popup-text");
    let popup = document.querySelector(".popup");
    popup.classList.add('popup-show');
    let popupClose = document.querySelector(".popup-close")
    popupClose.addEventListener('click', function() {
        popup.classList.remove('popup-show')
    });
    popupText.innerHTML +=
        `
        ${err.message}
        `
}