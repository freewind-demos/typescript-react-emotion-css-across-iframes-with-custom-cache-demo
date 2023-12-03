import React, { FC, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

export const TopWindowPortal: FC = ({children}) => {
    const container = useMemo(() => window.top!.document.createElement('div'), []);

    useEffect(() => {
        window.top!.document.body.appendChild(container);
    }, [container])

    return ReactDOM.createPortal(
        children,
        container
    )
}
