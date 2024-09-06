import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, ImageSourcePropType, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


// { user }: { user: any }
export default function PhoneItem() {
    const [isEdit, setIsEdit] = useState(false);
    const [newData, setNewData] = useState({ name: '', phone: '' })
    const nav: any = useNavigation()

    // const source: ImageSourcePropType = {
    //     uri: `http://192.168.1.51:3001/images/${user.avatar ? user.avatar : 'user-tie-solid.svg'}`
    // };

    // const deleteAlert = ({ user }: { user: any }) => {
    //     Alert.alert(
    //         'Delete Confirmation', `Are you sure to delete this ${user.name} contact?`,
    //         [{
    //             text: "Cancel",
    //             onPress: () => nav.navigate('Home')
    //         },
    //         {
    //             text: 'OK',
    //             onPress: () => deleteData(user.id)
    //         }
    //         ]
    //     )
    // }
    // const handleData = ({ id, contact }: { id: number, contact: any }) => {
    //     updatecontact({ id: user.id, contact: newData })
    //     setIsEdit(false)
    // }



//     if (isEdit) {
//         return (
//             <View style={styles.container}>
//                 <View>
//                     <TouchableOpacity>
//                         {/* <Image
//                             source={source}
//                         /> */}
//                     </TouchableOpacity>
//                 </View>
//                 <View>
//                     {/* <TextInput value={user.name} onChangeText={text => setNewData({ ...newData, name: text })} />
//                     <TextInput value={user.phone} onChangeText={text => setNewData({ ...newData, phone: text })} /> */}
//                     <View>
//                         {/* <TouchableOpacity onPress={()=> handleData(user.id)}><FontAwesomeIcon icon={faFloppyDisk} /></TouchableOpacity> */}
//                         <TouchableOpacity onPress={() => setIsEdit(false)}><FontAwesomeIcon icon={faArrowRotateLeft} /></TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         )
//     } else {
//         return (
//             <View  style={styles.container}>
//                 {/* key={user.id} */}
//                 <View>
//                     <TouchableOpacity>
//                         {/* <Image
//                             source={source}
//                         /> */}
//                     </TouchableOpacity>
//                 </View>
//                 <View>
//                 {/* <Text>{user.name}</Text>
//                     <Text>{user.phone}</Text> */}
//                     <Text>asa</Text>
//                     <Text>091237</Text>
//                     <View>
//                         <TouchableOpacity onPress={() => setIsEdit(true)}><FontAwesomeIcon icon={faPenToSquare} /></TouchableOpacity>
//                         {/* <TouchableOpacity onPress={() => deleteAlert({ user })}><FontAwesomeIcon icon={faTrashCan} /></TouchableOpacity> */}
//                     </View>
//                 </View>
//             </View>
//         )
//     }
return(
    <View style={styles.container}>
        <View>

        </View>
        <View>
        <Text>Andri Priyadi</Text>
        <Text>089695991757</Text>
            <View>
                <TouchableOpacity><FontAwesomeIcon icon={faPenToSquare}/></TouchableOpacity>
                <TouchableOpacity><FontAwesomeIcon icon={faTrashCan}/></TouchableOpacity>
            </View>
        </View>
    </View>
)
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 'auto',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    }
})
