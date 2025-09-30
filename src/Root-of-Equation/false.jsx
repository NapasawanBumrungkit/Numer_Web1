import { useState } from "react";
import Plot from "react-plotly.js";

function False (){
    const[funcf, setFuncF] = useState("x**4 -13");
    const[xlf, setXlF] = useState(1.5);
    const[xrf, setXrF] = useState(2.0);
    const[errorf, setErrorF] = useState(0.000001);
    const[tolf, setTolF] = useState([]);
    const[finalx1, setFinalX1] = useState(null);
    const[interationf, setIterationF] = useState(0);

    const calculatF = () => {
        let f;
        try{
            f = new Function("x", `return ${funcf}`);
        }catch{
            alert("Function invalid!!");
            return;
        }

        let xlF = xlf;
        let xrF = xrf;
        let x1 = 0;
        let x1_old = null;
        let errorF = 1.0;
        let tolf = errorf;
        let iterf = 0;
        let resultsf = [];




    }

    return (
        <>
            <h1>False Position Method</h1>
        </>
    )
}
export default False;