import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import PhoneItem from "./PhoneItem";
import { useDispatch, useSelector } from "react-redux";
import { readData, selectPhonebooks } from "./reducers/phonebook";

export default function PhoneList({ keyword, sort, }:
    {
        keyword: string;
        sort: string;
    }) {
    // const dispatch: any = useDispatch()
    // const { phonebooks, page, pages } = useSelector(selectPhonebooks)
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             readData()
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     loadData()
    // }, [keyword, sort])
    // console.log(phonebooks)
    return (
        <View>
            {/* <FlatList
                data={phonebooks}
                renderItem={({ item }: { item: any }) => <PhoneItem user={item} />} /> */}
                <PhoneItem/>
        </View>
    )
}