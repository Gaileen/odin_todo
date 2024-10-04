// DOM Manipulation for modal for adding a proj.

import { addToProjList } from "./projects";
import { loadProjects } from "./sidebar";

// Add Proj modal. Set up its btns.
const processModal_p = () => {
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
    });
    //submit.removeEventListener("click", processProj);

    // Close modal btn.
    const close_btn = document.getElementById("close-modal-proj");
    close_btn.addEventListener("click", () => {
        modal.close();
    });
};

export default processModal_p;