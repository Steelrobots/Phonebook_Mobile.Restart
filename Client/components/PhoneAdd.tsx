import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PhoneAdd() {
    const [add, setAdd] = useState({ name: '', phone: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const nav: any = useNavigation()

    const handleData = () => {
        if (add.name.length === 0 || add.phone.length === 0) return setErrorMessage("Please fill all fields")
        else {
            nav.navigate('Home')
        }
    }

    return (
        <KeyboardAvoidingView>
            <View>
                <TextInput placeholder="insert your name" onChangeText={text => { setAdd({ ...add, name: text }) }} />
                <TextInput placeholder="insert your phone" onChangeText={text => { setAdd({ ...add, phone: text }) }} />
            </View>
            <View>
                <TouchableOpacity><Text>Save</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('Home')}><Text>Cancel</Text></TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}