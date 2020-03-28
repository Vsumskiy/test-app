import React from 'react';
import classes from './css/App.module.sass'
import Main from './components/pages/Main/Main'
import Draver from './components/UI/Draver/Draver'
import Fade from './components/UI/Fade/Fade'
import Results from './components/pages/Results/Results'
import {Route, Switch} from 'react-router-dom'
import { CustomAlert } from './components/UI/CustomAlert/CustomAlert'
import TestCreator from './components/pages/TestCreator/TestCreator';

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

  render () {
    const cls = [classes.App, this.state.blackTheme?classes.dark:null]

    return (
      
    <div className={cls.join(' ')}>
    {this.state.alertOptions.alert
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
      {this.state.openAdm
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

        <Route path='/' render={(props) => 
        <Main 
        blackTheme={this.state.blackTheme}
        showAlert={this.showAlert}
          > 
        <Draver 
        openAdm={this.state.openAdm} 
        blackTheme={this.state.blackTheme} 
        openDrawer={this.openDrawer}
        isAdmin={this.isAdmin}
        linkProps={props}
        showAlert={this.showAlert}
      />
        </Main>}/>
      </Switch>
     <a href='https://t.me/vsumskiy' target='_blanc'> <i className="fab fa-telegram-plane"></i> </a>
    </div>
    )
  };
}

export default App;




