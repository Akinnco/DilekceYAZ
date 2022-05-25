import React, {useState, useRef, Fragment} from 'react';
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
  const [name, setName] = useState('');
  const [workPlace, setworkPlace] = useState('');

  //tebellug tarih
  const [isDatePickerVisibleTebe, setDatePickerVisibilityTebellug] = useState(false);
  const [datePickerJobEntry, setDatepickerTebellug] = useState('');


 

  // ceza yedigi tarih
  const [isDatePickerVisibleCriminal,setDatePickerVisibilityCriminal,] = useState(false);
  const [datePickerJobLeaving, setDatepickerCriminal] = useState('');



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
          name: 'İstifa Dilekcesi',
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
            <Text style={styles.text}>Çalıştıgınız İş Yeri Adı:</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={workPlace}
              ref={ref_input2}
              placeholderTextColor="#3E5C76"
              placeholder="İş Yeri Adı..."
              onChangeText={(text) => setworkPlace(text)}
            />
          </View>
        </View>

        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>İşe Başlama Tarihi:</Text>
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
                {datePickerJobEntry || 'Seç'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>





        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>İşi Bırakma Tarihi:</Text>
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
                {datePickerJobLeaving || 'Seç'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('resignationpdf', {
                valuename: name,
                valueJobLeaving: datePickerJobLeaving,
                valueJobEntry: datePickerJobEntry,
                valueworkPlace:workPlace,
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
    margin: '2%',
    borderBottomWidth: 2,
    textAlignVertical: 'top',
  },
  modalInput: {
    width: '95%',
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
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
    marginTop: 20,
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
    width: '100%',
    justifyContent: 'flex-start',
    left: '3%',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
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
