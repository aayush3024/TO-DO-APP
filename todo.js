// Welcome Message
window.onload = function () {
    console.log("To-Do App Loaded Successfully!");
};

// Highlight input when typing
const input = document.querySelector("input[name='task']");

if (input) {
    input.addEventListener("focus", () => {
        input.style.border = "2px solid #6C63FF";
    });

    input.addEventListener("blur", () => {
        input.style.border = "";
    });
}

// Confirm before deleting a task
const deleteButtons = document.querySelectorAll(".btn-danger");

deleteButtons.forEach(button => {
    button.addEventListener("click", function (e) {

        const confirmDelete = confirm("Delete this task?");

        if (!confirmDelete) {
            e.preventDefault();
        }

    });
});

// Show loading effect when adding task
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function () {

        const btn = form.querySelector("button");

        btn.innerHTML = "Adding...";
        btn.disabled = true;

    });

}

// Completed animation
const completeButtons = document.querySelectorAll(".btn-success");

completeButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerHTML = "✔️";

    });

});

// Current Date
const heading = document.querySelector("h1");

if (heading) {

    const today = new Date();

    heading.innerHTML +=
        `<br><small>${today.toDateString()}</small>`;
        }
