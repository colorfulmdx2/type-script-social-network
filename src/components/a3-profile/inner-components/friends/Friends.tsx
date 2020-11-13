import React, {useEffect} from "react";
import style from './Friends.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {UsersType} from "../../../../redux/users-reducer";
import {getFriends} from "../../../../redux/profile-reducer";
import userIMG from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom";

export const Friends = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFriends())
    },[])


    const friends = useSelector<AppStateType, UsersType[]>(state => state.profileState.friends)

    const onlineFriends = useSelector<AppStateType, UsersType[]>(state => state.profileState.onlineFriends)

    const friendsComponents = friends.map((element) => <FriendIcon name={element.name}
                                                                   photo={element.photos.small}
                                                                   id={element.id}
                                                                   key={element.id}/>)

    const onlineFriendsComponent = onlineFriends.map((element) => <FriendIcon name={element.name}
                                                                              photo={element.photos.small}
                                                                              id={element.id}
                                                                              key={element.id}
    />)


    return (
        <div className={style.container}>
            <div className={style.title}>Friends 57</div>
            <div className={style.friends}>

                {friendsComponents}
            </div>
            <div className={style.title}>Online 4</div>
            <div className={style.onlineFriends}>

                {onlineFriendsComponent}
            </div>

        </div>
    )
}


type FriendIconPropsType = {
    photo: string
    name: string
    id: number
}


export const FriendIcon = (props: FriendIconPropsType) => {

    return (
       <NavLink to={'/profile/' + props.id}>
           <div className={style.icon}>
               <img src={props.photo ? props.photo : userIMG} alt=""/>
               <div className={style.name}>{props.name}</div>
           </div>
       </NavLink>
    )

}