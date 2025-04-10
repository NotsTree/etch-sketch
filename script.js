// Default grid size
let gridSize = 16;

// Create grid function
function createGrid(size) {
    const container = document.getElementById('grid-container');
    
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size to fit container (percentage)
    const squareSize = 100 / size;
    
    // Create the grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        
        // Add hover effect
        square.addEventListener('mouseover', changeColor);
        
        container.appendChild(square);
    }
}

// Change color of square on hover
function changeColor(e) {
    e.target.style.backgroundColor = '#333';
}

// Reset grid and prompt for new size
function resetGrid() {
    let newSize = prompt('Enter number of squares per side for the new grid (max 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number.');
        return;
    }
    
    // Limit size to 100
    if (newSize > 100) {
        alert('Maximum grid size is 100x100. Creating a 100x100 grid instead.');
        newSize = 100;
    }
    
    gridSize = newSize;
    createGrid(gridSize);
}

// Add event listener to reset button
document.getElementById('reset').addEventListener('click', resetGrid);

// Initialize grid on page load
window.onload = () => createGrid(gridSize);