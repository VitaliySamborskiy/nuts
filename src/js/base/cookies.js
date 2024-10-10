export function useSetCookie(name, value, time = null) {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}; path=/; max-age=${time ? time : 604800}; secure; samesite=strict`;
}

export function useGetCookie(name) {
    let matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
    );
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

export function useDeleteCookie(name) {
    useSetCookie(name, "", -1);
}
