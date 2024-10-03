export function useSetCookie(data) {
    document.cookie = `${encodeURIComponent("userInfo")}=${encodeURIComponent(JSON.stringify({ uid: data.uid, email: data.email, refreshToken: data.refreshToken }))}; path=/; max-age=604800; secure; samesite=strict`;
}

export function useGetCookie(name) {
    let matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
    );
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}
