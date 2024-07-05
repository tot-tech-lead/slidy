function getCookieByKey(key: string): string | null {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        const [name, value] = cookie.split('=').map(c => c.trim());
        if (name === key) {
            return decodeURIComponent(value);
        }
    }

    return null;
}


function setCookie(key: string, value: string, options: object = {}) : void {
    let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

    if (options.expires) {
        const expires = options.expires instanceof Date ? options.expires.toUTCString() : options.expires;
        cookieString += `;expires=${expires}`;
    }

    if (options.path) {
        cookieString += `;path=${options.path}`;
    }

    if (options.domain) {
        cookieString += `;domain=${options.domain}`;
    }

    if (options.secure) {
        cookieString += `;secure`;
    }

    document.cookie = cookieString;
}

function deleteCookie(key: string, path: string = '/') : void {
    // Setting the cookie with an expiration date in the past
    setCookie(key, '', {expires: new Date(0), path});
}

export {getCookieByKey, setCookie, deleteCookie}