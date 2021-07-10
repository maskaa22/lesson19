import {useSelector, useDispatch} from "react-redux";
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import Posts from "./components/posts/Posts";


function App()
{

  return (
    <div>
        <Router>
            <div>
                <Link to={'/posts'}>Post page</Link>
            </div>
            <Switch>

                <Route path={'/posts'} component={Posts}/>

            </Switch>
        </Router>


    </div>
  );
}

export default App;
