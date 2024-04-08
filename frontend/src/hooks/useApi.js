import { useState } from "react";
export const BASE_URL = `http://localhost:8080/api/v1`;

const getCookie = (cookieName) => {
    const cookie = document.cookie
        .split(';')
        .map((item) => item.trim().split('='))
        .find(([name]) => name === cookieName);

    return cookie ? cookie[1] : null;
};

// get data 
export const useFetch = () => {

}

// path - url_path,method - type of request
export const useChage = () => {
    const [isChanging, setIsChanging] = useState(false);
    const chage = async (path, options) => {
        try {
            const token = getCookie('token')
            console.log("token==>",token)
            const method = options?.method || 'POST';
            const headers = {
                'Set-Cookie': `token=${token}`,
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