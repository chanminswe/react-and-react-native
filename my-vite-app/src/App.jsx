import "./App.css";
import WelcomeMessage from "./WelcomeMessage";
import ClickButton from "./ClickButton";
import { SayHello, SayGoodbye } from "./ClickButton";

function LoggedIn() {
  return (
    <div>
      <h3>The user has logged in </h3>
    </div>
  );
}

function LoggedOut() {
  return (
    <div>
      <h3>The user has not logged in </h3>
    </div>
  );
}

function App() {
  const login = true;

          //if login ? true : false 
  return <div>{login ? <LoggedIn /> : <LoggedOut />}</div>;


  //  false and true 
  //login && <LoggedIn />
}

export default App;
