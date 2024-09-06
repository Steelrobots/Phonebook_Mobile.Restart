import { faArrowDownAZ, faArrowUpAZ, faMagnifyingGlass, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";



export default function SearchBar(
    { sort, setSort, keyword, setKeyword }:
        {
            sort: string, setSort: React.Dispatch<React.SetStateAction<string>>,
            keyword: string, setKeyword: React.Dispatch<React.SetStateAction<string>>
        }) {
    const nav: any = useNavigation();


    return (
        <KeyboardAvoidingView style={styles.container}  >
            {sort === 'asc' ? (<TouchableOpacity onPress={() => { setSort('desc'); }} style={styles.btn}><FontAwesomeIcon icon={faArrowUpAZ} /></TouchableOpacity>) :
                (<TouchableOpacity onPress={() => { setSort('asc'); }} style={styles.btn} ><FontAwesomeIcon icon={faArrowDownAZ} /></TouchableOpacity>)}
            <View style={styles.submitContainer}>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <TextInput value={keyword} onChangeText={text => setKeyword(text)} placeholder="Search"  style={styles.submit}/> 
            </View>
            <TouchableOpacity onPress={() => nav.navigate('Add')} style={styles.btn}><FontAwesomeIcon icon={faUserPlus} /></TouchableOpacity>

        </KeyboardAvoidingView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 5,
    },
    btn: {
        backgroundColor: '#AF8210',
        padding: 3,
        borderColor: '#AF8210',
        borderRadius: 4
    },
    submitContainer:{
        width: '100%',
        padding: 10
    },
    submit:{
        borderColor: '#555',
        width: '100%',
        paddingLeft:30,
        
    }


})