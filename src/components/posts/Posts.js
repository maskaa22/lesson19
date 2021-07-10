import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Post from "../post/Post";

export default function Posts ()
{
    const dispatch = useDispatch();
    const fetchPosts = async ()=> {
        const data = await ((await (fetch('https://jsonplaceholder.typicode.com/posts'))).json())
        dispatch({
            type:'SET_POSTS',
            payload: data
        })
    }
    useEffect(()=>{
        fetchPosts()
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