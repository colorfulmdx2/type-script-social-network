import React, {useEffect} from 'react';
import styleDialogs from './Dialogs.module.scss'
import SingleDialog from "./single-dialog/SingleDialog";
import {useDispatch, useSelector} from "react-redux";
import {getFriends} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {UsersType} from "../../../redux/users-reducer";



const Dialogs = (props: any) => {

    const dispatch = useDispatch()

    const friends = useSelector<AppStateType, UsersType[]>(state => state.profileState.friends)

    useEffect(() => {
        dispatch(getFriends())
    }, [friends])


    const dialogsElement = friends.map((element) =>
        <SingleDialog id={element.id}
                      key={element.id}
                      name={element.name}
                      avatar={element.photos.small}
        />)

    return (

            <div className={styleDialogs.dialogs}>

                {dialogsElement}

            </div>

    )
}


export default Dialogs;
