import React from "react";

export default function TabButton({children, isSelected, ...props}: {children: React.ReactNode, isSelected: boolean, [key: string]: any}) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>

    );
}