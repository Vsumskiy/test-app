import React from 'react'
import classes from './Fade.module.sass'

const Fade = ({ openDrawer, auth }) => {
  const cls = [classes.Fade, auth?classes.fadeAuth:null]
  return <div className={cls.join(' ')} onClick={openDrawer}></div>
}

export default Fade