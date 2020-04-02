import React, { useState, useEffect, FC } from 'react';
import { View, TextInput, Button } from 'react-native';

interface SearchProductProps {
    searchProduct: (string) => void
}

const SearchProduct = ({ searchProduct }: SearchProductProps) => {
    const [searchValue, serSearchValue] = useState<string>('')

    const onChangeSearch = (text: string) => {
        serSearchValue(text)
    }
    const onSearch = () => {
        searchProduct(searchValue)
    }
    return <View>
        <TextInput value={searchValue} onChangeText={onChangeSearch} />
        <Button title="Buscar" onPress={onSearch} />
    </View>
}

export default SearchProduct