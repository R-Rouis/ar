import Bar from "./components/bar/Bar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import ContactUs from "./components/contact/ContactUs";
import About from "./pages/about/About";
import Admin from './pages/admin/Admin'


function App() {
  const { user } = useContext(Context);
  return (

   
    <Router>
      <Bar />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/register">{user ? <Home /> : <Register />}</Route>
        <Route exact path="/login">{user ? <Home /> : <Login />}</Route>
        <Route exact path="/write">{user ? <Write /> : <Register />}</Route>
        <Route exact path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route exact path="/post/:postId">
          {user ?  <Single /> : <Login />}
        </Route>
        <Route exact path = "/admin" component={Admin} ></Route>
        <Route exact path = "/contactus" >{user ? <ContactUs /> : <Register />}</Route>
        <Route exact path = "/about" ><About/></Route>
      </Switch>
    </Router>
  );
}

export default App;