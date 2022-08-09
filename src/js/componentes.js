import { todoList } from '../index';
import { Todo } from '../js/classes/index';

// Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const inputNewTodo = document.querySelector('.new-todo');
const btnClearCompleted = document.querySelector('button.clear-completed');
const ulFilters = document.querySelector('ul.filters');
const filterLinks = document.querySelectorAll('a.filtro');

export const createTodoHTML = (todo)  => {

    // todo.completed = true;
    const htmlTodo = `
                     <li class="${ (todo.completed) ? 'completed': '' }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : '' } >
							<label>${todo.task}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
                    `;

    // ONE WAY TO DO THIS:
    // const div = document.createElement('div');
    // div.innerHTML = htmlTodo;
    // divTodoList.append(div.firstElementChild);
    // return div.firstElementChild;

    // ANOTHER WAY TO DO THIS:
    divTodoList.innerHTML += htmlTodo;
    return htmlTodo;
    
}


// Events
inputNewTodo.addEventListener('keyup', (event) => {

    const { keyCode } = event;
    const { value } = event.target;
    console.log({value, keyCode});
    
    if ( keyCode === 13 && value.trim() !== '' ) {  // Enter
        const newTodo = new Todo(value);
        todoList.newTodo(newTodo);
        createTodoHTML(newTodo);
        inputNewTodo.value = '';
    }

});

divTodoList.addEventListener('click', (event) => {

    const name = event.target.localName; // label | input | button
    const todoLiElem = event.target.parentElement.parentElement;
    const todoId = todoLiElem.getAttribute('data-id');

    console.log(todoLiElem);
    console.log(todoId);

    if ( name.includes('input') ) {
        todoList.completeTodo(todoId);
        todoLiElem.classList.toggle('completed');
    } else if( name.includes('button') ) {
        todoList.completeTodo(todoId);
        divTodoList.removeChild(todoLiElem);
    }

    console.log(todoList);

});

btnClearCompleted.addEventListener('click', (event) => {

    todoList.deteteCompletedTodo();

    const completedList = document.querySelectorAll('li.completed');
    for( const li of completedList ) {
        li.remove();
    }

});

ulFilters.addEventListener('click', (event) => {
    // console.log(event.target.localName);

    const filter = event.target.text;

    if (!filter) { return; }

    filterLinks.forEach( (filter) => {
        filter.classList.remove('selected');
    });
    event.target.classList.add('selected');

    for( const el of divTodoList.children ) {

        el.classList.remove('hidden');
        const completed = el.classList.contains('completed');

        // Todos
        // Pendientes
        // Completados

        switch (filter) {
            case 'Pendientes':
                if (completed) {
                    el.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completed) {
                    el.classList.add('hidden');
                }
                break;
            default:
                break;
        }

    }

});