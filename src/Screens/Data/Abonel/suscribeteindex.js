import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {wh, ww} from '../../../helpers/responsive';
import Header from '../../../Components/header';
const Suscribeteindex = ({navigation}) => {
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
          name: 'En Kısa Sürede Açılıyoruz...',
          status: true,
        }}
        right={null}
      />
      <ImageBackground
        resizeMode="contain"
        style={{width: ww(1), height: wh(1)}}
        source={require('../../../assets/repair.png')}
      />
    </Fragment>
  );
};

export default Suscribeteindex;

const styles = StyleSheet.create({});
