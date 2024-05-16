document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const buttons = document.querySelectorAll(".slide-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];

        // Add animation class to current and next slides
        currentSlide.classList.remove("active");
        nextSlide.classList.add("active");

        // Trigger reflow to apply animation
        void currentSlide.offsetWidth;
        void nextSlide.offsetWidth;

        // Add animation classes
        currentSlide.classList.add("slide-out");
        nextSlide.classList.add("slide-in");

        // Update currentIndex after animation completes
        setTimeout(() => {
            currentSlide.classList.remove("slide-out");
            nextSlide.classList.remove("slide-in");
            currentIndex = index;
        }, 500); // Adjust animation duration as needed
    }

    // Show first slide initially
    showSlide(currentIndex);

    // Event listeners for buttons
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
        });
    });

    prevBtn.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });

    nextBtn.addEventListener("click", () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    });
});




// expand text 

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.querySelector('.read-more');
    const expandedContent = document.querySelector('.expanded-content');

    readMoreButton.addEventListener('click', function() {
        expandedContent.classList.toggle('active');
    });
});



    // Get the map element and the map container
    var map = document.getElementById('map');
    var mapContainer = document.getElementById('map-container');

    // Variables to store the initial position and the current position
    var initialX, initialY, currentX, currentY;

    // Function to handle mouse down event
    function handleMouseDown(event) {
        // Get the initial mouse position
        initialX = event.clientX;
        initialY = event.clientY;

        // Add event listeners for mouse move and mouse up events
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    // Function to handle mouse move event
    function handleMouseMove(event) {
        // Calculate the distance moved by the mouse
        var deltaX = event.clientX - initialX;
        var deltaY = event.clientY - initialY;

        // Update the current position of the map based on the distance moved
        currentX = deltaX;
        currentY = deltaY;

        // Apply the transformation to move the map
        map.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';
    }

    // Function to handle mouse up event
    function handleMouseUp() {
        // Remove event listeners for mouse move and mouse up events
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    // Add event listener for mouse down event on the map container
    mapContainer.addEventListener('mousedown', handleMouseDown);