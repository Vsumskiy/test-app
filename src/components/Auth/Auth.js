import React from 'react'
import classes from './Auth.module.sass'
import { getAdminData } from '../../Axios/AxiosQuery'

class Auth extends React.Component {
   state = {
    userData : {
    name : '',
    pass: '',
    },
    enteredName: '',
    enteredPass: '',
    goToAdm: false,
  }

 async componentDidMount () {
    await getAdminData(this.state.userData).then(userData => {
      this.setState({userData})
      }
    );
 }

   goToAdmHandler = () => {
    const name =  this.state.userData.name
    const enteredName = this.state.enteredName
    const pass =  this.state.userData.pass
    const enteredPass = this.state.enteredPass
      
    if (enteredName === name && enteredPass === pass) {
      this.props.linkProps.history.push('/0936139517results2020')
      this.props.isAdmin()
      this.props.openDrawer()
    } else {
      this.props.showAlert(true, 'Авторизація не пройдена!','error')
    }
  }

   checkedName = ({ target }) => {
    let enteredName = target.value
    this.setState({enteredName}) 
  }

    checkedPass = ({ target }) => {
    let enteredPass = target.value 
    this.setState({enteredPass})
  }

  render() {
  const cls = [
    classes.Auth,this.props.blackTheme?classes.dark:null ]

  return (
      <div className={cls.join(' ')}>
        <input 
        placeholder='Логін'
        onChange={this.checkedName}
        value={this.state.enteredName} 
        />
        <input 
        placeholder='Пароль'
        type='password'
        onChange={this.checkedPass}
        value={this.state.enteredPass} 
        />
        <span 
        onClick={this.goToAdmHandler}>
          Увійти
        </span>
      </div>
  )
}
}

export default Auth
