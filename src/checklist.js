// Todo item app-logic ONLY here.

import { getProj } from "./projects";

// (due to time constraints, 'priority'
// won't be implemented)
function createTodo(title, desc, date, id=getProj("Default").length) {
    const t_title = title;
    const t_desc = desc;
    const t_date = date; // due date
    const t_id = id;
    const is_done = false;

    return { t_title, t_desc, t_date, t_id, is_done };
}

export default createTodo;