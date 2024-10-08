import "./styles.css";
import { loadSidebar } from "./sidebar";
import processModal_p from "./proj_modal";
import loadHeader from "./header";
import { loadChecklist } from "./load_checklist";
import { addToProjList, createProj } from "./projects";

// Set up localStorage with 2 main variables.
let proj_list = JSON.parse(localStorage.getItem("proj_list")) || [];
addToProjList("Default");
// (STRING) The curr project being displayed.
if (!(localStorage.getItem("curr_proj_displayed"))) {
    // is a str, so no need to stringify when setting item.
    let curr_proj_title = "Default";
    localStorage.setItem("curr_proj_displayed", curr_proj_title);
}

console.log(createProj("Test Project")); //test

// load sidebar, project header, 
// and main Todo content.
loadSidebar();
loadHeader();
loadChecklist();

processModal_p();