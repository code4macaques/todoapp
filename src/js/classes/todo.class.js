
export class Todo {

    static fromJSON( {id, task, completed, createdAt} ) {
        const tempTodo = new Todo(task);
        tempTodo.id = id;
        tempTodo.completed = completed;
        tempTodo.createdAt = createdAt;
        return tempTodo;
    }

    constructor(task){
        this.id = new Date().getTime(); // 
        this.task = task;
        this.completed = false;
        this.createdAt = new Date();
    }

    printTODO() {
        console.log(`======= id: ${this.id} - task: ${this.task}`);
    }

}