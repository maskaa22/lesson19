import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Todo from "../todo/Todo";

export default function Todos ()
{
    const dispatch = useDispatch();
    const fetchTodos = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/todos'))).json())
        dispatch({
            type:'SET_TODOS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchTodos()
    },[])
    const todos = useSelector(({todos})=>todos);
    return(
        <div>
            {
                todos.map(val=><Todo key={val.id} item={val}/>)
            }
        </div>
    );
}