import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './Assets/css/bootstrap.css';
import "./Assets/vendors/linericon/style.css"
import "./Assets/css/font-awesome.min.css"
import "./Assets/css/themify-icons.css"
import "./Assets/css/flaticon.css"
import "./Assets/vendors/owl-carousel/owl.carousel.min.css"
import "./Assets/vendors/lightbox/simpleLightbox.css"
import "./Assets/vendors/nice-select/css/nice-select.css"
import "./Assets/vendors/animate-css/animate.css"
import "./Assets/vendors/jquery-ui/jquery-ui.css"
import "./Assets/css/style.css"
import "./Assets/css/responsive.css"
import Home from './Pages/Commons/Home';
import Header from './Pages/Commons/Header';
import Footer from './Pages/Commons/Footer';

const Routing = props => (
  <div>
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/users" component={User} /> */}
      {/* <Route path="/login" component={Login} /> */}
    </Switch>
  </div>
)

function App() {
  return (
    <Router>
      {/* <SideNav/> */}
        <Header />
        <Home />
        <Routing/>
        <Footer/>
    </Router>
  );
}

export default App;
