import React, {useState} from "react";
import style from "./AboutLarge.module.scss";
import {ProfileStatusHooks} from "../../profile-status/ProfileStatusHooks";
import {ProfileDataForm} from "../ProfileForm/profileDataForm";
import {ModalWithChildren} from "../../../../Modal/Modal";
import facebook from '../../../../../assets/icons/facebook.svg'
import git from '../../../../../assets/icons/git-hub.svg'
import insta from '../../../../../assets/icons/instagram.svg'
import linked from '../../../../../assets/icons/linked-in.svg'
import twitter from '../../../../../assets/icons/twitter.svg'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";


type AboutLargePropsType = {
    editMod: boolean
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    contacts: any
    isOwner: boolean
    profile: any
    goToEditMode: () => void
    lookingForAJobDescription: string
}

export const AboutLarge = (props: AboutLargePropsType) => {

    const facebookLink = useSelector<AppStateType, string | undefined>(state => state.profileState.profile?.contacts.facebook)
    const twitterLink = useSelector<AppStateType, string | undefined>(state => state.profileState.profile?.contacts.twitter)
    const gitLink = useSelector<AppStateType, string | undefined>(state => state.profileState.profile?.contacts.github)
    const linkedLink = useSelector<AppStateType, string | undefined>(state => state.profileState.profile?.contacts.mainLink)
    const instaLink = useSelector<AppStateType, string | undefined>(state => state.profileState.profile?.contacts.instagram)

    const [enable, setEnable] = useState(false)

    const onCancelHandler = () => {
        setEnable(false)
    }

    return (

        <div className={style.aboutContainer}>

            <div className={style.nameContainer}>
                <div className={style.name}>{props.fullName}</div>
                <div className={style.online}>Online</div>
            </div>

            <div className={style.status}>
                <ProfileStatusHooks/>
            </div>

            <div className={style.mainInfo}>

                {//ProfileInformation Info
                    !props.editMod &&
                    <div className={style.about}>
                        <div>
                            <div className={style.after}>
                                <div className={style.descriptionsContainer}>
                                    <div className={style.title}>About me</div>
                                    <div className={style.text}>{props.aboutMe}</div>
                                </div>
                            </div>


                            <div className={style.after}>
                                <div className={style.descriptionsContainer}>
                                    <div className={style.title}> Job hunting</div>
                                    <div className={style.text}>{props.lookingForAJob ? 'yes' : 'no'}</div>
                                </div>
                            </div>

                            <div className={style.after}>
                                <div className={style.descriptionsContainer}>
                                    <div className={style.title}>Skills</div>
                                    <div className={style.text}>{props.lookingForAJobDescription || '-----'}</div>
                                </div>
                            </div>

                            <div className={style.contacts}>
                                <a href={!!facebookLink ? facebookLink : ''}><img src={facebook}/></a>
                                <a href={!!instaLink ? instaLink : ''}><img src={insta}/></a>
                                <a href={!!linkedLink ? linkedLink : ''}><img src={linked}/></a>
                                <a href={!!twitterLink ? twitterLink : ''}><img src={twitter}/></a>
                                <a href={!!gitLink ? gitLink : ''}><img src={git}/></a>
                            </div>


                            {/*<div>Contacts {Object.keys(props.contacts).map((k: any) => {
                                return (
                                    <Contacts key={k}
                                              contactTitle={k}
                                              contactValue={props.contacts[k]}

                                    />
                                )
                            })}
                            </div>*/}


                        </div>
                    </div>
                }
            </div>

            {//Edit Mod Button
                props.isOwner && <div>
                    <button className={style.button} onClick={() => setEnable(true)}>EDIT</button>
                </div>
            }
            <ModalWithChildren enable={enable}
                               onCancel={onCancelHandler}>
                <ProfileDataForm onCancel={onCancelHandler}/>

            </ModalWithChildren>

            {/*{//Form Condition
                props.editMod && <ProfileDataForm/>
            }*/}

        </div>

    )
}