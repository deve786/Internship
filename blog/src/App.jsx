import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact element="/">
          <Homepage />
        </Route>
        <Route element="/posts">
          <Homepage />
        </Route>
        <Route element="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route element="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route element="/post/:id">
          <Single />
        </Route>
        <Route element="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route element="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
