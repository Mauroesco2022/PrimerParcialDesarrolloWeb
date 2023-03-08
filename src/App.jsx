import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./Componets/Loterias";

export const App = () => {
  const [categories, setCategories] = useState(0);

  const [value, Setvalue] = useState(3);
  const [name, Setname] = useState(0);
  const [Valor, Setvalor] = useState(0);

  const Recorrer = () => {
    let chontico = { nombreP: name, valueP: value, valorP: Valor };
  };

  return (
    <div>
      <select name="select" onChange={(e) => Setname(e.target.value)}>
        <option value="value1">xy</option>
        <option value="value2">xz</option>
        <option value="value3">ab</option>
      </select>

      <label for="name">Numero chontico: </label>
      <input
        onChange={(e) => Setvalue(e.target.value)}
        type="text"
        name="name"
        required
        minlength="3"
        maxlength="4"
      />

      <label for="name">Valor chontico: </label>
      <input
        type="number"
        name="name"
        onChange={(e) => Setvalor(e.target.value)}
      />
      <br />
      <button on>Comprar</button>
    </div>
  );
};

export default App;
