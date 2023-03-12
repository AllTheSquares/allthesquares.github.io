import {useRef, useEffect} from 'react'
import './customMouse.css'

function Mouse() {
    const cursor = useRef(null);
    const cursorVisible = useRef(false);
    // const cursorLarge = useRef(false);
    //

    const editCursorVisibility = () => {
        if (cursorVisible.current) {
            cursor.current.style.opacity = 1;
        } else {
            cursor.current.style.opacity = 0;
        }
    }

    const event_mouseEnter = () => {
        cursorVisible.current = true;
        editCursorVisibility();
    }

    const event_mouseExit = () => {
        cursorVisible.current = false;
        editCursorVisibility();
    }


    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursor.current.clientWidth / 2;
            const mouseY = clientY - cursor.current.clientHeight / 2;
            cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });
    }, []);

    return (
        <>
            <div id="customCursor" ref={cursor}/>
        </>
    )
}

export default Mouse;