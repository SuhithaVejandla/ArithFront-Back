import {useState} from 'react';
import './App.css';
import {callAPI} from './assets/callAPI';
import {nodeurl} from './assets/data';
function App() {
const [num1, setNum1] = useState('');
const [num2, setNum2] = useState('');
const [result, setResult] = useState('');
function addnumbers(){
    let method="POST";
    let url=nodeurl+"/add";
    let data={
        num1:Number(num1),
        num2:Number(num2)
    };
   
   callAPI(method,url,data,addHandler);

   function addHandler(response)
   {
    if(response.status==="success")
    {
        setResult(response.result);
    }
    else
    {
        alert(response.message);
    }
   }

}

function subtractnumbers(){
    let method="GET";
    let url=nodeurl+"/subtract/"+Number(num1)+"/"+Number(num2);
    //http://localhost:4433/subtract/10/5
    let data=null;
    callAPI(method,url,data,subtractHandler);

    function subtractHandler(response)
    {
        if(response.status==="success")
        {
            setResult(response.result);
        }
        else
        {
            alert("Error in subtraction");
        }
    }


    
}
return(
    <div>
            <h1>React API Calculator</h1>
            <label>First Number</label>
            <br />
            <input 
                type="number" 
                value={num1} 
                placeholder="Enter first number" 
                onChange={(event) => { setNum1(event.target.value); }}
            />
            <br /><br />
            <label>Second Number</label>
            <br />
            <input
                type="number"
                value={num2}
                placeholder="Enter second number"
                onChange={(event) => { setNum2(event.target.value); }}
            />
            <br /><br />
            <button onClick={addnumbers}>
                Add 
            </button>
            &nbsp;
            <button onClick={subtractnumbers}>
                Subtract 
            </button>
            <br /><br />
            <h2>
                <span style={{ color: 'red' }}>{result}</span>
            </h2>
        </div>
);
}

export default App;