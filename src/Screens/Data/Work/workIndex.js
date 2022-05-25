import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../../Components/header';
import {ww, wh} from '../../../helpers/responsive';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OgrenciIndex = ({navigation}) => {
  return (
    <Fragment>
      <Header
        left={{
          icon: 'back',
          name: 'Geri',
          action: () => navigation.navigate('Home'),
          status: true,
        }}
        center={{
          name: 'İş Dilekceleri',
          status: true,
        }}
        right={null}
      />

      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image
            // resizeMode="contain"
            style={{
              resizeMode: 'contain',
              width: ww(0.5),
            }}
            source={require('../../../assets/office.png')}
          />
          <View
            style={{
              backgroundColor: 'black',
              width: ww(1),
              height: wh(0.07),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: wh(0.025)}}>
              Her başarı bir kararla başlar.
            </Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('resignation')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
              }}>
              <Icon
                name="angle-right"
                size={30}
                color="white"
                style={{marginLeft: ww(0.08)}}
              />
            </View>
            <Text style={styles.buttonText}>İstifa Dilekcesi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('criminalObjection')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
              }}>
              <Icon
                name="angle-right"
                size={30}
                color="white"
                style={{marginLeft: ww(0.08)}}
              />
            </View>

            <Text style={styles.buttonText}>İş Başvuru Dilekcesi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Fragment>
  );
};
export default OgrenciIndex;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  button: {
    width: '90%',
    height: wh(0.07),
    backgroundColor: '#4C93FF',
    justifyContent: 'center',
    marginTop: wh(0.01),
    borderRadius: wh(0.017),
  },
  buttonText: {
    color: '#F0EBD8',
    fontSize: wh(0.016),
    fontWeight: '600',
    marginLeft: ww(0.17),
  },
  buttonArea: {
    alignItems: 'center',
  },
});
