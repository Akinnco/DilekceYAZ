import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home/Home';
import Pdf from './Screens/Data/Ogrenci/Pdf';
import {Notitiraz, OgrenciIndex} from './Screens/Data/Ogrenci';
import {
  TrafikIndex,
  criminalObjection,
  trafficOutput,
} from './Screens/Data/Trafik';
import {workIndex, resignation, resignationpdf} from './Screens/Data/Work';
import {
  billIndex,
  electricityBill,
  electricityBillPdf,
  waterBill,
  waterBillPdf,
  naturalGas,
  naturalGasPdf,
} from './Screens/Data/Bill';
// import {suscribeteindex} from './Screens/Data/Suscribete';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OgrenciScreen" component={OgrenciScreen} />
      <Stack.Screen name="TrafficScreen" component={TrafficScreen} />
      <Stack.Screen name="WorkScreen" component={WorkScreen} />
      <Stack.Screen name="BillScreen" component={BillScreen} />
      {/* <Stack.Screen name="Suscribeteindex" component={Suscribeteindex} /> */}
    </Stack.Navigator>
  );
};

const OgrenciScreen = () => {
  return (
    <Stack.Navigator initialRouteName="OgrenciIndex" headerMode="none">
      <Stack.Screen name="Notitiraz" component={Notitiraz} />
      <Stack.Screen name="OgrenciIndex" component={OgrenciIndex} />
      <Stack.Screen name="Pdf" component={Pdf} />
    </Stack.Navigator>
  );
};

const TrafficScreen = () => {
  return (
    <Stack.Navigator initialRouteName="TrafikIndex" headerMode="none">
      <Stack.Screen name="TrafikIndex" component={TrafikIndex} />
      <Stack.Screen name="criminalObjection" component={criminalObjection} />
      <Stack.Screen name="trafficOutput" component={trafficOutput} />
    </Stack.Navigator>
  );
};

const WorkScreen = () => {
  return (
    <Stack.Navigator initialRouteName="workIndex" headerMode="none">
      <Stack.Screen name="workIndex" component={workIndex} />
      <Stack.Screen name="resignation" component={resignation} />
      <Stack.Screen name="resignationpdf" component={resignationpdf} />
    </Stack.Navigator>
  );
};

// const Suscribeteindex = () => {
//   return (
//     <Stack.Navigator initialRouteName="suscribeteindex" headerMode="none">
//       {/* <Stack.Screen name="suscribeteindex" component={suscribeteindex} /> */}
//     </Stack.Navigator>
//   );
// };

const BillScreen = () => {
  return (
    <Stack.Navigator initialRouteName="billIndex" headerMode="none">
      <Stack.Screen name="billIndex" component={billIndex} />
      <Stack.Screen name="electricityBill" component={electricityBill} />
      <Stack.Screen name="waterBill" component={waterBill} />
      <Stack.Screen name="naturalGas" component={naturalGas} />
      <Stack.Screen name="electricityBillPdf" component={electricityBillPdf} />
      <Stack.Screen name="waterBillPdf" component={waterBillPdf} />
      <Stack.Screen name="naturalGasPdf" component={naturalGasPdf} />
    </Stack.Navigator>
  );
};

export default Router;
