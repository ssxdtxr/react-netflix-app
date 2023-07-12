import React, {FC, ReactNode} from 'react';
import {Header} from "./Header/Header";

interface ILayout {
    children: ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <div>
            <Header login/>
            {children}
        </div>
    );
};

