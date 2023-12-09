/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoItem = [];
  }

  add(item) {
    this.todoItem.push(item);
  }
  remove(index) {
    this.todoItem.splice(index, 1);
  }
  update(index, updateTodoElement) {
    if (this.todoItem.length > index) {
      this.todoItem[index] = updateTodoElement;
    }
  }
  getAll() {
    return this.todoItem;
  }
  get(index) {
    if (this.todoItem.length > index) {
      return this.todoItem[index];
    } else {
      return null;
    }
  }
  clear() {
    this.todoItem = [];
  }
}

module.exports = Todo;
