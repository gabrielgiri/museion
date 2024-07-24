// scripts.js

// Function to update column count
function updateColumnCount(columns) {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.columnCount = columns;
}

// Add event listeners to buttons
document.querySelectorAll('.mybutton').forEach(button => {
    button.addEventListener('click', (event) => {
        const columns = event.target.getAttribute('data-columns');
        updateColumnCount(columns);
    });
});
