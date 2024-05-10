//32:Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
var toDoList = [
    { task: "Finish homework", completed: true },
    { task: "Go to the market", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Read a book", completed: false }
];
function logIncompleteTasks(toDoList) {
    console.log("Incomplete Tasks:");
    toDoList.forEach(function (item) {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}
logIncompleteTasks(toDoList);
