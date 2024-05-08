import "./App.css";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
import Signup from "./pages/Signup";

// const db = getDatabase(app);

function App() {
  // const putData = () => {
  //   set(ref(db, "/users/samir"), {
  //     id: 1,
  //     name: "Samir Singh",
  //     age: 24,
  //   });

  //   set(ref(db, "/users/raju"), {
  //     id: 2,
  //     name: "Raju Yadadv",
  //     age: 23,
  //   });
  // };

  return (
    <div className="App">
      {/* <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button> */}

      <Signup />
    </div>
  );
}

export default App;
