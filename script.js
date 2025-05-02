// 1. Event Handling

// Button click to change text
document.getElementById("changeButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "lightgreen";
});

// Hover effect for gallery images
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => item.style.transform = 'scale(1.1)');
    item.addEventListener('mouseout', () => item.style.transform = 'scale(1)');
});

// Keypress detection
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// Bonus: Double-click event
document.getElementById("changeButton").addEventListener("dblclick", function() {
    alert("Double-clicked!");
});

// 2. Interactive Elements

// Accordion-style content
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// 3. Form Validation

// Real-time feedback for password length
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    if (password.length < 8) {
        this.setCustomValidity("Password must be at least 8 characters.");
    } else {
        this.setCustomValidity("");
    }
});

// Form submit validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (!email.validity.valid || password.value.length < 8) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill out the form correctly.");
    } else {
        alert("Form submitted successfully!");
    }
});
