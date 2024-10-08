// Header DOM Manipulation here ONLY.

// localStorage already supports strs, so no need JSON.parse
const loadHeader = () => {
    let curr_proj_displayed = localStorage.getItem("curr_proj_displayed");
    const project_header = document.getElementById(
        "project-header");
    project_header.textContent = curr_proj_displayed;
};

export default loadHeader;