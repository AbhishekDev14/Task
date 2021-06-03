import {Item, Form, Input, Image, Button} from 'native-base';
import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Edit = ({route, navigation}) => {

  // const [title, setTitle] = useState('');
  // const [place, setPlace] = useState('');
  // const [id, setId] = useState(null);

  // const update = async () => {
  //   try {
  //     if (!title || !place) {
  //       alert('Please add both feilds');
  //     }
  //     const seasontoUpdate = {
  //       id,
  //       title,
  //       place,
  //       isWatched: false,
  //     };
  //     const storedValue = await AsyncStorage.getItem('@post_list');
  //     const list = await JSON.parse(storedValue);

  //     list.map(singleSeason => {
  //       if (singleSeason.id == id) {
  //         singleSeason.title = title;
  //         singleSeason.place = place;
  //       }
  //       return singleSeason;
  //     });
  //     await AsyncStorage.setItem('@post_list', JSON.stringify(list));
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   const {season} = route.params;
  //   const {id, title, place} = season;
  //   setId(id);
  //   setTitle(title);
  //   setPlace(place);
  // }, []);

  return (
    <View style={styles.container}>
      <Form>
        <Item style={styles.formItem}>
          <Input
            placeholder= "Description"
            //value=
            style={{color: '#000'}}
            onChangeText={text => setDescription(text)}
          />
        </Item>
        <Item>
          <Input
            placeholder="country"
            //value={country}
            style={{color: '#000'}}
            onChangeText={text => setCountry(text)}
          />
        </Item>
      </Form>
      <TouchableOpacity
        style={{
          height: 40,
          marginTop: 30,
          width: 310,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
        }}>
        <Text style={{color: '#fff'}}>Edit Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formItem: {
    width: 320,
    marginHorizontal: 20,
    borderBottomColor: 'gray',
  },
});
