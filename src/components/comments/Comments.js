import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Comment from "../comment/Comment";

export default function Comments ()
{
    const dispatch = useDispatch();
    const fetchComments = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/comments'))).json())
        dispatch({
            type:'SET_COMMENTS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchComments()
    },[])
    const comments = useSelector(({comments})=>comments);
    return(
        <div>
            {
                comments.map(val=><Comment key={val.id} item={val}/>)
            }
        </div>
    );
}