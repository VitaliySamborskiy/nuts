class UserService {
    #user;

    setUser(userData) {
        this.#user = userData;
    }

    getUser() {
        return this.#user;
    }
}

const userService = new UserService();

export { userService };
