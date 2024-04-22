import React from "react";
import { useState } from "react";
import { generatered } from "../utils";

const TodoList = () => {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState("");

	const addTodo = () => {
		if (input.trim() !== "") {
			const newTodo = {
				todo: input,
				id: generatered(),
				completed: false,
			};
			setTodo((prev) => [...prev, newTodo]);
			setInput("");
		}
	};

	const deleteTodo = (id) => {
		setTodo((prev) => prev.filter((item) => item.id !== id));
	};
	const handeleCheckboxChange = (id) => {
		setTodo((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	};

	const handeleCompletedAll = () => {
		setTodo((prev) =>
			prev.map((item) => ({
				...item,
				completed: true,
			}))
		);
	};
	const handeleUncpmpleteAll = () => {
		setTodo((prev) =>
			prev.map((item) => ({
				...item,
				completed: false,
			}))
		);
	};
  const handeleDeleteAll = () => {
    setTodo([])
  }
	return (
    <div className="div">
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={addTodo}> Add Task</button>
    <button onClick={handeleCompletedAll}> Completed </button>
    <button onClick={handeleUncpmpleteAll}>Un Completed</button>
    <button onClick={handeleDeleteAll}>Delete All</button>

    {todo.map((item) => (
      <div key={item.id}>
        <p style={{textDecoration:item.completed ? "line-through" : "none"}}>{item.todo}</p>
        <input className="input" type="checkbox" checked={item.completed} onChange={() => handeleCheckboxChange(item.id)} />
        <button onClick={()=> deleteTodo(item.id)}>Delete</button>
      </div>
    ))}
  </div>
  )
};

export default TodoList;
