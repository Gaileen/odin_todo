// DOM manipulation for generating todo list.

import createTodo from "./checklist";
import { getProj, proj_list } from "./projects";
import { curr_proj_displayed } from "./sidebar";

// Loads everything for the checklist container.
const loadChecklist = () => {
    loadTodos();
}

// Set up Todo Btn.
function loadAddTodoBtn() {
    const btn = document.getElementById("submit-todo");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const title = document.getElementById("title-in-todo").value;
        const desc = document.getElementById("desc-in-todo").value;
        const date = document.getElementById("date-in-todo").value;
        const proj_title = document.getElementById("in-proj-parent").value;
        // Add todo to (selected proj and) Default proj.
        const default_proj = getProj("Default");
        if (proj_title !== "") {
            const proj = getProj(proj_title);
            const new_todo = createTodo(title, desc, date, proj.length);
            proj.addTodo(new_todo);
            default_proj.addTodo(new_todo);
        } else {
            const new_todo = createTodo(title, desc, date, default_proj.length);
            default_proj.addTodo(new_todo);
        }
        loadTodos(curr_proj_displayed);
    });
}

const loadTodos = (proj_title="Default") => {
    const container = document.querySelector(".checklist-container");
    container.innerHTML = ``;
    loadTodoForm(container);
    loadAddTodoBtn();

    // Get project of curr page and load its Todos.
    const proj = getProj(proj_title);
    proj.getList().forEach(todo => {
        const todo_card = document.createElement("div");
        todo_card.classList.add("todo-card");
        todo_card.id = todo.t_id;
        container.appendChild(todo_card);

        // Text content.
        const title = document.createElement("h3");
        title.textContent = todo.t_title;
        todo_card.appendChild(title);
        const desc = document.createElement("div");
        desc.textContent = todo.t_desc;
        todo_card.appendChild(desc);
        const date = document.createElement("div");
        date.textContent = "Due date: " + todo.t_date;
        todo_card.appendChild(date);

        const status = document.createElement("div");
        status.textContent = "Completed? ";
        todo_card.appendChild(status);
        // Checkbox for completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (todo.is_done) {
            checkbox.checked = true;
            title.style.textDecoration = "line-through";
        }
        status.appendChild(checkbox);
        // Add event listener to update todo's status/style.
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                todo.is_done = true;
                title.style.textDecoration = "line-through";
            } else {
                todo.is_done = false;
                title.style.textDecoration = "none";
            }
        });
    });
};

function loadTodoForm(container) {
    const todo_form = document.createElement("form");
    todo_form.classList.add("todo-card");
    todo_form.id = "form-add-todo";
    todo_form.action = "#";
    todo_form.innerHTML = `
        <fieldset>
            <label for="title-in-todo">Title: </label>
            <input type="text" id="title-in-todo"></input>

            <label for="desc-in-todo">Description: </label>
            <input type="text" id="desc-in-todo"></input>

            <label for="date-in-todo">Due date: </label>
            <input type="text" id="date-in-todo"></input>

            <div class="proj-dropdown">
                <label for="in-proj-parent">Assign to project: </label>
                <select class="select-proj" name="in-proj-parent" id="in-proj-parent">
                    <option value=""></option>
                </select>
            </div>

            <button type="submit" id="submit-todo">Add Todo</button>
        </fieldset>
    `;
    container.appendChild(todo_form);

    const select_dropdown = document.querySelector(".select-proj");
    loadDropdown(select_dropdown);

    return todo_form;
}

function loadDropdown(select_div) {
    proj_list.forEach(proj => {
        const opt = document.createElement("option");
        opt.value = proj.p_title;
        opt.textContent = proj.p_title;
        // All todos will auto be in Default regardless.
        if (proj.p_title !== "Default") {
            select_div.appendChild(opt);
        }
    });
}

export { loadChecklist, loadTodos };