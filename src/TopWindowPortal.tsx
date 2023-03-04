import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";
import { FC, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

export const TopWindowPortal: FC = ({ children }) => {
    const container = useMemo(() => document.createElement('div'), []);
    const cache = useMemo(() => createCache({
        key: 'top-window',
        container
    }), [])

    useEffect(() => {
        window.top?.document.body.appendChild(container);
    }, [container])

    return ReactDOM.createPortal(
        <CacheProvider value={cache}>{children}</CacheProvider>,
        container
    )
}
