import React from 'react'
import { View, StyleSheet, Image, FlatList, Text, TouchableOpacity } from 'react-native'

function Item({ item }) {
  return (
      <View style={{height:200}}>
        {item.image}
      </View>

  );
}
const sampleslider = (prop) => {
  const imageList = {
    data1: [
      {
        image: <Image  style={styles.imga1} source={require('../img/Home/imgban1/b1.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b2.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b3.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b4.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b5.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban1/b6.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b7.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b8.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b9.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b10.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban1/b11.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b12.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b13.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b14.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b15.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban1/b16.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b17.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b18.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b19.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban1/b20.jpg')} />
      },
    ],
    data2:[
      {
        image: <Image  style={styles.imga1} source={require('../img/Home/imgban2/a1.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a2.png')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a3.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a4.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a5.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban2/a6.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a7.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a8.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a9.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a10.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban2/a11.png')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a12.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a13.png')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a14.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a15.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban2/a16.png')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a17.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a18.png')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a19.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban2/a20.jpg')} />
      },
    ],
    data3:[
      {
        image: <Image  style={styles.imga1} source={require('../img/Home/imgban3/c1.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c2.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c3.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c4.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c5.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban3/c6.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c7.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c8.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c9.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c10.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban3/c11.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c12.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c13.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c14.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c15.jpg')} />
      },
      {
        image: <Image style={styles.imga1} source={require('../img/Home/imgban3/c16.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c17.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c18.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c19.jpg')} />
      },
      {
        image: <Image style={styles.imga} source={require('../img/Home/imgban3/c20.jpg')} />
      },
    ],
  }
  return (
    <View>
      <View style={styles.horizontalLine} />
    {prop.imgba1 &&  <View style={{height:160}}>
      <FlatList
        horizontal
        data={imageList.data1}
        renderItem={Item}
        showsHorizontalScrollIndicator={false}
      />
      </View>}
      {prop.imgba2 &&  <View style={{height:160}}>
      <FlatList
        horizontal
        data={imageList.data2}
        renderItem={Item}
        showsHorizontalScrollIndicator={false}
      />
      </View>}
      {prop.imgba3 &&  <View style={{height:160}}>
      <FlatList
        horizontal
        data={imageList.data3}
        renderItem={Item}
        showsHorizontalScrollIndicator={false}
      />
      </View>}
      <View>
        <View style={styles.horizontalLine} />
        
        <TouchableOpacity>
        <Text style={{ color: '#1a7abf',marginHorizontal:10 }}>SEE ALL</Text></TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 10,
  },
  
  imga1: {
    width: 100,
    height: 160,
    padding: 10
  },
  imga: {
    width: 100,
    height: 160,
    padding: 10,
    marginLeft: 10
  },

});
export default sampleslider;
