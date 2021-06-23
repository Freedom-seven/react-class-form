import ClassForm from "./Components/ClassForm/ClassForm";
import FunctionForm from "./Components/FunctionForm/FunctionForm";


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

      <FunctionForm />
    </>
  );
}

export default App;
