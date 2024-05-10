//32:Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.

interface ToDo {
    task: string;
    completed: boolean;
}

const toDoList: ToDo[] = [
    { task: "Finish homework", completed: true },
    { task: "Go to the market", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Read a book", completed: false }
];

function logIncompleteTasks(toDoList: ToDo[]): void {
    console.log("Incomplete Tasks:");
    toDoList.forEach((item) => {
        if (!item.completed) {
            console.log(item.task);
        }
    });
}


logIncompleteTasks(toDoList);
