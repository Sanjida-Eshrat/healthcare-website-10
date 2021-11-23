import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Trainers from './Pages/Home/Trainers/Trainers';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/trainers'>
                <Trainers></Trainers>
              </Route>
              {/* <PrivateRoute path='/details/:id'>
                <Details></Details>
              </PrivateRoute> */}
              <Route path='/details/:id'>
                <Details></Details>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>      
    </div>
  );
}

export default App;
