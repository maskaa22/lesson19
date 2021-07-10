import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import './App.css';
import Users from "./componenets/users/Users";
import Posts from "./componenets/posts/Posts";
import Comments from "./componenets/comments/Comments";



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

            <Switch>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/comments'} component={Comments}/>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
