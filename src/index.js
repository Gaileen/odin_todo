import "./styles.css";
import { loadSidebar } from "./sidebar";
import processModal_p from "./proj_modal";
import loadHeader from "./header";
import { loadChecklist } from "./load_checklist";

// load sidebar, project header, 
// and main Todo content.
loadSidebar();
loadHeader();
loadChecklist();

processModal_p();