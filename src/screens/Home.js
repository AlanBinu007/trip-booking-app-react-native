import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  COLORS,
  SIZES,
  FONTS,
  images,
  optionItems,
  destinations,
  styles,
} from '../constants';

const Home = ({navigation}) => {
  const OptionItem = ({icon, bgColor, label, onPress}) => (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <View style={{height: 60, width: 60}}>
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{height: 30, width: 30, tintColor: COLORS.white}}
          />
        </LinearGradient>
      </View>
      <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderDestination = ({item, index}) => {
    const destinationStyle = index === 0 ? {marginLeft: SIZES.padding} : {};
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate('DestinationDetail');
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15,
          }}
        />
        <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Banner  */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <Image
          source={images.homeBanner}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 15}}
        />
      </View>

      {/* Options */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          {optionItems.slice(0, 4).map(({icon, bgColor, label}, index) => (
            <OptionItem
              key={index + '-' + label}
              icon={icon}
              bgColor={bgColor}
              label={label}
              onPress={() => console.log(`${label} Press.`)}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.padding,
          }}>
          {optionItems.slice(4).map(({icon, bgColor, label}, index) => (
            <OptionItem
              key={index + '-' + label}
              icon={icon}
              bgColor={bgColor}
              label={label}
              onPress={() => console.log(`${label} Press.`)}
            />
          ))}
        </View>
      </View>

      {/* Destination */}
      <View style={{flex: 1}}>
        <Text
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            ...FONTS.h3,
          }}>
          Destination
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item, index) => renderDestination(item, index)}
        />
      </View>
    </View>
  );
};

export default Home;
