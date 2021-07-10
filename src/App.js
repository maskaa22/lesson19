import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import Posts from "./components/posts/Posts";

const SomeNestedChildComponent =()=> {
    //const counter = useSelector(({counterValue})=>counterValue);
    const posts = useSelector(({posts})=>posts);
    return (
        <div>
            {/*<h1>{counter}</h1>*/}
            {
                posts.map(post=>{
                    return (
                    <div key={post.id}>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                )})
            }
        </div>
    )
}
const SomeChildComponent =()=>{
    return (<SomeNestedChildComponent/>)
};
function App()
{
//     const dispatch = useDispatch();
//     //const [title, setTitle] = useState('');
// const fetchPosts = async ()=> {
//     const data = await ((await (fetch('https://jsonplaceholder.typicode.com/posts'))).json())
//     dispatch({
//         type:'SET_POSTS',
//         payload: data
//     })
// }
//     useEffect(()=>{
//         fetchPosts()
//     },[])

  return (
    <div>
        <div>
            {/*<button onClick={()=>{*/}
            {/*    dispatch({type:'INC'});*/}
            {/*}}>inc</button>*/}

            {/*<button onClick={()=>{*/}
            {/*    dispatch({type:'DEC'});*/}
            {/*}}>dec</button>*/}

            {/*<button onClick={()=>{*/}
            {/*    dispatch({type:'RESET'});*/}
            {/*}}>res</button>*/}


            {/*<input id="elem" type="text" onChange={e=>setTitle(e.target.value)}/>*/}
            {/*<button onClick={()=>{*/}
            {/*    dispatch({*/}
            {/*        type:'INC_CASTOM',*/}
            {/*        payload: Number(title)*/}
            {/*    });*/}
            {/*}}>inc_cast</button>*/}</div>
        <Router>
            <div>
                <Link to={'/posts'}>Post page</Link>
            </div>
            <Switch>

                <Route path={'/posts'} component={Posts}/>

            </Switch>
        </Router>

      <SomeChildComponent/>
    </div>
  );
}

export default App;
