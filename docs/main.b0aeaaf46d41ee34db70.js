(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.d({},{L:()=>m});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=(new Date).getTime(),this.task=e,this.completed=!1,this.createdAt=new Date}var n,o,r;return n=t,r=[{key:"fromJSON",value:function(e){var n=e.id,o=e.task,r=e.completed,a=e.createdAt,i=new t(o);return i.id=n,i.completed=r,i.createdAt=a,i}}],(o=[{key:"printTODO",value:function(){console.log("======= id: ".concat(this.id," - task: ").concat(this.task))}}])&&e(n.prototype,o),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tasks=[]}var e,r,i;return e=t,(r=[{key:"newTodo",value:function(t){this.tasks.push(t),this.saveTodoLocalStorage()}},{key:"deleteTodo",value:function(t){this.tasks=this.tasks.filter((function(e){return e.id!=t})),this.saveTodoLocalStorage()}},{key:"completeTodo",value:function(t){var e,n=o(this.tasks);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.id==t){r.completed=!r.completed,this.saveTodoLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"deteteCompletedTodo",value:function(){this.tasks=this.tasks.filter((function(t){return!t.completed})),this.saveTodoLocalStorage()}},{key:"saveTodoLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.tasks))}},{key:"loadTodoLocalStorage",value:function(){var t=null!=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];this.tasks=t.map(n.fromJSON)}}])&&a(e.prototype,r),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector("button.clear-completed"),f=document.querySelector("ul.filters"),v=document.querySelectorAll("a.filtro"),y=function(t){var e='\n                     <li class="'.concat(t.completed?"completed":"",'" data-id="').concat(t.id,'">\n\t\t\t\t\t\t<div class="view">\n\t\t\t\t\t\t\t<input class="toggle" type="checkbox" ').concat(t.completed?"checked":""," >\n\t\t\t\t\t\t\t<label>").concat(t.task,'</label>\n\t\t\t\t\t\t\t<button class="destroy"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class="edit" value="Create a TodoMVC template">\n\t\t\t\t\t</li>\n                    ');return s.innerHTML+=e,e};u.addEventListener("keyup",(function(t){var e=t.keyCode,o=t.target.value;if(console.log({value:o,keyCode:e}),13===e&&""!==o.trim()){var r=new n(o);m.newTodo(r),y(r),u.value=""}})),s.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,o=n.getAttribute("data-id");console.log(n),console.log(o),e.includes("input")?(m.completeTodo(o),n.classList.toggle("completed")):e.includes("button")&&(m.completeTodo(o),s.removeChild(n)),console.log(m)})),d.addEventListener("click",(function(t){m.deteteCompletedTodo();var e,n=l(document.querySelectorAll("li.completed"));try{for(n.s();!(e=n.n()).done;){e.value.remove()}}catch(t){n.e(t)}finally{n.f()}})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){v.forEach((function(t){t.classList.remove("selected")})),t.target.classList.add("selected");var n,o=l(s.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(e){case"Pendientes":a&&r.classList.add("hidden");break;case"Completados":a||r.classList.add("hidden")}}}catch(t){o.e(t)}finally{o.f()}}}));var m=new i;m.loadTodoLocalStorage(),m.tasks.forEach(y)})();