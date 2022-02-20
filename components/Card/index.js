import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;

const Card = ({info}) => {
  const getScoreColor = score => {
    if (score <= 10 && score >= 9) return '#7B8E3A';

    if (score < 9 && score >= 8) return 'orange';

    return '#7B8E3A';
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        {info.hasMinistryOfHealthCertificate && (
          <View style={styles.cardHotelImageHealtyStatusContainer}>
            <MaterialCommunityIcons
              name={'virus-off'}
              color={'white'}
              size={12}
            />
            <Text style={styles.cardHotelImageHealtyStatusText}>
              {' '}
              Sağlık Sertifikalı
            </Text>
          </View>
        )}
        <View style={styles.cardHotelIsFavourite}>
          {info.isFavourite ? (
            <AntDesign name={'heart'} color={'red'} size={25} />
          ) : (
            <AntDesign name={'hearto'} color={'white'} size={25} />
          )}
        </View>
        <View
          style={[
            styles.cardHotelCustomerScoreContainer,
            {
              backgroundColor: getScoreColor(info.customerScore),
            },
          ]}>
          <Text style={styles.cardHotelCustomerScoreText}>
            {info.customerScore}
          </Text>
        </View>
        <Image
          style={styles.cardImageContainer}
          source={{
            uri: info.photoPath,
          }}
        />
      </View>
      <View style={styles.cardTextContainer}>
        <View style={styles.cardTextLeftSide}>
          <Text style={styles.cardHotelName}>{info.hotelName}</Text>
          <Text style={styles.cardHotelLocation}>
            <Entypo name={'location-pin'} color={'#83C0E5'} />
            {info.areaName} - {info.subAreaName}
            {info.subAreaDetailName ? ',' : null} {info.subAreaDetailName}
          </Text>
          <Text style={styles.cardHotelAccommodation}>
            {info.accommodation}
          </Text>
          <Text style={styles.cardHotelCampaignName}>
            <MaterialCommunityIcons
              name={'brightness-percent'}
              color={'green'}
              size={13}
            />{' '}
            {info.campaignName}
          </Text>
        </View>
        <View style={styles.cardTextRightSide}>
          <Text style={styles.cardHotelPrice}>
            <Fontisto name={'tl'} color={'red'} />
            {info.price.toFixed(2)}
          </Text>
          <Text style={styles.cardHotelDiscountPrice}>
            <Fontisto name={'tl'} color={'#83C0E5'} />
            {info.discountPrice.toFixed(2)}
          </Text>
          <Text style={styles.cardHotelPerPersonPrice}>gecelik kişi başı</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 3,
    borderWidth: 0.4,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: 'white',
  },
  cardHotelIsFavourite: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    width: 45,
    padding: 5,
  },
  cardHotelImageHealtyStatusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'green',
    color: 'white',
    zIndex: 1,
    bottom: 10,
    left: 10,
    position: 'absolute',
  },
  cardHotelImageHealtyStatusText: {
    color: 'white',
    fontSize: 10,
  },
  cardHotelCustomerScoreContainer: {
    width: 45,
    zIndex: 1,
    top: 10,
    right: 10,
    position: 'absolute',
    padding: 5,
  },
  cardHotelCustomerScoreText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImageContainer: {
    resizeMode: 'cover',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  cardTextLeftSide: {
    padding: 10,
    width: '75%',
  },
  cardTextRightSide: {
    alignItems: 'flex-end',
    padding: 10,
    width: '25%',
  },
  cardHotelName: {
    color: '#1E4865',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardHotelLocation: {
    fontSize: 12,
  },
  cardHotelAccommodation: {
    padding: 4,
    borderWidth: 1,
    color: '#1E4865',
    borderColor: '#1E4865',
    width: 130,
    fontSize: 12,
    textAlign: 'center',
  },
  cardHotelCampaignName: {
    color: 'green',
    fontSize: 11,
  },
  cardHotelPrice: {
    color: 'red',
    textDecorationLine: 'line-through',
    fontSize: 13,
  },
  cardHotelDiscountPrice: {
    color: '#83C0E5',
    fontSize: 16,
  },
  cardHotelPerPersonPrice: {
    fontSize: 11,
  },
});

export default Card;
