function animateBox(day) {
    var existingBox = document.querySelector('.box');
    if (existingBox) {
        // If there's already a box, exit it with animation and remove it
        existingBox.style.transform = 'translateY(200px)';
        existingBox.style.opacity = '0';

        setTimeout(function () {
            existingBox.remove();
            showNewBox(day);
        }, 500);
    } else {
        // If there's no existing box, just show the new box
        showNewBox(day);
    }
}

function showNewBox(day) {
    // Create a new box element
    var newBox = document.createElement('div');
    newBox.className = 'box';
    document.body.appendChild(newBox);

    // Set up the new box with entrance animation
    setTimeout(function () {
        newBox.style.backgroundColor = getRandomColor(day);
        newBox.style.transform = 'translateY(0)';
        newBox.style.opacity = '1';
    }, 100);
}

function getRandomColor(day) {
    // Specific color spectrums for each day
    switch (day) {
        case 'Monday':
            return '#ff9999';
        case 'Tuesday':
            return '#99ccff';
        case 'Wednesday':
            return '#ccffcc';
        case 'Thursday':
            return '#ffcc99';
        case 'Friday':
            return '#ff6666';
        case 'Saturday':
            return '#99ff99';
        case 'Sunday':
            return '#ffb366';
        default:
            return '#ccc';
    }
}

function changeButtonStyle(button) {
    button.style.backgroundColor = '#666';
    button.style.color = '#fff';
}

function restoreButtonStyle(button) {
    var day = button.id;
    button.style.backgroundColor = getRandomColor(day);
    button.style.color = '#fff';
}