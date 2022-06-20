import axios from "axios";
import { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from "react-native";


export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: []

        }
    }
    componentDidMount() {

        const getData = async () => {
            try {
                const response = await axios.post("https://techeruditedev.xyz/projects/plie-api/public/api/events-listing")

                const events = await response.data.data
                console.log("shashi", events)
                this.setState({
                    apiData: events
                })
            }
            catch (err) {
                console.log("catch", err)
            }
        }
        getData()
    }


    getForthColumnFlatList(keywords) {

        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {keywords.map((data) => {
                    return (
                        <TouchableOpacity style={styles.forthColumnScrollView}>
                            <Text style={styles.forthColumnScrollViewText}>{data}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )

    }
    getCard = ({ item }) => {
        return (
            <View style={styles.firstStage}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: `${item?.event_profile_img}` }}
                    />
                </View>
                <View style={{ flexDirection: "column", marginHorizontal: 10, flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.cardTitleHeader}>
                            <Text style={styles.cardTitle}>{item?.city}</Text>
                            <Text style={styles.cardTitle}>:</Text>

                            <Text style={[styles.cardTitle, { flex: 1 }]}>{item.event_name}</Text>
                        </View>
                        <TouchableOpacity style={styles.cardIcon}>
                            <Icon name="arrow-right" size={15} color="black" />
                        </TouchableOpacity>



                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.secondColumnText}>{item?.readable_from_date}</Text>
                            <Text style={styles.secondColumnText}>{item?.readable_to_date}</Text>


                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.secondColumnRightText}>{item?.city}</Text>
                            <Text style={styles.secondColumnRightText}>{item?.country}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.thirdColumnText}>{item?.event_price_from}</Text>
                        <Text >-</Text>
                        <Text style={styles.thirdColumnText}>{item?.event_price_to}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1 }}>
                            {this.getForthColumnFlatList(item.keywords)}

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles.cardIcon}>
                                <Icon name="download" size={15} color="black" />
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.cardIcon} >
                                <Icon name="heart" size={15} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.userName}>{this.props.route.params.userName}</Text>
                    <Text style={styles.userActivity}>are you ready to dance?</Text>
                </View>
                <View style={{ flex: .78 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.apiData.events}
                        renderItem={this.getCard}
                        keyExtractor={item => item.id}
                        extraData={this.state}
                    />
                </View>
                <View style={styles.mainu}>
                    <TouchableOpacity>
                        <Icon name="search" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="home" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="heart" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="user" size={25} color="black" />
                    </TouchableOpacity>

                </View>
            </View>




        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#DCDCDC",
        width: "100%",
        height: "100%"



    },
    tinyLogo: {
        width: 80,
        height: 80,
        borderRadius: 5

    },
    Header: {
        flex: .15,
        flexDirection: "column",
        backgroundColor: "white",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    cardTitleHeader:{
        flexDirection: "row",
         flex: 1,
         marginBottom:5
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "bold",
        paddingRight: 5

    },
    secondColumnText: {
        fontSize: 10,
        color: "blue",
        paddingRight: 10

    },
    secondColumnRightText: {
        fontSize: 12,
        fontWeight: "300",
        paddingLeft: 5,
    },
    thirdColumnText: {
        fontSize: 15,
        fontWeight: "300"
    },
    forthColumnScrollView: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginRight: 10,
        marginTop:5


    },
    firstStage: {
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "black",
        borderRadius: 6,
        marginHorizontal: 10,
        marginRight: 10,
        padding: 10,
        marginBottom: 10

    },
    secondStage: {
        flexDirection: "column"
    },
    forthColumnScrollViewText: {
        paddingLeft: 5,
        paddingRight: 5,
        // paddingTop: 2,
        // paddingBottom: 2,
        fontSize: 12
    },
    userName: {
        fontSize: 25,
        fontWeight: "500"
    },
    userActivity: {
        fontWeight: "600"
    },
    mainu: {
        flex: .07,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",

        paddingLeft: 25,
        paddingRight: 25,
        alignItems: "center"

    },
    dashLine: {
        width: 10,
        height: 1,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 10
    },
    cardIcon: {
        paddingLeft: 10
    }
})