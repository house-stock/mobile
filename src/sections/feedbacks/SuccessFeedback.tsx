

import React from 'react';
import { Text, View, Button } from 'react-native'

export type ButtonAction = {
    text: string
    action: () => void
}

interface SuccessFeedbackProps {
    text: string,
    primaryButton: ButtonAction | undefined,
    secondaryButton: ButtonAction | undefined
}
const SuccessFeedback = ({ text, primaryButton, secondaryButton }: SuccessFeedbackProps) => {
    return <View>
        <Text>{text}</Text>
        {!!primaryButton && <Button title={primaryButton.text} onPress={primaryButton.action} />}
        {!!secondaryButton && <Button title={secondaryButton.text} onPress={secondaryButton.action} />}
    </View>
}

export default SuccessFeedback