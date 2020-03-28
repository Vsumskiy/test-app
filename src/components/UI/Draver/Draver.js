import React  from 'react'
import classes from './Draver.module.sass'
import Auth from '../../Auth/Auth'

const Draver = props => {
  const renderIcon = () => {
    const clsIcon = [
    classes.MenuToggle,'fa']
      if (props.openAdm) {
        clsIcon.push('fa-times')
        clsIcon.push(classes.open)
      } else {
          clsIcon.push('fa-bars')
      }
return (  
      <i className={clsIcon.join(' ')}
        onClick={props.openDrawer}
      >
      </i>)
  }

  const clsD = [
    classes.Draver, props.openAdm?classes.active:null,
    props.blackTheme?classes.dark:null
  ]

  return ( 
    <div className={clsD.join(' ')}>
      <Auth 
      showAlert={props.showAlert}
      openDrawer={ props.openDrawer}
      isAdmin={props.isAdmin} 
      linkProps={props.linkProps}
      blackTheme={props.blackTheme}
      />
    {renderIcon()}
    </div>)
}
export default  Draver