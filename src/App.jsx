import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const deleteTodo = (deleteValue) => {
   const updateTodolist = [... todoList.filter((val) => {
      return val.todoName !== deleteValue;
   })];
   setTodoList(updateTodolist);
  }
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]); // Use the spread operator to create a new array
    setTodo("");
  };
 
  return (
    <>
      <div className="mainContainer bg-gray-200 w-full h-screen flex items-center">
        <div className="w-[500px] mx-auto bg-white p-5 text-center">
          <h1 className="text-5xl font-bold mb-8">Todo list</h1>
          <form onSubmit={handleForm}>
            <input
              className="input-field border-2 border-black w-full p-5 mb-5 placeholder: text-gray-500 rounded-lg"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              className="add-button bg-red-600 text-white py-3 px-8 rounded-lg mb-8"
              type="submit"
            >
              Add Todo
            </button>
          </form>
          <div className="todo-show-area">
            <ul>
              {todoList.map((singleTodo, index) => {
                return (
                  <li
                    key={index}
                    className="bg-black flex justify-between text-white py-5 px-5 rounded-lg text-3xl mb-2"
                  >
                    {singleTodo.todoName}
                    {""}

                    <span onClick={() => deleteTodo(singleTodo.todoName)}  className="text-red-600 text-2xl cursor-pointer">
                      x
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
