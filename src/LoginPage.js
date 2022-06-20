import { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome'
// import Detail from "./Detail";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window")
export default class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            passwordView: false,
            email: "",
            password: ""
        }

    }
    seePasword = () => {
        this.setState({
            passwordView: !this.state.passwordView
        })
    }
    onClickEmail = (text) => {
        // console.log("email",text)
        this.setState({
            email: text
        })
    }
    onPasswordClick = (text) => {
        this.setState({
            password: text
        })
    }
    onClickSignIn = () => {
        if (this.state.email == "") {
            alert("please enter email")
        }
        else if (this.state.password == "") {
            alert("please enter password")
        } else {
            let username = ""
            let name = this.state.email.split("@")

            let nameArrayForm = name[0].split("")
            for (let i = 0; i < nameArrayForm.length; i++) {

                if ((nameArrayForm[i] >= "a" && nameArrayForm[i] <= "z") || (nameArrayForm[i] >= "A" && nameArrayForm[i] <= "Z")) {

                    username += nameArrayForm[i]
                }
            }
            console.log("unsername", username)
            this.props.navigation.navigate('detail', { userName: username });
        }

    }
    render() {
        return (
            <KeyboardAvoidingView enabled={true} style={styles.container}>

                <View style={styles.halfScreen}>
                    <Text style={styles.title}>PLie</Text>



                </View >
                <View style={[styles.loginScreen]}>
                    <View style={{ flex: .9 }}>
                        <View style={styles.loginContainer}>
                            <View>
                                <Text style={styles.text}>Email</Text>
                                <TextInput
                                    style={[styles.InputField, styles.shadowProp]}
                                    placeholder="Email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={this.onClickEmail}
                                ></TextInput>
                            </View>



                            <View>
                                <Text style={styles.text}>Password</Text>

                                <View style={[styles.shadowProp]}>
                                    <TextInput
                                        style={styles.InputField}
                                        placeholder="Password"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={!this.state.passwordView}
                                        value={this.state.password}
                                        onChangeText={this.onPasswordClick} />


                                    <TouchableOpacity style={{ paddingRight: 10, paddingTop: 7 }} onPress={this.seePasword}>
                                        <Icon name={this.state.passwordView ? "eye" : "eye-slash"} size={20} color="black" />
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <TouchableOpacity >
                                <Text style={styles.forgetPasword}>Forget Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onClickSignIn}>
                                <Text style={styles.signIn}>SignIn</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                        
                            <View style={styles.Line}>
                                <View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
                                <View>
                                    <Text style={{ padding: 5, fontSize: 20 }}>Or login from this</Text>
                                </View>
                                <View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
                            </View>


                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <TouchableOpacity style={{ paddingRight: 20 }}>
                                    <Icon name="facebook" size={20} color="#3b5998" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingRight: 20 }}>
                                    <Icon name="apple" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ paddingRight: 20 }}>
                                    <Icon name="google" size={20} color="red" />
                                </TouchableOpacity>
                            </View>

                        
                    
                    </View>

                </View>


            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: height,
        width: "100%",
    },
    InputField: {
        justifyContent: "space-between",
        alignContent: "space-between",
        borderRadius: 4,
        fontSize: 18,
        paddingLeft: 12,
        paddingTop: 5,
        paddingBottom: 5,
        flexGrow: 1,



    },
    shadowProp: {
        // flex:1,
        flexDirection: "row",
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 2
        },
        elevation: 6

    },
    text: {
        fontSize: 20,
        padding: 5
        // fontWeight: 600
    },
    title: {
        fontSize: 40,
        fontStyle: "italic"
    },
    loginContainer: {
        flex: 1,
        flexDirection: "column"

    },
    Line: {
           flex:.2,
        flexDirection: "row",
        alignItems: "center"
    },
    forgetPasword: {
        alignSelf: "flex-end"
    },
    signIn: {
        backgroundColor: "green",
        alignSelf: "flex-end",
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        marginTop: 20,
        marginBottom:40
    },
    halfScreen: {
        flex: .4,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //   height:"25%",
        backgroundColor: "grey"
    },
    loginScreen: {
        flex: .6,

        marginHorizontal: 20,
        marginRight: 20,
        marginTop: 40
    }
})