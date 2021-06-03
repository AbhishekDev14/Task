import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
// import {Container} from 'native-base'
// import AsyncStorage from '@react-native-community/async-storage';
// import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
export default function Home(props) {
  const {item, navigation} = props;
  const {OfferImage, description, country, like} = item;

  // const [listOfCards, setListOfCards] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const isFocused = useIsFocused();

  // onst getList = async () => {
  //   setLoading(true);

  //   const storedValue = await AsyncStorage.getItem('@card_list');

  //   if (!storedValue) {
  //     setListOfCards([]);
  //   }

  //   const list = JSON.parse(storedValue);
  //   setListOfCards(list);

  //   setLoading(false);
  // };

  // const deleteCard = async id => {
  //   const newList = await listOfCards.filter(list => list.id !== id);
  //   await AsyncStorage.setItem('@card_list', JSON.stringify(newList));

  //   setListOfCards(newList);
  // };
  // useEffect(() => {
  //   getList();
  // }, [isFocused]);

  // if (loading) {
  //   return (
  //     <Container style={styles.container}>
  //       <Spinner color="#00b7c2" />
  //     </Container>
  //   );
  // }

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity
            style={{
              height: height * 0.15,
              marginHorizontal: 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: width * 0.025,
              backgroundColor: '#fff',
              marginVertical: 10,
            }}>
            <Image
              source={OfferImage}
              style={{
                height: height * 0.15,
                width: width * 0.25,
                borderRadius: width * 0.02,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <View style={{width: width * 0.35, padding: 15}}>
          <Text
            style={{
              width: width * 0.35,
              marginTop: 15,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            {description}
          </Text>
          <Text style={{width: width * 0.35, marginVertical: 2, color: 'gray'}}>
            {country}
          </Text>
          <Text style={{width: width * 0.35, marginTop: 25, color: '#D3D3D3'}}>
            {like}
          </Text>
        </View>
        <View style={{width: width * 0.35}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Edit', {
                item1: OfferImage,
                item2: description,
                item4: country,
                item5: like,
              })
            }>
            <Image
              source={require('./assets/edit.png')}
              style={{
                height: 20,
                width: 20,
                marginTop: 30,
                marginHorizontal: 100,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./assets/trash.png')}
              style={{
                height: 20,
                width: 20,
                marginTop: 20,
                marginHorizontal: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// onPress={() =>
//   navigation.navigate('News', {
//     item1: OfferImage,
//     item2: description,
//     item4: country,
//     item5: like,
//   })
// }>

{
  /* <TouchableOpacity onPress={() => navigation.navigate('Edit', {
              item1: OfferImage,
              item2: description,
              item4: country,
              item5: like,
            })}></TouchableOpacity> */
}
