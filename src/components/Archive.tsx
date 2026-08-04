import React, { useCallback, useState } from 'react'
import Main1 from './smallChristmass2026April/Main1'

interface incomingParams{}


const Archive: React.FC<incomingParams> = () => {
    const [invitationState, setInvitationState] = useState<number>(0)
    const buttonHandle = useCallback(() => {
        const input = document.getElementById("givenstateArchive") as unknown as HTMLInputElement
        setInvitationState(Number(input.value))
    }, []) 

    return (
    <div>
        <input type="number" name="givenstate" id="givenstateArchive" max={1} min={0}/>
        <button onClick={buttonHandle}>Set state</button>
        {
            invitationState == 1?
                <Main1></Main1>
            :
                <></>
        }
        
    </div>
    )
}

export default Archive