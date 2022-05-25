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

const criminalObjection = ({navigation}) => {
   
  // veriler
    const [tel, setTel] = useState('');
    const [tcno, setTcKimlik] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [rowNumber, setRowNumber] = useState('');
    const [lawArticle, setLawArticle] = useState('');
    const [money, setMoney] = useState('');
    const [sob, setSob] = useState('');
    const [comment, setComment] = useState('');





  //tebellug tarih
  const [isDatePickerVisibleTebe, setDatePickerVisibilityTebellug] = useState(false);
  const [datePickerTebellug, setDatepickerTebellug] = useState('');

  // ceza yedigi tarih
  const [
    isDatePickerVisibleCriminal,
    setDatePickerVisibilityCriminal,
  ] = useState(false);
  const [datePickerCriminal, setDatepickerCriminal] = useState('');

 



  // Tebellug Tarih
  const isShowDateTebellug = (status) => {
    setDatePickerVisibilityTebellug(status);
  };
  const handleConfirmTebellug = (date) => {
    const dateFormat = moment(date).format('L');
    setDatepickerTebellug(dateFormat);
    isShowDateTebellug(false);
  };

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
  const ref_input9 = useRef();

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
          name: 'Ceza İtiraz',
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
            <Text style={styles.text}>Telefon:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={tel}
              returnKeyType="next"
              ref={ref_input2}
              onSubmitEditing={() => ref_input3.current.focus()}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="Telefon Numaranız..."
              onChangeText={(text) => setTel(text)}
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
              ref={ref_input3}
              onSubmitEditing={() => ref_input4.current.focus()}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="Tc Kimlik Numaranız..."
              onChangeText={(text) => setTcKimlik(text)}
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
              ref={ref_input4}
              onSubmitEditing={() => ref_input5.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="İkamet Adresiniz..."
              onChangeText={(text) => setAdress(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Şehir (Ceza Yediğiniz İl):</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={city}
              autoCapitalize="characters"
              returnKeyType="next"
              ref={ref_input5}
              onSubmitEditing={() => ref_input6.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="Şehir..."
              onChangeText={(text) => setCity(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>İlçe (Ceza Yediğiniz İlçe):</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={district}
              returnKeyType="next"
              ref={ref_input6}
              onSubmitEditing={() => ref_input7.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="İlçe..."
              onChangeText={(text) => setDistrict(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Seri No:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={serialNumber}
              returnKeyType="next"
              ref={ref_input7}
              onSubmitEditing={() => ref_input8.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="Trafik cezası tutanağı harf grubu..."
              onChangeText={(text) => setSerialNumber(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Sıra No:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={rowNumber}
              returnKeyType="next"
              ref={ref_input8}
              onSubmitEditing={() => ref_input9.current.focus()}
              placeholderTextColor="#3E5C76"
              placeholder="Trafik cezası tutanağı sıra numarası..."
              onChangeText={(text) => setRowNumber(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Kanun Maddesi:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={lawArticle}
              ref={ref_input9}
              placeholderTextColor="#3E5C76"
              placeholder="Kanun Maddesi..."
              onChangeText={(text) => setLawArticle(text)}
            />
          </View>
        </View>

        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Ceza Yediginiz Tarih:</Text>
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
            <Text style={styles.text}>Ceza Tutarı:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={money}
              keyboardType="numeric"
              placeholderTextColor="#3E5C76"
              placeholder="TL..."
              onChangeText={(text) => setMoney(text)}
            />
          </View>
        </View>

      

        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Elinize Ulaştıgı Tarih:</Text>
          </View>

          <View style={styles.inputArea}>
            <DateTimePickerModal
              locale="tr_TR"
              isVisible={isDatePickerVisibleTebe}
              mode="date"
              onConfirm={handleConfirmTebellug}
              onCancel={() => isShowDateTebellug(false)}
            />

            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={isShowDateTebellug}>
              <Text style={styles.textStyle}>
                {datePickerTebellug || 'Seç'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>İtiraz Konusu:</Text>
          </View>
          <View style={styles.inputAreaBig}>
            <TextInput
              style={styles.inputBig}
              value={sob}
              numberOfLines={5}
              multiline={true}
              placeholderTextColor="#3E5C76"
              placeholder="Konu Giriniz"
              onChangeText={(text) => setSob(text)}
            />
          </View>
        </View>

        <View style={styles.area}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Açıklama:</Text>
          </View>
          <View style={styles.inputAreaBig}>
            <TextInput
              style={styles.inputBig}
              value={comment}
              numberOfLines={5}
              multiline={true}
              placeholderTextColor="#3E5C76"
              placeholder="Açıklama Giriniz..."
              onChangeText={(text) => setComment(text)}
            />
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('trafficOutput', {
              valuetel:tel,
              valuetc:tcno,
              valuename:name,
              valueadress:adress,
              valuecity:city,
              valuedistrict:district,
              valueserialnumber:serialNumber,
              valuelawArticle:lawArticle,
              valuemoney:money,
              valuesob:sob,
              valuecomment:comment,
              valuerowNumber:rowNumber,
              valuedatePickerTebellug:datePickerTebellug,
              valuedatePickerCriminal:datePickerCriminal,
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
export default criminalObjection;
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
