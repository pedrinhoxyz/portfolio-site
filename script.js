document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');

    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});

function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});

function changeLanguage() {
    var form = document.getElementById("languageForm");
    var selectedLanguage = form.language.value;
    window.location.href = selectedLanguage;
}


const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector("span").style.backgroundImage = option.style.backgroundImage;
        select.querySelector("span").innerHTML = option.innerHTML;
        option.classList.add("selected");
        options_list.classList.toggle("active");
        select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    });
});