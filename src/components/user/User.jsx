import React from 'react'
import "./user.css"
const User = ({userdata}) => {
  return (
    <div className='user'>
    <div className='image'>
        <img src={userdata.avatar_url} alt="user_avatar" />
    </div>
    <div className="userdata">
        <h3>{`Name : ${userdata.name}`}</h3>
        <p>{`User Name : ${userdata.login}`}</p>
        <p>{`Bio : ${userdata.bio}`}</p>
        <p>{`Repositories : ${userdata.public_repos}`} </p>
    </div>

    </div>
  )
}

export default User