import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../servises/PostApi";

export default function Posts ()
{
    const dispatch = useDispatch();
    useEffect(()=>{
        getPosts().then(value => {
            dispatch({
                type:'SET_POSTS',
                payload: value.data
            })
        })
    },[])
    return(
        <div>

        </div>
    );
}