// DOM Manipulation for modal for adding a proj.

import { addToProjList } from "./projects";
import { loadProjects } from "./sidebar";
import { loadTodos } from "./load_checklist";

// let curr_proj_displayed = localStorage.getItem("curr_proj_displayed");

// Add Proj modal. Set up its btns.
const processModal_p = () => {
    let curr_proj_displayed = localStorage.getItem("curr_proj_displayed");
    // Get title & make proj obj once usr submits.
    const modal = document.getElementById("dialog-add-proj");
    const submit = document.getElementById("submit-add-proj");
    
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        // Add proj to user's list.
        const title_input = document.getElementById("title-input-proj");
        addToProjList(title_input.value);
        
        loadProjects();
        modal.close();
        const form = document.getElementById("form-add-proj");
        form.reset();

        // Reload Todo form's proj dropdown.
        loadTodos(curr_proj_displayed);
    });

    // Close modal btn.
    const close_btn = document.getElementById("close-modal-proj");
    close_btn.addEventListener("click", () => {
        modal.close();
    });
};

export default processModal_p;