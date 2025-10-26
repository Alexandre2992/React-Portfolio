import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
//We can send an HTTP request to the server using fetch() or axios
//I will use the axios library
//I will also use a fake backend on the JSONPlaceholder website

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  //we will use the Effect hook to call the server!
  useEffect(() => {
    const controller = new AbortController(); //object controller is setted to an instance AbortController, a built in class that allows us to cancel/abort async operations such as fetch requests,DOM manipulations...

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      }) //This method returns a Promise->An object that holds the eventual result or failure of an asynchronous operation. asynchronous is just an operation that might take a long time
      .then((response) => setUsers(response.data)) //then is a method, and we can pass a calback function that will be executed when the promise is resolved and the result is ready, we get a response object and pass that to the function (response)=>...
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      }); //In JS all promisses have a method catch, to chatch errors

    return () => controller.abort(); //returning our clean up function(see EffectCleanUp script demo)
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

//.then((response) => console.log(response.data[0].name));
