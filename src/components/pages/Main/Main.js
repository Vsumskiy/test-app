import React, { Component } from 'react'
import classes from './Main.module.sass'
import TestList from '../TestList/TestList'
import is from 'is_js'

class Main extends Component {
  state = {
    promuterEnter: false,
    promuterName: '',
    promuterSurname: '',
    promuterEmail: '',
    validateEmail: false,
    alert: false
  }

  startTest = (e) => {
    e.preventDefault()
    const { promuterName, promuterSurname, validateEmail } = this.state;
    if (promuterName.length >= 3 && promuterSurname.length >= 3 && validateEmail) {//!
      this.setState({promuterEnter: true})
    } else {
      this.props.showAlert(null, 'Данні введено не вірно!','error')
    }
  }

  nameHandler = ({ target }) => {
    let promuterName = target.value;
    this.setState({ promuterName })
  }

  surnameHandler = ({ target }) => {
    let promuterSurname = target.value;
    this.setState({ promuterSurname })
  }

  emailHandler = ({ target }) => {
    let promuterEmail = target.value;
    this.setState({ promuterEmail, validateEmail: is.email(target.value)})
  }

  render() {
    const cls = [classes.Main, this.props.blackTheme?classes.dark:null]
    return (
    <main className={cls.join(' ')}>
      {this.props.children}
      {!this.state.promuterEnter?
      <form className={classes.reg}>
        <input 
        placeholder={'Email'} 
        onChange={this.emailHandler} 
        type="email" 
        />
        <input 
        placeholder={'Прізвище'} 
        onChange={this.surnameHandler} 
        type="text"
        />
        <input 
        placeholder={'Ім`я'} 
        onChange={this.nameHandler} 
        type="text"
        />
        <button onClick={this.startTest}>Почати тест</button>
      </form>
      :<TestList
        email={this.state.promuterEmail}
        blackTheme={this.props.blackTheme}
        surname={this.state.promuterSurname}
        name={this.state.promuterName}
      />
      }
    </main>
    )
  }
}

export default Main

