export function useNewQueryParameter(queryKey, queryValue) {
    let url = new URL(window.location.href);
    for (let i = 0; i < queryKey.length; i++) {
        url.searchParams.set(queryKey[i], queryValue[i]);
    }

    window.history.replaceState(null, null, url);
}

export function useSetQueryParameter(queryKey, queryValue) {
    let queryParams = new URLSearchParams(window.location.search);
    for (let i = 0; i < queryKey.length; i++) {
        queryParams.set(queryKey[i], queryValue[i]);
    }

    window.history.replaceState(null, null, "?" + queryParams.toString());
}

export function useGetQueryParameter(objKey, queryKey) {
    const queryParams = new URLSearchParams(window.location.search);
    let getQueryParameterObj = {};

    for (let i = 0; i < queryKey.length; i++) {
        getQueryParameterObj[objKey[i]] = queryParams.get(queryKey[i]);
    }

    return getQueryParameterObj;
}
