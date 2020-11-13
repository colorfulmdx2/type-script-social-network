import React from 'react';
import style from './User.module.scss'
import userPhoto from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import status from '../../../../assets/images/status.png'


export const User: React.FC<any> = ({user, followingInProgress, unFollow, follow}) => {

    return (
        <div className={style.user}>


            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null
                    ? user.photos.small
                    : userPhoto}/>
            </NavLink>
            <div className={style.name}>
                {user.name}
                <div className={style.statusContainer}>
                    <img src={status}/>
                    <div className={style.status}>{user.status ? user.status : 'status is not defined'}</div>
                </div>
            </div>


            <div className={style.button}>
                {
                    user.followed
                        ? <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                  onClick={() => {

                                      unFollow(user.id)
                                  }}>Unfollow</button>

                        : <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                }

            </div>

            {/* <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                        </span>
                    </span>*/}
        </div>
    )
}


