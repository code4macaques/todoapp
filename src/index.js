import { Todo, TodoList } from './js/classes';
import { createTodoHTML } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();


// DATA DUMMY
// const task = new Todo('Learn JavaScript');
// const task2 = new Todo('Buy an Unicorn');
// todoList.newTodo(task);
// todoList.newTodo(task2);
// console.log({todoList});
// createTodoHTML(task);


todoList.loadTodoLocalStorage();

// for( const todo of todoList.tasks) {
//     createTodoHTML(todo);
// }

// todoList.tasks.forEach(todo => createTodoHTML(todo));
todoList.tasks.forEach(createTodoHTML);

// const todoTemp = Todo.fromJSON(todoList.tasks[0]); 
// todoTemp.printTODO();


// todoList.tasks.forEach(todo => todo.printTODO()) ;


