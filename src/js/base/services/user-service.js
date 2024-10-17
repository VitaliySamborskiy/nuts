function useService() {
    let user;

    function setUser(userData) {
        user = userData;
    }

    function getUser() {
        return user;
    }

    return { setUser, getUser };
}

const userService = useService();

export { userService };
