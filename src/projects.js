// Project obj app-logic ONLY here.

// Storing user's projects here for now.
const proj_list = [];

// (due to time constraints, removeProj//change/getTitle
// won't be implemented)
function createProj(title, id) {
    const p_title = title;
    const p_id = id;
    let todo_list = [];

    const getList = () => {
        return todo_list;
    };

    const addTodo = (todo) => {
        todo_list.push(todo);
        // can worry abt "priority" stuff l8r
        console.log("Added to proj list!");
    };

    const removeTodo = () => {
        console.log("I DONT DO ANYTHING YET LMAO");
    };

    return { p_title, p_id, getList, addTodo, removeTodo };
}

function addToProjList(title) {
    let id = proj_list.length;
    proj_list.push(createProj(title, id));
    // console.log("Added to project list.");
    // console.log(proj_list);
}

// Assignment wants there to always be a "Default" proj.
addToProjList("Default");


export { createProj, addToProjList, proj_list };