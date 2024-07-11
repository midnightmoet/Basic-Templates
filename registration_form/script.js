// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Store form data in localStorage
    const timestamp = new Date().getTime(); // Unique timestamp as key
    localStorage.setItem(`formData_${timestamp}`, JSON.stringify(formObject));

    // Reset the form
    event.target.reset();

    // Optionally, provide feedback to the user
    alert('Form submitted successfully!');
}

// Add event listener to the form for submit event
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
