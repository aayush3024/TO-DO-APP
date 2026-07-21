function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Task text
    let span = document.createElement("span");
    span.innerText = task;

    // Complete task on click
    span.onclick = function () {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}

// Add task by pressing Enter
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
