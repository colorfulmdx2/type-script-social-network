import React from 'react';
import styleUsers from './Users.module.css'
import {UsersType} from "../redux/users-reducer";

const Users = (props:any) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://vignette.wikia.nocookie.net/anime-soul/images/b/b2/62.jpg/revision/latest/top-crop/width/360/height/450?cb=20170410121834&path-prefix=ru',
                followed: false,
                fullName: 'Dmitry',
                status: 'im a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://vignette.wikia.nocookie.net/anime-soul/images/b/b2/62.jpg/revision/latest/top-crop/width/360/height/450?cb=20170410121834&path-prefix=ru',
                followed: true,
                fullName: 'Viktor',
                status: 'Hi there',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://vignette.wikia.nocookie.net/anime-soul/images/b/b2/62.jpg/revision/latest/top-crop/width/360/height/450?cb=20170410121834&path-prefix=ru',
                followed: false,
                fullName: 'Slava',
                status: 'How ure doing',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div className={styleUsers.users}>
            {
                props.users.map((u:UsersType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;