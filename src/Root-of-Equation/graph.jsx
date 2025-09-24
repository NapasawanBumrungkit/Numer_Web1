import { useState } from "react";

function Graph() {
  const [funcG, setFuncG] = useState("43*x - 180");     
  const [XS, setXS] = useState(0);            
  const [XE, setXE] = useState(10);           
  const [step, setStep] = useState(0.000001);        
  const [tolG, setTolG] = useState([]);       

  const calculateG = () => {
    let f;
    try {
      f = new Function("x", `return ${funcG}`);
    } catch {
      alert("Func invalid!!");
      return;
    }

    let x = XS;
    let found = [];
    while (x <= XE) {   
      if (f(x) * f(x + step) <= 0) {
        found.push(x);  
      }
      x += step;
    }
    setTolG(found);
  };

  return (
    <>
      <h1>Graphical Methods</h1>
      <div className="input-section">
        <label>
          Function f(x):
          <input
            value={funcG}
            onChange={(e) => setFuncG(e.target.value)}
          />
        </label>
        <label>
          X start:
          <input
            type="number"
            value={XS}
            onChange={(e) => setXS(Number(e.target.value))}
          />
        </label>
        <label>
          X end:
          <input
            type="number"
            value={XE}
            onChange={(e) => setXE(Number(e.target.value))}
          />
        </label>
        <label>
          Step:
          <input
            type="number"
            value={step}
            step="0.000001"
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
        <button onClick={calculateG}>Calculate</button>
      </div>
      {tolG.length > 0 && (
        <div>
          <h2>Roots:</h2>
          <ul>
            {tolG.map((r, idx) => (
              <li key={idx}>{r.toFixed(6)}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Graph;
