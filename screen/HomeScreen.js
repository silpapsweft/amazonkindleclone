import React,{useState}from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import Header  from '../components/header';
import Slider from '../components/sampleslider'

const HomeScreen = () => {

    return (
        <View>

        <Header search={true}/>
        {/*Main Scroller*/}

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom:70}}>
               
               {/*Welcome*/}

                <View style={styles.container2}>
                    <Text style={styles.welcomeText}>Welcome to Kindle!</Text>
                    <Text style={styles.WelText}>Find your next great read by browsing top picks and recommendations below, or shop the store.</Text>
                </View> 

                {/*Top page*/}

                <View style={styles.container3}>
                    <Text>TOP PAGE TURNERS</Text>
                    <Text style={styles.italicText}>Other readers finished these best selling books quickly</Text>
                    <Slider
                    imgba1={true}/>
                </View>

                {/*New Release*/}
           
                <View style={styles.container3}>
                    <Text style={{marginHorizontal:10}}>NEW RELEASES IN KINDLE STORE</Text>
                    <Slider imgba2={true}/>
                </View>

                {/*Most wished*/}

                <View style={styles.container3}>
                    <Text style={{marginHorizontal:10}}>MOST WISHED FOR KINDLE BOOKS</Text>
                    <Slider imgba3={true}/>
                    </View>
            </View>
        </ScrollView></View>
    )
}
const styles=StyleSheet.create({

    container2:{
        backgroundColor:"#fff",
        height:110,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    welcomeText:{
        fontSize:16,
        marginBottom:10,
        fontWeight:'500'
    },
    WelText:{
        textAlign:'center',
        fontSize:13
    },
    container3:{
        backgroundColor:"#fff",
        height:300,
        marginTop:10,
        alignItems:'flex-start',
        paddingLeft:20,
        paddingTop:20,
    
    },
    italicText:{
        color:"#888888",
        fontStyle:'italic',
        fontSize:12
    },
    horizontalLine:{
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
        marginBottom: 10
    },
    horizontalLine1:{
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 30,
        marginBottom: 10
    },
    imga1:{
        width:100,
        height:170,
        padding:10
    },
    imga:{
        width:100,
        height:170,
        padding:10,
        marginLeft:10
    },
    
});
export default HomeScreen;
