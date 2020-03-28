import React from 'react'
import Fade from '../Fade/Fade'
import classes from './CustomAlert.module.sass'

export const CustomAlert = props => {
 const cls = [classes.CustomAlert, props.type==='error'?classes.error: classes.succes]
 
  return (
    <>
    <Fade openDrawer={props.showAlert} auth={props.auth}/>
    <div className={cls.join(' ')}>
      <span>{props.titleError}</span>
      <i className={'fa fa-times'}
        onClick={props.showAlert}></i>   
      </div>
    </>
  )
}