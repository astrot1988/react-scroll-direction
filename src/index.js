import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

const ScrollInfo = createContext();

export const ScrollDirectionProvider = ({ children }) => {

    const [direction, setDirection] = useState(0);
    const [pos, setPos] = useState(0);

    const handleScroll = useCallback(() => {
        if ((document.body.getBoundingClientRect()).top > pos) {
            setDirection('UP')
        }
        else {
            setDirection('DOWN')
        }
        setPos((document.body.getBoundingClientRect()).top);
    }, [pos])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <ScrollInfo.Provider value={direction}>
            {children}
        </ScrollInfo.Provider>
    );
}

export const useScrollDirection = () => {
    const direction = useContext(ScrollInfo)
    return direction;
}


