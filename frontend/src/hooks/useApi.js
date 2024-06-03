import axios from "axios";
import { useState } from "react";

export const BASE_URL = `http://localhost:8080/api/v1`;

const getCookie = (cookieName) => {
    const cookies = document.cookie
        .split(';')
        .map((item) => item.trim().split('='))
        .filter(([name, value]) => name !== '' && value !== undefined);

    const targetCookie = cookies.find(([name]) => name === cookieName);    
    return targetCookie ? targetCookie[1] : null;
};

export const useFetch = async (path) => {
    const URL = BASE_URL;
    let headers = {};
    const token = getCookie('token');
    if (token) {
        headers['Content-Type'] = 'application/json';
        headers['Authorization'] = `Bearer ${token}`;
    }
    try {
        const response = await axios.get(`${URL}/${path}`, { headers });
        const data = response.data;
        return data;
    } catch (error) {
        return error;
    }
};


// path - url_path,method - type of request
export const useChage = () => {
    const [isChanging, setIsChanging] = useState(false);
    const chage = async (path, options) => {
        try {
            setIsChanging(true);
            const token = getCookie('token')
            const method = options?.method || 'POST';
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            const body = options?.body
                ? options?.isFormData
                    ? options?.body
                    : JSON.stringify(options.body)
                : `{}`;
            const fetchOptions = { method, headers, body };
            const response = await fetch(`${BASE_URL}${path}`, fetchOptions);

            const contentType = response.headers.get('content-type');
            const isJsonResponse = contentType && contentType.includes('application/json');
            const status = response.status;
            const results = isJsonResponse ? await response.json() : await response.text();
            setIsChanging(false);
            return { results, status };

        } catch (error) {
            setIsChanging(false);
            throw new Error(
                error instanceof Error ? error.message : 'Something went wrong',
            );
        }
    }

    return { chage, isChanging };
}