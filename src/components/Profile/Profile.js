import Navbar from './../Navbar/Navbar'
import styles from './Profile.module.css'
import Menu from './Menu'
import { useState } from 'react'
import Welcome from './Welcome'

export default function Profile() {
  const [view,setView]=useState(<Welcome />)
  return (
    <>
    <Navbar />
    <div className={styles.profile}>
      <h2><span>Software Mistry</span><span>Masum Billah</span></h2>
      <div className={styles.container}>
        <div className={styles.menu} ><Menu setView={setView} /></div>
        <div className={styles.details}>{view}</div>
      </div>
    </div>
    </>
  )
}
