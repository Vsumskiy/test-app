import React  from 'react'
import classes from './Drawer.module.sass'

const Drawer = props => {
  //togle classes to icon
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
  ]

  return ( 
    <div className={clsD.join(' ')}>
    {props.children}
    {renderIcon()}
    </div>)
}
export default  Drawer