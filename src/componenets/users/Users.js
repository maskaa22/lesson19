import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../servises/UsersApi";
import User from "../user/User";

export default function Users ()
{
    const dispatch = useDispatch();
    useEffect(()=>{
        getUsers().then(value => {
            dispatch({
                type:'SET_USERS',
                payload: value.data
            })
        })
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