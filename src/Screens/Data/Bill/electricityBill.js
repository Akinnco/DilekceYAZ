import React, { useState, useRef, Fragment} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Header from '../../../Components/header';
import 'moment/min/moment-with-locales';

const waterBill = ({navigation}) => {
   
  // veriler
    const [tcno, setTcKimlik] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [money, setMoney] = useState('');
    const [oldmoney, setOldMoney] = useState('');
    const [workPlace, setworkPlace] = useState('');
    const [phone,setPhone]= useState('');
    





  // tarih2
  const [isDatePickerVisibleCriminal,setDatePickerVisibilityCriminal,] = useState(false);
  const [datePickerCriminal, setDatepickerCriminal] = useState('');

 



 

  // ceza tarihi
  const isShowDateCriminal = (status) => {
    setDatePickerVisibilityCriminal(status);
  };
  const handleConfirmCriminal = (date) => {
    const dateFormat = moment(date).format('L');
    setDatepickerCriminal(dateFormat);
    isShowDateCriminal(false);
  };

  //butonların bi sonrakine gecmesini saglıyor
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  const ref_input7 = useRef();
  const ref_input8 = useRef();

  return (
    <Fragment>
      <Header
        left={{
          name: 'Geri',
          icon: 'back',
          action: () => navigation.goBack(),
          status: true,
        }}
        center={{
          name: 'Elektrik Faturası İtiraz',
          status: true,
        }}
        right={null}
      />
      <ScrollView style={styles.main}>
        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Ad Soyad:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={name}
              returnKeyType="next"
              placeholderTextColor="#3E5C76"
              placeholder="Ad & Soyad..."
              onSubmitEditing={() => ref_input2.current.focus()}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>


        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>T.C. Kimlik No:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={tcno}
              returnKeyType="next"
              ref={ref_input2}
              onSubmitEditing={() => ref_input3.current.focus()}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="Tc Kimlik Numaranız..."
              onChangeText={(text) => setTcKimlik(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Telefon Numarası:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={phone}
              returnKeyType="next"
              ref={ref_input3}
              onSubmitEditing={() => ref_input4.current.focus()}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="0xxxxxxxxxx..."
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>
        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Şehir:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={city}
              autoCapitalize="characters"
              returnKeyType="next"
              ref={ref_input4}
              onSubmitEditing={() => ref_input5.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="Şehir..."
              onChangeText={(text) => setCity(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Adres:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={adress}
              returnKeyType="next"
              ref={ref_input5}
              onSubmitEditing={() => ref_input6.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="İkamet Adresiniz..."
              onChangeText={(text) => setAdress(text)}
            />
          </View>
        </View>

        


        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Abone No:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={serialNumber}
              returnKeyType="next"
              ref={ref_input6}
              onSubmitEditing={() => ref_input7.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="Elektrik faturası abone numaranız..."
              onChangeText={(text) => setSerialNumber(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Elektrik Şirketinin Adı:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={workPlace}
              ref={ref_input7}
              placeholderTextColor="#3E5C76"
              placeholder="Şirket Adı..."
              onChangeText={(text) => setworkPlace(text)}
            />
          </View>
        </View>

    
        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Son Ödeme Tarihi:</Text>
          </View>

          <View style={styles.inputArea}>
            <DateTimePickerModal
              locale="tr_TR"
              isVisible={isDatePickerVisibleCriminal}
              mode="date"
              onConfirm={handleConfirmCriminal}
              onCancel={() => isShowDateCriminal(false)}
            />

            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={isShowDateCriminal}>
              <Text style={styles.textStyle}>
                {datePickerCriminal || 'Seç'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>İtiraz Edilen Fatura Tutarı:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={money}
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={() => ref_input8.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="xxxx TL..."
              onChangeText={(text) => setMoney(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Önceki Fatura Tutarı:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={oldmoney}
              ref={ref_input8}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="xxxx TL..."
              onChangeText={(text) => setOldMoney(text)}
            />
          </View>
        </View>



        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('electricityBillPdf', {
              valuetc:tcno,
              valuename:name,
              valueadress:adress,
              valuecity:city,
              valueserialnumber:serialNumber,
              valuemoney:money,
              valueoldmoney:oldmoney,
              valuedatePicker:datePickerCriminal,
              valueworkPlace:workPlace,
              valuePhone:phone,
              })
            }
            style={styles.button}>
            <Text style={styles.buttonText}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Fragment>
  );
};
export default waterBill;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  input: {
    width: '95%',
    borderRadius: 5,
    borderBottomWidth: 2,
  },
  inputBig: {
    width: '95%',
    height: 100,
    borderRadius: 5,
    margin:'2%',
    borderBottomWidth: 2,
    textAlignVertical: 'top',
  },
  modalInput:{
    width: '95%',
    height: 70,
    borderRadius: 5,
    borderWidth:1,
    borderBottomWidth: 2,
    textAlignVertical: 'top',
  },
  modalInputArea: {
    flexDirection: 'column',
    width: '100%',
    height: 90,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    top: 10,
  },
  textinfo: {
    color: 'white',
    fontSize: 13,
  },
  inputArea: {
    flex: 1.5,
    alignItems: 'center',
    marginTop: '2%',
  },

  textArea: {
    flex: 1,
    marginLeft: 12,
    height: 20,
  },
  area: {
    width: '100%',
  },
  areaButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '95%',
    marginTop: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17c0eb',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    width: '100%',
    marginTop:20,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  buttonModal: {
    width: '100%',
    height: 50,
    marginTop: 10,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextArea: {
    width:'100%',
    justifyContent:'flex-start',
    left:'3%',
  },
  modalText:{
  fontSize:16,
  fontWeight:'bold'
  },
  buttonMainModal: {
    width: 160,
    height: 45,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    left: 20,
  },
});
