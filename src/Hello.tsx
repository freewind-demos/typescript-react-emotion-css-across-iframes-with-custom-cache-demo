import React, {FC} from 'react';
import {css} from "@emotion/css";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    function createNewDivOnTop() {
        console.log("### createNewDivOnTop")
        let doc = window.top!.document;
        const newDiv = doc.createElement('div')
        newDiv.className = css`
          font-size: 50px;
          color: red;
        `
        doc.body.append(newDiv);
        newDiv.innerText = 'emotion css does not work and not easy to fix'
    }

    return <div>
        <div>Inner</div>
        <button onClick={() => createNewDivOnTop()}>Create new div on top</button>
    </div>
}
