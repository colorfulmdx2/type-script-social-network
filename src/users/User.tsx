import React from 'react';
import styleUsers from './Users.module.css'
import userPhoto from '../assets/images/user.png'
import {NavLink} from "react-router-dom";


export const User: React.FC<any> = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <div className={styleUsers.users}>

                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null
                                    ? user.photos.small
                                    : userPhoto}/>
                            </NavLink>
                        </div>
                         <div>
                             {
                                 user.followed
                                     ? <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                               onClick={() => {

                                                   unFollow(user.id)
                                               }}>Unfolow</button>

                                     : <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                               onClick={() => {
                                                   follow(user.id)
                                               }}>Follow</button>
                             }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
                    </span>
        </div>
    )
}


