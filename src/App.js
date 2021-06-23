import ClassForm from "./Components/ClassForm/ClassForm";
import FunctionForm from "./Components/FunctionForm/FunctionForm";
import './App.css'

function App() {
  return (
    <>
      <ClassForm 
        name={"Jane Doe"}
        email={"example@gmail.com"}
        password={"Password12"}
      />
      <br /> <br />
      <hr />

      <FunctionForm
        name={"John Doe"}
        email={"example@icloud.com"}
        password={"Password34"}
      />
    </>
  );
}

export default App;
