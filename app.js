const modalOpenButtons = document.querySelectorAll("[data-modal-target]");
const modalCloseButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");
const hamburgerIcon = document.querySelector(".header__burger");

hamburgerIcon.addEventListener('click', () => {
    toggleHamburger();
    overlay.classList.toggle("active");
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    })
    closeHamburger();
});

modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});
modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal")
        closeModal(modal);
    });
});

function closeHamburger() {
    overlay.classList.remove("active");
    document.querySelector("nav").classList.remove("display-flex");
    document.querySelector(".navigation").classList.remove("visibility-visible");
}

function toggleHamburger() {
    document.querySelector("nav").classList.toggle("display-flex");
    document.querySelector(".navigation").classList.toggle("visibility-visible");
}

function openModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
