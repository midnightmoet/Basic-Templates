// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {

    // Select the form element
    const form = document.getElementById('survey-form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);

        // Create an object to store the form data
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Log form data to the console
        console.log('Form Data:', formDataObject);

        // Optionally, you can reset the form after submission
        form.reset();
    });

});