import { AsyncStorage } from "react-native"

const TOKEN = 'token'
class SessionService {
    logoutCallback: () => void

    init(logoutCallback) {
        this.logoutCallback = logoutCallback
    }

    async logout() {
        return AsyncStorage.removeItem(TOKEN)
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
}

export default new SessionService