import { useState } from 'react'
import TodoItem from "./item";

const Lista = ({todos, actions}) => {
  const [done, setTaskAsDone] = useState(false)
  return (
    <>
      {todos.map((item, i) => (
        <TodoItem
        key={i} 
        text={item.text}
        status={item.status}
        remove={() => actions.remove(item.id)}
        update={() => actions.update(item.id)} 
        mark={() => setTaskAsDone(item.status)}
        />
      ))}
    </>
  );
};
  


export default Lista