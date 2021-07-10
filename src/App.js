import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {useState} from "react";

const SomeNestedChildComponent =()=> {
    const counter = useSelector(({counterValue})=>counterValue);
    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}
const SomeChildComponent =()=>{
    return (<SomeNestedChildComponent/>)
};
function App()
{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
  return (
    <div>

        <button onClick={()=>{
            dispatch({type:'INC'});
        }}>inc</button>

        <button onClick={()=>{
            dispatch({type:'DEC'});
        }}>dec</button>

        <button onClick={()=>{
            dispatch({type:'RESET'});
        }}>res</button>


        <input id="elem" type="text" onChange={e=>setTitle(e.target.value)}/>
        <button onClick={()=>{
            dispatch({
                type:'INC_CASTOM',
                payload: Number(title)
            });
        }}>inc_cast</button>

      <SomeChildComponent/>
    </div>
  );
}

export default App;
