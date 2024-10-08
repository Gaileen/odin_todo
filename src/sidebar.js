// Sidebar DOM Manipulation here ONLY.

import { loadChecklist } from "./load_checklist";
import loadHeader from "./header";

// let proj_list = JSON.parse(localStorage.getItem("proj_list"));
// let curr_proj_displayed = localStorage.getItem("curr_proj_displayed");

// Add Proj Btn.
function loadAddBtn() {
    const add_btn = document.getElementById("add-proj-btn");
    const modal = document.getElementById("dialog-add-proj");
    add_btn.addEventListener("click", () => {
        modal.showModal();
    });
}

// Make divs for projects in sidebar.
function loadProjects() {
    let proj_list = JSON.parse(localStorage.getItem("proj_list"));
    let curr_proj_displayed = localStorage.getItem("curr_proj_displayed");

    const sidebar = document.querySelector(".projects-list");
    sidebar.innerHTML = ``;

    // Make nav divs for ea proj in sidebar.
    proj_list.forEach((proj) => {
        console.log("Side loading proj: " + proj);
        const proj_div = document.createElement("div");
        proj_div.classList.add("project"); 
        proj_div.id = "project" + proj.id;
        proj_div.textContent = proj.p_title;
        sidebar.appendChild(proj_div);

        // Add event listener so users can see the proj's todos.
        proj_div.addEventListener("click", () => {
            localStorage.setItem("curr_proj_displayed", proj_div.textContent);
            loadHeader();
            // loadTodos(curr_proj_displayed);
            loadChecklist();
        });
    });
}

// Loads everything for the sidebar.
const loadSidebar = () => {
    loadAddBtn();
    loadProjects();
};

export { loadSidebar, loadProjects };