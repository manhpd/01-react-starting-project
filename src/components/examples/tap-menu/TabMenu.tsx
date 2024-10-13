import React from 'react';

export default function TabMenu({children, buttons , ButtonsContainer = "menu"}: {children: React.ReactNode, buttons: React.ReactNode, ButtonsContainer?: React.ElementType}) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
                {children}
        </>

    )
}
