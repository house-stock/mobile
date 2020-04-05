
import React from 'react';
import { AddProductNavigation, StackNavigatorAddProduct } from '../AddProductFlow';
import { RouteProp } from '@react-navigation/native';
import SuccessFeedback, { ButtonAction } from '../../../sections/feedbacks/SuccessFeedback'

interface Props {
    navigation: AddProductNavigation,
    route: RouteProp<StackNavigatorAddProduct, 'AddProductSuccessFeedback'>;
}

const AddProductSuccessFeedback = ({ route, navigation }: Props) => {
    const { product } = route.params.data
    const primaryButton: ButtonAction = {
        text: 'Seguir agregando',
        action: () => navigation.navigate('Scan', undefined)
    }
    const secondaryButton: ButtonAction = {
        text: 'Volver al menu',
        action: () => navigation.navigate('Home', undefined)
    }
    const text = `Se agrego con exito el producto ${product.name}`
    return <SuccessFeedback text={text} primaryButton={primaryButton} secondaryButton={secondaryButton} />
}

export default AddProductSuccessFeedback