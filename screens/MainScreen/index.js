import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Card from '../../components/Card';

const MainScreen = () => {
  const [hotels, setHotels] = useState([]);
  const [activityIndicatorStatus, setActivityIndicatorStatus] = useState(true);

  useEffect(() => {
    getData()
      .then(dataList => {
        if (dataList.length != 0) {
          setHotels(JSON.parse(dataList));
        }
      })
      .then(() => setActivityIndicatorStatus(false))
      .catch(error => console.log('err:', error.message));
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        'https://api.github.com/gists/de2282f01c739a5c8fcbffbb9116e277',
      );
      return result.data.files['hotels.json'].content;
    } catch (e) {
      console.log('failed message', e.message);
      return [];
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {activityIndicatorStatus ? (
        <View style={styles.indicatorStyle}>
          <ActivityIndicator size={'large'} color={'aqua'} />
        </View>
      ) : (
        <FlatList
          data={hotels}
          renderItem={({item}) => <Card info={item} />}
          keyExtractor={({hotelId}, index) => `${hotelId}`}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E6ED',
  },
  indicatorStyle: {
    width: '100%',
    height: '100%',
  },
});
export default MainScreen;
