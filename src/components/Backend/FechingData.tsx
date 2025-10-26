import axios from "axios";
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

  //we will iuse the Effect hook to call the server!
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users") //This method returns a Promise->An object that holds the eventual result or failure of an asynchronous operation. asynchronous is just an operation that might take a long time
      .then((response) => setUsers(response.data)); //calback function that will be executed when the promise is resolve and ready
  }, []);

  return (
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;

//.then((response) => console.log(response.data[0].name));
