import React, {ChangeEvent, useEffect, useState} from 'react';

export const ProfileStatusHooks = (props: any) => {

    let [state, setState] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeteEditMode = () => setState(true)
    const deactiveteEditMode = () => {
        setState(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!state &&
            <div>
                <span onDoubleClick={activeteEditMode}>{props.status || '-------'}</span>
            </div>
            }
            {state &&
            <div>
                <input autoFocus={true}
                       onBlur={deactiveteEditMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>
            }
        </div>
    )
}


