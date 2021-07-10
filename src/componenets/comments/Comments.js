import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../servises/PostApi";
import {getComments} from "../../servises/CommentsApi";
import Comment from "../comment/Comment";

export default function Comments ()
{
    const dispatch = useDispatch();
    useEffect(()=>{
        getComments().then(value => {
            dispatch({
                type:'SET_COMMENTS',
                payload: value.data
            })
        })
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