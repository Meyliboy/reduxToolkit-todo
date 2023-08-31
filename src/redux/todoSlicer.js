import { createSlice } from "@reduxjs/toolkit";

function getTodoListFromLocalStorage() {
  const localStorageTodo = localStorage.getItem("todoList");
  if (localStorageTodo) return JSON.parse(localStorageTodo);
  localStorage.setItem("todoList", JSON.stringify([]));
  return [];
}

const initialState = {
  todos: getTodoListFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);

      const todoList = localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...todo });
        localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        localStorage.setItem("todoList", JSON.stringify([{ ...todo }]));
      }
      console.log(JSON.parse(todoList));
    },
    removeTodo: (state, action) => {
      const todoList = localStorage.getItem("todoList");
      let todoListarr = [];
      if (todoList)
        todoListarr = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todoList", JSON.stringify(todoListarr));
      state.todos = todoListarr;
    },
    removeAllTodo: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todoList", JSON.stringify(action.payload));
    },
    toggleTodo: (state, action) => {
      const storeData = JSON.parse(localStorage.getItem("todoList")) || [];
      const resaultData = storeData.map((item) => {
        let completed = item.completed;
        if (item.id === action.payload) {
          if (completed) {
            completed = false;
          } else {
            completed = true;
          }
        }
        return { ...item, completed };
      });
      localStorage.setItem("todoList", JSON.stringify(resaultData));
      state.todos = resaultData;
    },

    updateTodo: (state, action) => {
      const { name, desc } = action.payload.text;
      const { id } = action.payload;
      const newData = JSON.parse(localStorage.getItem("todoList"));
      const todo = newData.find((todo) => todo.id === action.payload.id);
      if (todo) {
        const resaultData = newData.map((item) => {
          if (item.id === id) {
            let text = { name: name, desc: desc };
            return { ...item, text };
          } else {
            return item;
          }
        });
        localStorage.setItem("todoList", JSON.stringify(resaultData));
        state.todos = resaultData;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  removeAllTodo,
  updateTodo,
  handleEdit,
} = todoSlice.actions;
export default todoSlice.reducer;
