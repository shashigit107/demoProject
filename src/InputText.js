
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
const InputText = ({ Placeholder, icon,data }) => {
    console.log("shashi", icon)
    return (

        <View style={styles.container}>
            <View style={[styles.InputField, styles.shadowProp]} >
                <TextInput 
                placeholder={Placeholder}
                value={data}
                onChange={onChangeField}
                ></TextInput>
                <TouchableOpacity style={styles.icons}>
                {icon}
                </TouchableOpacity>
    
            </View>
        </View>
    )
}
export default InputText
const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
        

    },
    icons:{

        paddingRight:10
        
    },
    InputField: {
        flexDirection: "row",
        justifyContent:"space-between",
        borderRadius: 4,
        fontSize: 18,
     
        paddingLeft: 12,
        paddingTop: 5,
        paddingBottom: 5


    },
    shadowProp: {
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 2
        },
        elevation: 6

    }

})