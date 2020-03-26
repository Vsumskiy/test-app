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
    props.balckTheme?classes.dark:null
  ]

  return ( 
    <div className={clsD.join(' ')}>
      <Auth 
      openDrawer={ props.openDrawer}
      isAdmin={props.isAdmin} 
      linkProps={props.linkProps}
      balckTheme={props.balckTheme}
      />
    {renderIcon()}
    </div>)
}
export default  Draver