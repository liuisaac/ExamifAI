import { useEffect, useState } from "react"


export const useMousePosition = () => {
    const [position, setPosition] = useState({x : 0, y : 0})
    const width = screen.width

    // only runs once until component is unmounted
    useEffect (() => {

        const setFromEvent = e => setPosition({ x: (width / 2 - e.clientX), y: e.clientY});
        window.addEventListener("mousemove", setFromEvent)
        return () => {
            window.removeEventListener("mousemove", setFromEvent)
        }
    }, [])
    return position;
}