import "./App.css";
import Create from "./components/create";
import Login from "./components/login";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Create />
        <Login />
      </div>
    </UserProvider>
  );
}

export default App;
