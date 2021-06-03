import {Item, Form, Input, Image, Button} from 'native-base';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
// import shortid from 'shortid';
// import AsyncStorage from '@react-native-community/async-storage';

const Add = () => {
  // const [description, setDescription] = useState('');
  // const [country, setCountry] = useState('');

  // const [title, setTitle] = useState('');
  // const [place, setPlace] = useState('');

  // const addToList = async () => {
  //   try {
  //     if (!title || !place) {
  //       alert('Please add both feilds');
  //     }
  //     const seasonAdd = {
  //       id: shortid.generate(),
  //       title,
  //       place,
  //     };
  //     const storedValue = await AsyncStorage.getItem('@post_list');
  //     const prevList = await JSON.parse(storedValue);

  //     if (!prevList) {
  //       const newList = [seasonAdd];
  //       await AsyncStorage.setItem('@post_list', JSON.stringify(newList));
  //     } else {
  //       prevList.push(seasonAdd);
  //       await AsyncStorage.setItem('@post_list', JSON.stringify(prevList));
  //     }
  //     navigation.navigate('Home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Form>
        <Item style={styles.formItem}>
          <TextInput
            onBlur={validateName}
            style={styles.inputStyles}
            value={description}
            onChangeText={text => setDescription(text)}
            placeholder="Description"
          />
        </Item>
        <Item>
          <TextInput
            onBlur={validateName}
            style={styles.inputStyles}
            value={country}
            onChangeText={text => setCountry(text)}
            placeholder="Country"
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
        <Text style={{color: '#fff'}}>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

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
