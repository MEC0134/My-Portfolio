// Store all buttons and elements
const openModalBtns = document.querySelectorAll("[data-modal-target]");
const closeModalBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");


// open modal when contact me button clicked
openModalBtns.forEach(button => {

    button.addEventListener('click', () => {

        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        $('.modal').css('visibility', 'visible') // Jquery
    })
})

// Close modal if outside of form is clicked 
overlay.addEventListener('click', () => {

    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        
        closeModal(modal);
    })

})

closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {

        // get parent of button with class .modal
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})


// open modal function
function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
}

// close modal function
function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}