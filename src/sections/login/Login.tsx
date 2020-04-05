import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import UserService from "../../services/user/UserService";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const { login } = React.useContext(AuthContext);

    const onLogin = () => {
        return UserService.login({ username, password })
            .then(token => login(token))
    }

    return (
        <View>
            <TextInput
                placeholder="Casa"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Ingresar" onPress={onLogin} disabled={!username || !password} />
        </View>
    );
}

export default Login