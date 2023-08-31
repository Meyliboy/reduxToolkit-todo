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
      // const todo = state.todos.find((todo) => todo.id === action.payload);
      // if (todo) {
      //   todo.completed = !todo.completed;
      // }

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
    handleEdit: (state, action) => {},
    updateTodo: (state, action) => {
      const todoList = localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.description = action.payload.description;
          }
        });
        localStorage.getItem("todoList", JSON.stringify(todoListArr));
        state.todos = [...todoListArr];
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
