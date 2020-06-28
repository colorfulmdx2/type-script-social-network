import React from 'react';
import styleUsers from './Users.module.css'
import {UsersType} from "../redux/users-reducer";
import axios from 'axios'
import userPhoto from '../assets/images/user.png'

const Users = (props:any) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response:any) => {
            debugger
            props.setUsers(response.data.items)
        })

    }

    return (
        <div className={styleUsers.users}>
            {
                props.users.map((u:UsersType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null
                                ? u.photos.small
                                : userPhoto}/>
                        </div>
                         <div>
                             {
                                 u.followed
                                     ? <button onClick={ () => { props.unFollow(u.id) } }>Unfolow</button>
                                     : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                             }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;