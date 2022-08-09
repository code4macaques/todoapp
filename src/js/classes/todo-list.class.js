import { Todo } from './index';

export class TodoList {

    constructor(){
        this.tasks = [];
    }

    newTodo(task) {
        this.tasks.push(task);
        this.saveTodoLocalStorage();
    }

    deleteTodo(id) {
        this.tasks = this.tasks.filter(t => t.id != id);
        this.saveTodoLocalStorage();
    }

    completeTodo(id) {
        for( const task of this.tasks ) {
            if( task.id == id ) {
                task.completed = !task.completed;
                this.saveTodoLocalStorage();
                break;
            }
        }
    }

    deteteCompletedTodo() {
        this.tasks = this.tasks.filter(t => !t.completed );
        this.saveTodoLocalStorage();
    }
    

    saveTodoLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.tasks));
    }

    loadTodoLocalStorage() { 
        
        // if (localStorage.getItem('todos')) {
        //     this.tasks = JSON.parse(localStorage.getItem('todos'));
        // } else {
        //     this.tasks = []
        // }

        // this.tasks = JSON.parse(localStorage.getItem('todos') || '[]');

        const tasks = (localStorage.getItem('todos') != null) ? JSON.parse(localStorage.getItem('todos')) : [];

        // this.tasks = tasks.map(todo => Todo.fromJSON(todo) );
        this.tasks = tasks.map(Todo.fromJSON);
    }

}