import React, { useEffect, useState } from "react";

export const List = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });

    fetch("http://localhost:3010/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log(todo.id);
                      fetch(`http://localhost:3010/todos/1`, {
                        method: "DELETE",
                      }).then(() => {
                        fetch("http://localhost:3010/todos")
                          .then((response) => response.json())
                          .then((data) => {
                            setTodos(data);
                          });
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// export const List = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   useEffect(() => {
//     console.log("Komponent lista się zamontował");
//   }, []);
//   /*
//     jeżeli drugi parametr to pusta tablica to funckja z pierwszego parametru
//     wywoała się tylko raz po zamontowaniu komponentu

//   */

//   useEffect(() => {
//     console.log("Komponent lista się zamontował");
//     console.log("Komponent się przerenderował");
//   }, [counter1, counter2]);

//   return (
//     <div>
//       <div>
//         <h2>{counter1}</h2>
//         <button onClick={() => setCounter1(counter1 + 1)}>+1</button>
//       </div>
//       <div>
//         <h2>{counter2}</h2>
//         <button onClick={() => setCounter2(counter2 + 1)}>+1</button>
//       </div>
//     </div>
//   );
// };
