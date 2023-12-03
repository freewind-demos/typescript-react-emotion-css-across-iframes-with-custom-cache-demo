import React, { FC, useMemo, useState } from 'react';
import { TopWindowPortal } from './TopWindowPortal';
import { EmotionContext } from "./EmotionContext";
import { RedTextButton } from "./RedTextButton";
import createEmotion from "@emotion/css/create-instance/dist/emotion-css-create-instance.cjs";

export const Hello: FC = () => {
    const [show, setShow] = useState(false);

    const emotion = useMemo(() => {
        return createEmotion({
            key: 'custom-emotion',
            container: window.top?.document?.head
        })
    }, []);

    return <EmotionContext.Provider value={emotion}>
        <div>Inner</div>
        <button onClick={() => setShow(true)}>Create new div on top</button>
        {show && <TopWindowPortal>
            <RedTextButton/>
        </TopWindowPortal>}
    </EmotionContext.Provider>
}
