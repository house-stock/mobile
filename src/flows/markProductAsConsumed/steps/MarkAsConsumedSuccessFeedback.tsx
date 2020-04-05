
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import SuccessFeedback, { ButtonAction } from '../../../sections/feedbacks/SuccessFeedback'
import { MarkAsConsumedNavigation, StackNavigatorConsumed } from '../MarkProductAsConsumed';

interface Props {
    route: RouteProp<StackNavigatorConsumed, 'MarkAsConsumedSuccessFeedback'>;
    navigation: MarkAsConsumedNavigation;
};

const MarkAsConsumedSuccessFeedback = ({ route, navigation }: Props) => {
    const product = route.params.data
    const primaryButton: ButtonAction = {
        text: 'Seguir marcando como consumido',
        action: () => navigation.navigate('SelectFlowType', undefined)
    }
    const secondaryButton: ButtonAction = {
        text: 'Volver al menu',
        action: () => navigation.navigate('Home', undefined)
    }
    const text = `Se agrego con marco como consumido el producto ${product.name}`
    return <SuccessFeedback text={text} primaryButton={primaryButton} secondaryButton={secondaryButton} />
}

export default MarkAsConsumedSuccessFeedback