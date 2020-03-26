import React from 'react';
import classes from './css/App.module.sass'
import Main from './components/pages/Main/Main'
import Draver from './components/UI/Draver/Draver'
import Fade from './components/UI/Fade/Fade'
import Results from './components/pages/Results/Results'
import {Route, Switch} from 'react-router-dom'
import TestCreator from './components/pages/TestCreator/TestCreator';

class App extends React.Component {
  state = {
    balckTheme: false,
    openAdm: false,
    isAdmin: false,
  } 

  changeTheme = () => {
    let balckTheme = this.state.balckTheme;

    this.setState({balckTheme: !balckTheme})
  }

  openDrawer = () => {
    let openAdm = this.state.openAdm
    this.setState({openAdm: !openAdm})
  }

  isAdmin = () => {
    this.setState({isAdmin: true})
  }

  render () {
    const cls = [classes.App, this.state.balckTheme?classes.dark:null]

    return (
    <div className={cls.join(' ')}>
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
         balckTheme={this.state.balckTheme} 
         isAdmin={this.state.isAdmin}
         linkProps={props}
         />} />


        <Route path='/TestCreator'
         render={(props) => 
         <TestCreator 
         balckTheme={this.state.balckTheme} 
         isAdmin={this.state.isAdmin}
         linkProps={props}
         />} />

        <Route path='/' render={(props) => 
        <Main balckTheme={this.state.balckTheme}> 
        <Draver 
        openAdm={this.state.openAdm} 
        balckTheme={this.state.balckTheme} 
        openDrawer={this.openDrawer}
        isAdmin={this.isAdmin}
        linkProps={props}
      />
        </Main>}/>
      </Switch>
     <a href='https://t.me/vsumskiy' target='_blanc'> <i className="fab fa-telegram-plane"></i> </a>
    </div>
    )
  };
}

export default App;




