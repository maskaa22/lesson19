import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "../user/User";

export default function Users ()
{
    const dispatch = useDispatch();
    const fetchUsers = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/users'))).json())
        dispatch({
            type:'SET_USERS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    const users = useSelector(({users})=>users);
    return(
        <div>
            {
                users.map(val=><User key={val.id} item={val}/>)
            }
        </div>
    );
}