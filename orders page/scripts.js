// document.addEventListener('DOMContentLoaded', () => {
//     const filterButtons = document.querySelectorAll('.filter-button');
//     const orderCards = document.querySelectorAll('.order-card');

//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
//             filterOrders(button.textContent.toLowerCase());
//         });
//     });

//     function filterOrders(type) {
//         orderCards.forEach(card => {
//             if (type === 'all' || card.classList.contains(type)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const slider = document.querySelector('.slider');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            moveSlider(button);
        });
    });

    function moveSlider(button) {
        const rect = button.getBoundingClientRect();
        const containerRect = button.parentElement.getBoundingClientRect();
        slider.style.width = `${rect.width}px`;
        slider.style.left = `${rect.left - containerRect.left}px`;
    }

    // Initialize slider position
    const activeButton = document.querySelector('.filter-button.active');
    if (activeButton) {
        moveSlider(activeButton);
    }
});

