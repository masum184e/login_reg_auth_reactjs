import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from './authentication.module.css'

export default function Registration() {
  const navigate=useNavigate()
  const [data,setData]=useState({})
  const [err,setError]=useState({
    status:false,
    color:'',
    message:'' 
  })
  const input_handle=e=>{
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  const form_handle=async(e)=>{
    e.preventDefault()
    if(data.email && data.fname && data.lname && data.pwd){
      console.log(data)
      setData({})
      navigate('/profile')
    }else{
      setError({status:true,color:'red',message:'All Fields Are Required'})
    }
  }
  return (
    <>
    <div className={styles.registration}>
    <form onSubmit={form_handle} action="" method="post">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="fname" value={data.fname || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lname" value={data.lname || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" value={data.email || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="pwd" value={data.pwd || ""}  onChange={input_handle}  />
        </div>
        <input type="submit" value="Register" />
        <p>Alread Have An Account <Link to='/login'>Log In</Link></p>
        {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
      </form>
    </div>
    </>
  )
}
