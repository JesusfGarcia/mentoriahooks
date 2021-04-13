import * as React from "react";

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

import { MyContext } from "../../App";

export default function Form() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const myInterval = React.useRef();
  const myInput = React.useRef();

  const { setCount, count } = React.useContext(MyContext);
  const printResult = () => {
    dispatch({ type: actions.toggleLoading });
    setTimeout(() => {
      alert(`Bienvenido ${state.user.name} :D`);
      dispatch({ type: actions.toggleLoading });
    }, 1500);
  };
  const changeElem = (e) => {
    const { id, value } = e.target;
    dispatch({ type: actions.setInput, name: id, payload: value });
  };

  React.useEffect(() => {
    //funcion get que recoja la información

    myInterval.current = setInterval(() => {}, 1000);

    return () => {
      clearInterval(myInterval.current);
    };
  }, []);

  const focusInput = () => {
    console.log(myInput.current);
    myInput.current.focus();
  };

  return (
    <div className="container">
      <div className="form">
        <h1 style={{ color: "white" }}>Contador {count}</h1>
        <label for="name"> Nombre</label>
        <input
          ref={myInput}
          value={state.user.name}
          onChange={changeElem}
          id="name"
        />
        <label for="surname">Apellido</label>
        <input onChange={changeElem} value={state.user.surname} id="surname" />
        <label for="phone">Telefono</label>
        <input onChange={changeElem} value={state.user.phone} id="phone" />
        <label for="email">Correo</label>
        <input onChange={changeElem} value={state.user.email} id="email" />
        <label for="password">Contraseña</label>
        <input
          onChange={changeElem}
          value={state.user.password}
          type="password"
          id="password"
        />
        <button onClick={focusInput}>Focus al nombre</button>
        <button onClick={() => setCount(count + 1)}>
          {state.loading ? "Cargando..." : "Registrame"}
        </button>
      </div>
    </div>
  );
}
