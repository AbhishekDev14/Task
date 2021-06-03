import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {Text, Form, Item, Input, H1} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Post from './screens/Post';
import Edit from './screens/Edit';
import Add from './screens/Add';

function LoginScreen({navigation}) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [UserError, setUserError] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  function validatePassword() {
    var passwordRegex = /^[a-zA-Z ]+$/;

    if (Password == '' || Password == undefined || Password == null) {
      setPasswordError('Please Enter the Password');
      return 0;
    } else if (!passwordRegex.test(Password)) {
      setPasswordError('Please Enter the Valid Password!');
      return 0;
    } else if (Password.length < 8) {
      setPasswordError('Password must contain atleast 8 character.');
      return 0;
    } else {
      setPasswordError('');
      return 1;
    }
  }

  function validateName(name) {
    var nameRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var name = Username.trim();
    if (name == '' || name == undefined || name == null) {
      setUserError('Please enter your name');
      return 0;
    } else if (!nameRegex.test(name)) {
      setUserError('Please Enter the Valid UserName!');
      return 0;
    } else if (name.length < 2) {
      setUserError('Please enter atleast 2 character');
      return 0;
    } else {
      setUserError('');
      return 1;
    }
  }

  function submit() {
    const name = validateName();
    const pass = validatePassword();

    if (name == 1 && pass == 1) {
      navigation.navigate('Post');
      Alert.alert('Successfully Logged In');
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground
        source={require('./screens/assets/login.jpg')}
        style={{
          height: '100%',
          width: '100%',
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <Image
        source={require('./screens/assets/check.png')}
        style={{height: 50, width: 50}}
      />
      <H1 style={{fontWeight: 'bold', color: '#fff', marginTop: 5}}>BRAND</H1>
      <Form style={{marginVertical: 70}}>
        <Item style={styles.formItem}>
          <Image
            source={require('./screens/assets/mail.png')}
            style={{height: 20, width: 20}}
          />
          <Input
            placeholder="useremail@gmail.com"
            placeholderTextColor= '#fff'
            style={{color: '#fff'}}
            value={Username}
            onChangeText={text => setUsername(text)}
          />
        </Item>
        <Text style={{color: 'red', marginTop: 10}}>{UserError}</Text>
        <Item style={styles.formItem}>
          <Image
            source={require('./screens/assets/padlock.png')}
            style={{height: 23, width: 20}}
          />
          <Input
            placeholder="*********"
            placeholderTextColor= '#fff'
            secureTextEntry={true}
            style={{color: '#fff'}}
            value={Password}
            onChangeText={text => setPassword(text)}
          />
        </Item>
        <Text style={{color: 'red', marginTop: 10}}>{PasswordError}</Text>
        <TouchableOpacity
          style={{
            height: 40,
            marginLeft: 19,
            width: 310,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}
          onPress={() => submit()}>
          <Text style={{color: 'blue'}}>Login</Text>
        </TouchableOpacity>
      </Form>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  formItem: {
    width: 320,
    marginHorizontal: 20,
    borderBottomColor: 'gray',
  },
});
