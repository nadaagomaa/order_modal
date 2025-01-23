// script.js
/*document.getElementById('openModal').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('customModal'));
    modal.show();
});

document.getElementById('fullscreenToggle').addEventListener('click', function() {
    const modalDialog = document.querySelector('.modal-dialog');
    if (modalDialog.classList.contains('modal-fullscreen')) {
        modalDialog.classList.remove('modal-fullscreen');
        this.innerHTML = '<i class="bi bi-fullscreen"></i>'; // Change icon back
    } else {
        modalDialog.classList.add('modal-fullscreen');
        this.innerHTML = '<i class="bi bi-fullscreen-exit"></i>'; // Change icon to exit fullscreen
    }

});*/
/*document.getElementById('openModal').addEventListener('click', function() {
    const modal = new bootstrap.Modal(document.getElementById('customModal'));
    modal.show();
});*/

document.getElementById('fullscreenToggle').addEventListener('click', function() {
    const modalDialog = document.querySelector('.modal-dialog');
    if (modalDialog.classList.contains('modal-fullscreen')) {
        modalDialog.classList.remove('modal-fullscreen');
        this.innerHTML = '<i class="bi bi-fullscreen"></i>'; // Change icon back and reset text
    } else {
        modalDialog.classList.add('modal-fullscreen');
        this.innerHTML = '<i class="bi bi-fullscreen-exit"></i>'; // Change icon to exit fullscreen and update text
    }
});
