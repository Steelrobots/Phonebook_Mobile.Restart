import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import PhoneList from "./PhoneList";

export default function PhoneBox({ navigation }: any) {
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] = useState('asc')

    return (
        <SafeAreaView style={css.container}>
            <SearchBar
                sort={sort}
                setSort={setSort}
                keyword={keyword}
                setKeyword={setKeyword} />
            <PhoneList keyword={keyword} sort={sort} />

        </SafeAreaView>
    )

}
const css = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'white'
    }
})