// Project obj app-logic ONLY here.

let proj_list = JSON.parse(localStorage.getItem("proj_list")) || [];

// (due to time constraints, removeProj//change/getTitle
// won't be implemented)
function createProj(title, id, todo_list=[]) {
    const p_title = title;
    const p_id = id;
    let p_todo_list = todo_list;

    const getList = () => {
        return p_todo_list;
    };

    const addTodo = (todo) => {
        p_todo_list.push(todo);
        //localStorage.setItem("proj_list", JSON.stringify({ p_title, p_id, todo_list })); // Save
        // can worry abt "priority" stuff l8r
    };

    //***IMPLEMENT LATER */
    // const removeTodo = () => {
    //     console.log("I DONT DO ANYTHING YET LMAO");
    // };

    // return { p_title, p_id, getList, addTodo, removeTodo };
    return { p_title, p_id, p_todo_list, getList, addTodo };
}

function addToProjList(title) {
    let proj_list = JSON.parse(localStorage.getItem("proj_list")) || [];
    // Check if proj already exists.
    // console.log(proj_list);
    const existingProj = proj_list.find(proj => proj.p_title === title);
    if (!existingProj) {
        let id = proj_list.length;
        proj_list.push(createProj(title, id));

        // Save to localStorage's proj_list
        localStorage.setItem("proj_list", JSON.stringify(proj_list));
    }
}

// Get project from localStorage's proj_list given name
function getProj(title) {
    let proj_list = JSON.parse(localStorage.getItem("proj_list")) || [];
    // console.log(proj_list);
    for (const proj of proj_list) {
        if (proj.p_title === title) {
            // return proj;
            // We fetch from localStorage (list of Objs),
            // so this way adds back Project methods/props.
            const found_proj = createProj(title, proj.p_id, proj.p_todo_list);
            // console.log("Found " + found_proj.getList());
            // console.log("Returning Project:", JSON.stringify(found_proj, null, 2));
            return found_proj;
        }
    }
    throw new Error(`"${title}" not found.`);
}

// Updates proj_list and localStorage
// (to be called after a single project has a change, given the proj obj).
function resaveProjs(proj_changed) {
    console.log("Resaving....");
    let proj_list = JSON.parse(localStorage.getItem("proj_list")) || [];
    console.log(proj_list);
    proj_list = proj_list.filter(proj => proj.p_title !== proj_changed.p_title);
    console.log("Filtered " + proj_list);
    localStorage.setItem("proj_list", JSON.stringify(proj_list));
    console.log(proj_changed.p_todo_list);
    proj_list.push(createProj(proj_changed.p_title, proj_changed.id, proj_changed.p_todo_list));
    localStorage.setItem("proj_list", JSON.stringify(proj_list));
}

export { createProj, addToProjList, getProj, resaveProjs };