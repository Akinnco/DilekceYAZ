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
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ww, wh} from '../../../helpers/responsive';

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
          name: 'Ögrenci Dilekceleri',
          status: true,
        }}
        right={null}
      />

      <ScrollView style={styles.container}>
        <View
          style={{
            height: wh(0.2),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: ww(0.4),
              height: wh(0.2),
            }}
            source={require('../../../assets/school.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: 'black',
            width: ww(1),
            height: wh(0.07),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{color: 'white', fontSize: wh(0.025), marginLeft: ww(0.08)}}>
            Hiç kimse başarı merdivenlerini elleri cebinde tırmanmamıştır..
          </Text>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Notitiraz')}>
            <View style={styles.icon}>
              <Icon name="angle-right" size={30} color="white" />
            </View>
            <Text style={styles.buttonText}>Sınav İtiraz Dilekcesi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonyakinda}>
            <Text style={styles.buttonText1}>
              Kayıt Dondurma Dilekcesi (Yakında)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonyakinda}>
            <Text style={styles.buttonText1}>
              Kayıt Sildirme Dilekcesi (Yakında)
            </Text>
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
  buttonyakinda: {
    width: ww(0.75),
    height: wh(0.07),
    backgroundColor: '#979797',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wh(0.01),
    borderRadius: wh(0.017),
    marginLeft: ww(0.09),
  },
  button: {
    width: '90%',
    height: wh(0.07),
    backgroundColor: '#3A7FE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wh(0.01),
    borderRadius: wh(0.017),
    flexDirection: 'row',
  },
  buttonText: {
    flex: 5,
    color: '#F0EBD8',
    fontSize: ww(0.035),
    fontWeight: '600',
  },
  buttonText1: {
    color: '#F0EBD8',
    fontSize: wh(0.015),
  },
  buttonArea: {
    marginLeft: wh(0.025),
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
});
