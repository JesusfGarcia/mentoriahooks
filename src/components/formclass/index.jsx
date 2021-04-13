import * as React from "react";

class Form extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      password: "",
      loading: false,
    };
  }

  changeElement = (e) => {
    const { id, value } = e.target;
    this.setState({
      ...this.state,
      [id]: value,
    });
  };

  printResult = () => {
    this.setState({
      ...this.state,
      loading: true,
    });
    setTimeout(() => {
      alert(`Bienvenido ${this.state.name} :D`);
      this.setState({
        ...this.state,
        loading: false,
      });
    }, 1500);
  };
  render() {
    return (
      <div className="container">
        <div className="form">
          <label for="name">Nombre</label>
          <input
            onChange={this.changeElement}
            value={this.state.name}
            id="name"
          />
          <label for="surname">Apellido</label>
          <input
            onChange={this.changeElement}
            value={this.state.surname}
            id="surname"
          />
          <label for="phone">Telefono</label>
          <input
            onChange={this.changeElement}
            value={this.state.phone}
            id="phone"
          />
          <label for="email">Correo</label>
          <input
            onChange={this.changeElement}
            value={this.state.email}
            id="email"
          />
          <label for="password">Contraseña</label>
          <input
            onChange={this.changeElement}
            value={this.state.password}
            type="password"
            id="password"
          />
          <button onClick={this.printResult}>
            {this.state.loading ? "Cargando..." : "Registrarme"}
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
