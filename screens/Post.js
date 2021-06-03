import * as React from 'react';
import {View, Image, FlatList, RefreshControl} from 'react-native';
import Home from './Home';
import {Fab} from 'native-base';

const Offer = [
  {
    id: '1',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Coffee ?',
    country: 'Singapore',
    like: '11 likes',
  },
  {
    id: '2',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Tea',
    country: 'London',
    like: '9 likes',
  },
  {
    id: '3',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Tea',
    country: 'America',
    like: '8 likes',
  },
  {
    id: '4',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Tea',
    country: 'Italy',
    like: '11 likes',
  },
  {
    id: '5',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Tea',
    country: 'UAE',
    like: '6 likes',
  },
  {
    id: '6',
    OfferImage: require('./assets/a.png'),
    description: 'Cup of Tea',
    country: 'Nigeria',
    like: '2 likes',
  },
];

function Post({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={Offer}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Home navigation={navigation} item={item} />
        )}
        refreshControl={<RefreshControl tintColor={'green'} />}
      />
      <Fab
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('Add')}>
        <Image
          source={require('./assets/add.png')}
          style={{height: 30, width: 30}}
        />
      </Fab>
    </View>
  );
}

export default Post;
