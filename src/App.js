
import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Albums from "./components/albums/Albums";
import Photos from "./components/photos/Photos";
import Todos from "./components/todos/Todos";


function App()
{

  return (
    <div>
        <Router>
            <div>
                <Link to={'/posts'}>Post page</Link>
            </div>
            <div>
                <Link to={'/users'}>Users page</Link>
            </div>
            <div>
                <Link to={'/comments'}>Comments page</Link>
            </div>
            <div>
                <Link to={'/albums'}>Albums page</Link>
            </div>
            <div>
                <Link to={'/photos'}>Photos page</Link>
            </div>
            <div>
                <Link to={'/todos'}>Todos page</Link>
            </div>
            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
                <Route path={'/albums'} component={Albums}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/todos'} component={Todos}/>
            </Switch>
        </Router>


    </div>
  );
}

export default App;
