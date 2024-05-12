import {useEffect, useRef, useState} from "react";
import axios from "axios";

export const GetDataHook = <T>(url: string, retry: number, retryDelay: number, withCredentials: boolean,): {data: T; error: any; loading: boolean; } => {
    const [data, setData] = useState<T>();
    const initialized = useRef(false)
    const [error, setError] = useState<{code: string, message: string}[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<T>("http://192.168.0.218:8080/api" + url, {withCredentials, retry, retryDelay: retryDelay * retry});
                setData(response.data);
            } catch (error) {
                console.log(error)
                if (error.response.status == 401) {
                    document.location.href = '/login'
                }
                setError(error.response.data.errors);
            } finally {
                setLoading(false);
            }
        };

        if (!initialized.current) {
            initialized.current = true
            fetchData();
        }
    }, [url]);

    return { data, error, loading };
}