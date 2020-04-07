import { AsyncStorage } from "react-native"

const TOKEN = 'token'
class SessionService {
    logoutCallback: () => void

    init(logoutCallback) {
        this.logoutCallback = logoutCallback
    }

    async _logout() { // ! This is a internal hack to be able to change the UI inside the BaseService 
        return this.removeToken()
            .then(() => {
                this.logoutCallback()
            })
    }

    saveToken(token: string): Promise<any> {
        return AsyncStorage.setItem(TOKEN, token)
    }

    async userIsLogged(): Promise<boolean> {
        try {
            const token = await AsyncStorage.getItem(TOKEN)
            return !!token
        } catch (error) {
            console.log("Error accesing to the async storage", error)
            return false
        }
    }

    getToken(): Promise<string> {
        return AsyncStorage.getItem(TOKEN)
    }

    removeToken(): Promise<any> {
        return AsyncStorage.removeItem(TOKEN)
    }
}

export default new SessionService