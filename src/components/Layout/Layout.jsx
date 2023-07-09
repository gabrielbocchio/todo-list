import React, { useState, useEffect } from "react";
import { generateRandomId } from "../../utils/utils";
import Form from "../Form/Form";
import List from "../List/List";
import TasksRemaining from "../Remaining/TasksRemaining";
import Clear from "../Clear/Clear";
import "./layout.css"

const Layout = () => {
  //Controllo se ci sono task nel localstorage
  const taskStoraged = localStorage.getItem("task");
  const initialList =  taskStoraged ? JSON.parse(taskStoraged): [];

  // States
  const [list, setList] = useState(initialList);
  const [newItem, setNewItem] = useState("");
  const [validationError, setValidationError] = useState("")

  // Salvare nella localstorage
  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(list))
  }, [list])

  // Aggiunge un nuovo elemento alla lista
  const addItem = (e) => {
    e.preventDefault();
    if(newItem.length >= 3 ){
        setList([...list, { id: generateRandomId(), text: newItem, completed: false }]);
        setNewItem("");
        setValidationError("");
    }else {
      setValidationError("Tasks should have more than 3 characters.");
    }
  };

  // Cambia lo stato di completamento di un elemento
  const toggleCompleted = (itemId) => {
    const updatedItems = list.map((el) => {
      if (el.id === itemId) {
        return { ...el, completed: !el.completed};
      }
      return el;
    });
    setList(updatedItems);
  };

  // Rimuove un elemento dalla lista
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="container">
      <h2 className="title">Todo List</h2>
      {/* Form per aggiungere un nuovo elemento */}
      <Form 
        setNewItem={setNewItem} 
        addItem={addItem} 
        newItem={newItem}
        validationError={validationError}
      />
      <List 
        list={list} 
        toggleCompleted={toggleCompleted}  
        removeItem={removeItem}
      />
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <TasksRemaining 
        list={list} 
      />
      <Clear 
        setList={setList}
      />
      </div>
    </div>
  );
}

export default Layout;


