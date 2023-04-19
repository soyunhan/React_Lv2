const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";
const CHANGE_TODOLIST = "CHANGE_TODOLIST";
const GO_DETAIL = "GO_DETAIL";


export const addTodo = (payload) => {
  return { type: ADD_TODOLIST, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODOLIST, id: payload };
};

export const changeTodo = (payload) => {
  return { type: CHANGE_TODOLIST, id: payload };
};

export const goDetail = (id) => {
  return {
    type: GO_DETAIL,
    id: id,
  };
};

const initialState = {
  todos: [
    {
      id: 0,
      title: "work",
      content: "휴..",
      isDone: false,
    },
    {
      id: 1,
      title: "Done",
      content: "아이고",
      isDone: true,
    },
  ],
  todo: {
    id: 1,
    title: "title",
    content: "content",
    isDone: true,
  },
};

function todos(state = initialState, action) {
  console.log(action); 
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== parseInt(action.id)),
      };
    case CHANGE_TODOLIST:
      state.todos.map((item, i, arr) => {
        if (item.id === action.id) {
          arr[i].isDone ? (arr[i].isDone = false) : (arr[i].isDone = true);
        }
      });
      return {
        ...state,
        todos: [...state.todos],
      };
    case GO_DETAIL:
      const [selTodo] = state.todos.filter((item) => {
        return item.id === action.id;
      });
      return { ...state, todo: selTodo };

    default: // need this for default case
      return state;
  }
}

export default todos;

