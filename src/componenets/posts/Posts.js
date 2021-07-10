import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../servises/PostApi";
import Post from "../post/Post";

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
    const posts = useSelector(({posts})=>posts);
    return(
        <div>
            {
                posts.map(post=> <Post key={post.id} item={post}/>)
            }
        </div>
    );
}