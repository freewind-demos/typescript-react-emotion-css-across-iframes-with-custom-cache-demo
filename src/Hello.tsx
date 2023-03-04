import { css } from '@emotion/react';
import { FC, useState } from 'react';
import { TopWindowPortal } from './TopWindowPortal';

export const Hello: FC = () => {
    const [show, setShow] = useState(false);

    return <div>
        <div>Inner</div>
        <button onClick={() => setShow(true)}>Create new div on top</button>
        {show && <TopWindowPortal>
            <button css={css`color: red; font-size: 50px;`}>Hi!</button>
        </TopWindowPortal>}
    </div>
}
