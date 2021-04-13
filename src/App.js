import * as React from "react";
import "./App.css";

import FormFunction from "./components/formFuntion";

export const MyContext = React.createContext();

function App() {
  const [count, setCount] = React.useState(15);
  return (
    <div>
      hola mundo
      <MyContext.Provider value={{ count, setCount: setCount }}>
        <FormFunction />
      </MyContext.Provider>
    </div>
  );
}

export default App;
