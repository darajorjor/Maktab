import fetch from 'isomorphic-fetch';

export default function callAuth(endpoint, method = 'post', body) {
    return fetch(`/${endpoint}`, {
        headers: { 'content-type': 'application/json' },
        method,
        body: JSON.stringify(body),
    })
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }

            return json;
        })
        .then(
            response => response,
            error => error
        );
}
