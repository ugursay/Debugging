import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [sinav1, setSinav1] = useState(0);
  const [sinav2, setSinav2] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  const topla = () => {
    const toplam = sinav1 + sinav2;
    return toplam;
  };

  const Ortalama = () => {
    debugger;
    const ortalamabul = topla() / 2;
    yazdir(ortalamabul);
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortalama " + sonuc);
    setSonuc("Ortalama = " + sonuc);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={sinav1}
          onChange={(a) => setSinav1(Number(a.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={sinav2}
          onChange={(e) => setSinav2(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={Ortalama}>Ortalama bul</button>
      </div>
      <div>
        <button>{sonuc}</button>
      </div>
    </div>
  );
}

export default App;
