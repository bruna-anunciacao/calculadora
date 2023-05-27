import { useEffect } from "react";

export const keyPress = (targetKey, callback) => {
    useEffect(() => {
        const press = (event) => {
            if (event.code === targetKey){
                callback();
            }
        }
        document.addEventListener('keydown', press);
        return () => {
            document.removeEventListener('keydown', press);
        }
    },[targetKey, callback]);
}