import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './ChangePassword'

export default function Menu(props){
  const navigate=useNavigate()
  const change_color=e=>{
    e.target.parentElement.childNodes.forEach((i)=>{i.style.color="";})
    e.target.style.color="white"
  }
  const change_component=(e)=>{
    console.log(e.target.id)
    if(e.target.id==='changepwd'){
      props.setView(<ChangePassword />)
    }
  }
  const logout=()=>{
    navigate('/login')
  }
  return (
    <>
    <ul className={styles.menu}>
        <li onClick={(e)=>{change_color(e);change_component(e);}} id="changepwd">Change Password</li>
        <li onClick={(e)=>{change_color(e);logout();}} id="logout">Log Out</li>
      </ul>
    </>

  )
}
