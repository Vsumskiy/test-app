import React from 'react'
import classes from './Fade.module.sass'

const Fade = ({ openDrawer }) => {
  return <div className={classes.Fade} onClick={openDrawer}></div>
}

export default Fade