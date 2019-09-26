import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Experience from './components/Pages/Experience';
import Resume from './components/Pages/Resume';
import Gallery from './components/Pages/Gallery';
import Contact from './components/Pages/Contact';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';



class App extends Component {
  state = {
    sideDrawerOpen: false 
  };

  drawerToggleClickHandler = () => {
    this.setState ((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render(){
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      
      <div style={{height:'100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
          
      <main style={{marginTop: '64px'}}>
      <Router>
      <Route exact path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/experience" component={Experience} />
      <Route  path="/resume" component={Resume} />
      <Route  path="/gallery" component={Gallery} />
      <Route  path="/contact" component={Contact} />
     </Router>
      </main>
      </div>
      
    );
  }
}

export default App;
