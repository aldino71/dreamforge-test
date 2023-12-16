// static/js/chatbot.js

document.addEventListener("DOMContentLoaded", function () {
    const chatbotOptions = document.querySelectorAll('#chatbot-options ul li a');

    chatbotOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedOption = this.getAttribute('href');
            // Handle the selected chatbot option and redirect to the corresponding page
            window.location.href = selectedOption;
        });
    });
});
