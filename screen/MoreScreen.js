import React from 'react'
import { View,StyleSheet,Image,Text,TouchableOpacity,FlatList} from 'react-native'
import Header from '../components/header'

function Item({ item }) {
    return (
      <View ><TouchableOpacity style={styles.container}>
        {item.image}
        <View >
          <Text  style={styles.text}>{item.name}</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={styles.horizontalLine}
      />
    );
  }
const MoreScreen =(prop)=>{
    state={
        data:[
            {key:1,
            name:"Sign In with Amazon",
            image: <Image style={styles.img} source={require('../img/More/user.png')}/>},
            {key:2,
            name:"Sync",
            image:<Image style={styles.img} source={require('../img/More/sync.png')}/>},
            {key:3,
            name:"Settings",
            image:<Image style={styles.img} source={require('../img/More/setting.png')}/>},
            {key:4,
            name:"Info",
            image:<Image style={styles.img} source={require('../img/More/info-icon.png')}/>},
        ]
    }
        return (
            <View >
                <Header search={true}/>
               
                    <FlatList
                        data={this.state.data}
                        renderItem={Item}
                        keyExtractor={item => item.key}
                        ItemSeparatorComponent = { this.FlatListItemSeparator }
                        ListFooterComponent= { this.FlatListItemSeparator }

                    />
            </View>
        )
    }
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:12,
    
    },
    img:{
        width:20,
        height:20,
        marginRight:20,
    },
    text:{
        fontWeight:'600',
        fontSize:16,
    },
     
      horizontalLine:{
        borderBottomWidth: 0.8,
        borderBottomColor: '#dfe6e9',
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20,
        marginRight:20
    },
    });
export default MoreScreen;
