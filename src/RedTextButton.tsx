import React, { FC } from 'react';
import { useEmotion } from "./EmotionContext";

interface Props {
}

export const RedTextButton: FC<Props> = ({}) => {
    console.debug('> RedTextButton');
    const {css} = useEmotion();
    return <div>
        <button className={css`
          color: red;
          font-size: 50px;`}>
            Hi!
        </button>
    </div>;
};
