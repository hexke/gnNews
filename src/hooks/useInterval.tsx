import { useCallback, useEffect, useRef } from "react";

const useInterval = (callback: () => void, timeout: number) => {

    const intervalRef = useRef<number | null>(null);

    const set = useCallback(() => {
        if (intervalRef.current !== null) return;

        intervalRef.current = window.setInterval(callback, timeout);
    }, [callback, timeout]);

    const clear = useCallback(() => {
        if (!intervalRef.current) return;

        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);

    useEffect(() => {
        set();

        return clear;
    }, [set, clear]);
}

export default useInterval;