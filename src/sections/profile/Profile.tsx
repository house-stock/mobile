import React, { useEffect, useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import UserService from '../../services/user/UserService';
import { User } from '../../domain/User';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const [user, setUser] = useState<User>(new User())
    const { logout } = React.useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse: User = await UserService.getUserProfile()
                setUser(userResponse)
            } catch (error) {
                console.log("Error getting the user", error)
            }
        }

        fetchData()
    }, [])

    return <View>
        <View>
            <Image source={require('../../../assets/user_avatar.png')} />
            <Text>{user.name}</Text>
            <Text>{user.username}</Text>
        </View>
        <View>
            <Text style={{ textAlign: 'right' }}>Ajustes</Text>
            <Text>Opcion 1</Text>
            <Text>Opcion 2</Text>
            <Text>Opcion 3</Text>
        </View>
        <Button  title="Logout" onPress={logout}/>
    </View>
}

export default Profile