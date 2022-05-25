import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Header from '../../Components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ww, wh} from '../../helpers/responsive';
import { InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from '@react-native-firebase/admob';


const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Home = ({navigation}) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
      <Header
        left={{
          icon: 'arrow-left',
          status: true,
        }}
        center={{
          name: 'Ne için Dilekçe Yazmak İstiyorsunuz?',
          status: true,
        }}
        right={null}
      />
               <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
      {/* <BannerAd size={BannerAdSize.BANNER} unitId={'ca-app-pub-5684915194894112~2095178084'} /> */}
      <ScrollView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('OgrenciScreen')}>
            <View style={styles.icon}>
              <Text style={styles.buttonText}>Öğrenci Dilekçesi</Text>
              <Text style={styles.header2}>+Sınav İtiraz Dilekçesi</Text>
              <Text style={styles.header3}>
                +Kayıt Dondurma Dilekçesi (Yakında)
              </Text>
              <Text style={styles.header4}>
                +Kayıt Silme Dilekçesi (Yakında)
              </Text>
              <Image
                source={require('../../assets/school.png')}
                style={{
                  resizeMode: 'contain',
                  width: ww(0.168),
                  height: wh(0.1),
                  marginLeft: ww(0.062),
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('WorkScreen')}
            style={styles.button}>
            <View style={styles.icon}>
              <Image
                source={require('../../assets/office.png')}
                style={{
                  resizeMode: 'contain',
                  width: ww(0.15),
                  height: wh(0.1),
                  marginLeft: ww(0.07),
                  borderRadius: wh(2),
                }}
              />
            </View>
            {/* style={{}} */}

            <Text style={styles.buttonText1}>İş Dilekçeleri</Text>
            <Text style={styles.header2}>+İstifa Dilekçesi</Text>
            <Text style={styles.header3}>+İş Dilekçesi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('TrafficScreen')}
            style={styles.button}>
            <View style={styles.icon}>
              <Image
                source={require('../../assets/traffic.png')}
                style={{
                  resizeMode: 'contain',
                  width: ww(0.13),
                  height: wh(0.1),
                  marginLeft: ww(0.08),
                }}
              />
            </View>
            <Text style={styles.buttonText}>Trafik Dilekçeleri</Text>
            <Text style={styles.header2}>+Trafik Cezası İtiraz Dilekçesi</Text>
          </TouchableOpacity>
 
          <TouchableOpacity
            onPress={() => navigation.navigate('BillScreen')}
            style={styles.button}>
            <View style={styles.icon}>
              <Image
                source={require('../../assets/fatura.png')}
                style={{
                  resizeMode: 'contain',
                  height: wh(0.1),
                  borderRadius: wh(0.555),
                  width: ww(0.13),
                  marginLeft: ww(0.08),
                }}
              />
            </View>

            <Text style={styles.buttonText2}>Fatura İtiraz Dilekçeleri</Text>
            <Text style={styles.header2}>
              +Elektrik Faturası İtiraz Dilekçesi
            </Text>
            <Text style={styles.header3}>+Su Faturası İtiraz Dilekçesi</Text>
            <Text style={styles.header4}>
              +Doğalgaz Faturası İtiraz Dilekçesi
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Suscribeteindex')}
            style={styles.button}>
            <View style={styles.icon}>
              <Image
                source={require('../../assets/abone.png')}
                style={{
                  resizeMode: 'contain',
                  height: wh(0.1),
                  width: ww(0.13),
                  marginLeft: ww(0.08),
                }}
              />
            </View>

            <Text style={styles.buttonText}>Abonelik İşlemleri</Text>
            <Text style={styles.header2}>+++++</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </Fragment>
  );
};
export default Home;
const styles = StyleSheet.create({
  button: {
    width: ww(0.85),
    height: wh(0.13),
    marginLeft: ww(0.01),
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: ww(0.05),
    marginBottom: wh(0.025),
  },
  buttonText: {
    color: 'black',
    fontSize: wh(0.017),
    textAlign: 'center',
    fontWeight: 'bold',
    width: ww(0.7),
    position: 'absolute',
    marginLeft: ww(0.1),
  },
  buttonText1: {
    color: 'black',
    fontSize: wh(0.017),
    textAlign: 'center',
    fontWeight: 'bold',
    width: ww(0.7),
    position: 'absolute',
    marginLeft: ww(0.068),
  },
  buttonText2: {
    color: 'black',
    fontSize: wh(0.017),
    textAlign: 'center',
    fontWeight: 'bold',
    width: ww(0.7),
    position: 'absolute',
    marginLeft: ww(0.13),
  },
  buttonArea: {
    alignItems: 'center',
    marginTop: wh(0.02),
  },
  header2: {
    position: 'absolute',
    marginTop: wh(0.03),
    marginLeft: wh(0.15),
  },
  header4: {
    position: 'absolute',
    marginTop: wh(0.07),
    marginLeft: wh(0.15),
  },
  header3: {
    position: 'absolute',
    marginTop: wh(0.05),
    marginLeft: wh(0.15),
  },
});
