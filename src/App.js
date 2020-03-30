import React from 'react';
import classes from './css/App.module.sass'
import Main from './components/pages/Main/Main'
import Drawer from './components/UI/Drawer/Drawer'
import Fade from './components/UI/Fade/Fade'
import Results from './components/pages/Results/Results'
import {Route, Switch} from 'react-router-dom'
import { CustomAlert } from './components/UI/CustomAlert/CustomAlert'
import TestCreator from './components/pages/TestCreator/TestCreator';
import Auth from './components/Auth/Auth'
import NavBar from './components/UI/NavBar/NavBar'
import RemoveTest from './components/pages/RemoveTest/RemoveTest'

class App extends React.Component {
  state = {
    blackTheme: false,
    openAdm: false,
    isAdmin: false,
    alertOptions: {
      alert: false,
      auth: false,
      titleError: '',
      type: ''
    }
  } 

  componentDidMount = () => {
    const blackTheme = localStorage.getItem('theme')
    
    this.setState({blackTheme: !!blackTheme})
  }

  //Save theme in localStorage
  changeTheme = () => {
    let blackTheme = this.state.blackTheme;
    if (blackTheme) {
      localStorage.setItem('theme', '')
    } else {
      localStorage.setItem('theme', true)
    }
    this.setState({blackTheme: !blackTheme})
  }

  openDrawer = () => {
    let openAdm = this.state.openAdm
    this.setState({openAdm: !openAdm})
  }

  isAdmin = () => {
    this.setState({isAdmin: true})
  }

  //options fro custom alert
  showAlert = (auth,titleError, type) => {
    let alert = this.state.alertOptions.alert
    let alertOptions = {
      alert: !alert,
      auth,
      titleError, 
      type
    }
    this.setState({alertOptions})
  }


  //render drawer content, if isAdmin === true, show NavBdr, else Auth
  renderAuth = () => {
    return  <Auth 
    showAlert={this.showAlert}
    isAdmin={this.isAdmin} 
    blackTheme={this.state.blackTheme}
    />
  }

  renderNav = () => {
    return <NavBar 
    showAlert={this.showAlert}
    openDrawer={ this.openDrawer}
    isAdmin={this.state.isAdmin} 
    blackTheme={this.state.blackTheme}
    />
  }

  render () {
    const cls = [classes.App, this.state.blackTheme?classes.dark:null]
    return (
      
    <div className={cls.join(' ')}>
    {this.state.alertOptions.alert //showing alert, when this options true, using in lot of components
      ?<CustomAlert 
        titleError={this.state.alertOptions.titleError}
        auth={this.state.alertOptions.auth}
        showAlert={this.showAlert}
        type={this.state.alertOptions.type}/>
      :null}
      <h2>Philips Test</h2>
      <button className={classes.chanage}
       onClick={this.changeTheme} >
        <i className={'fas fa-adjust'} />
      </button>
      {this.state.openAdm // if auth event click on btn in drawer, drawer will show 
      ?<Fade openDrawer={this.openDrawer}>
      </Fade>:null}

      <Switch>
        <Route path='/0936139517results2020'
         render={(props) => 
         <Results 
         blackTheme={this.state.blackTheme} 
         isAdmin={this.state.isAdmin}
         linkProps={props}
         showAlert={this.showAlert}
         />} />

        <Route path='/TestCreator'
         render={(props) => 
         <TestCreator 
         blackTheme={this.state.blackTheme} 
         isAdmin={this.state.isAdmin}
         linkProps={props}
         showAlert={this.showAlert}
         />} />

         <Route path='/RemoveTest' 
         render={(props) => 
          <RemoveTest 
            blackTheme={this.state.blackTheme} 
            isAdmin={this.state.isAdmin}
            linkProps={props}
            showAlert={this.showAlert}
          />  
        }
         />

        <Route path='/' render={(props) => 
        <Main 
        blackTheme={this.state.blackTheme}
        showAlert={this.showAlert}
          > 
        </Main>}/>
        
      </Switch>

      {<Drawer
            openAdm={this.state.openAdm} 
            openDrawer={this.openDrawer}
            isAdmin={this.isAdmin}
            showAlert={this.showAlert}
            >
            {this.state.isAdmin
            ?this.renderNav()
            :this.renderAuth()}
          </Drawer>}
     <a href='https://t.me/vsumskiy' target='_blanc'> <i className="fab fa-telegram-plane"></i> </a>
    </div>
    )
  };
}

export default App;




