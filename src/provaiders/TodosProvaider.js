import React, {createContext, useState} from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState(null);
  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodo: text => {
          const newArr = todos ? todos : [];
          newArr.push({key: Date.now(), text});
          setTodos(newArr);
        },
        deleteTodo: key => {
          const newData = [...todos];
          const prevIndex = todos.findIndex(item => item.key === key);
          newData.splice(prevIndex, 1);
          newData.length ? setTodos(newData) : setTodos(null);
        },
      }}>
      {children}
    </TodosContext.Provider>
  );
};
