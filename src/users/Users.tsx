import React from 'react';
import styleUsers from './Users.module.css'
import {UsersType} from "../redux/users-reducer";
import userPhoto from '../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users =(props:any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styleUsers.users}>
            <div>
                {
                    pages.map((p) => {
                        let onPageChanged = (e:any) => {
                            props.onPageChanged(p)
                        }
                        return (
                            <span
                                key={p}
                                onClick={onPageChanged}
                                className={props.currentPage === p ? styleUsers.selectedPage : ''}>{p}</span>
                        )
                    })
                }

            </div>

            {
                props.users.map((u: UsersType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null
                                    ? u.photos.small
                                    : userPhoto}/>
                            </NavLink>
                        </div>
                         <div>
                             {
                                 u.followed
                                     ? <button onClick={() => {

                                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                             {
                                                 withCredentials: true,
                                                 headers: {
                                                     'API-KEY' : 'a6000f96-1c2a-4e1d-b415-976cdf49e77f'
                                                 }
                                             })
                                             .then((response: any) => {
                                                 if (response.data.resultCode === 0) {
                                                     props.unFollow(u.id)
                                                 }
                                             })

                                     }}>Unfolow</button>

                                     : <button onClick={() => {
                                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                             {},
                                             {
                                                 withCredentials: true,
                                                 headers: {
                                                     'API-KEY' : 'a6000f96-1c2a-4e1d-b415-976cdf49e77f'
                                                 }
                                             })
                                             .then((response: any) => {
                                               if (response.data.resultCode === 0) {
                                                   props.follow(u.id)
                                               }
                                             })


                                     }}>Follow</button>
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


export default Users
