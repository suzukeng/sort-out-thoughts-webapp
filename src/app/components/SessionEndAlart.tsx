'use client'
import { useEffect, ReactNode } from "react";
//ref: https://omkz.net/prohibit-browser-back/
export default function SessionEndAlart({ children }: { children: ReactNode }) {
    useEffect(() => {
        window.addEventListener('beforeunload', onUnload);
        return () => {
            window.removeEventListener('beforeunload', onUnload);
        }
    }, [])

    const onUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault()
        e.returnValue = ''
    }
    return (
        <>
            {children}
        </>
    );
}