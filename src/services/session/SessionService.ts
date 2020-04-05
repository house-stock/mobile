import { AsyncStorage } from "react-native"

const TOKEN = 'token'
class SessionService {

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
}

export default new SessionService