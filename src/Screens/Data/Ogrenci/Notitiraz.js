import React, {Component, useState, useRef, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Header from '../../../Components/header';
import Input from '../../../Form/input';
import {wh} from '../../../helpers/responsive';

const Notitiraz = ({navigation, route}) => {
  //tarih için gerekli
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePicker, setDatepicker] = useState('');

  //fakülte secimi
  const [facultyValue, setFaculty] = useState('');
  const [facultyButton, setFacultyButton] = useState('');
  const [facultyStart, setFacultyStart] = useState('');

  //adres
  const [adress, setAdress] = useState('');

  // modal ekranları
  const [modalVisible, setModalVisible] = useState(false);
  const [modalgradle, setModalGradle] = useState(false);
  const [modalexam, setModalExam] = useState(false);

  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  //okul numarası
  const [no, setNo] = useState('');
  //ders adı
  const [lesson, setLesson] = useState('');
  // sınav türü
  const [exam, setExam] = useState('');
  //
  const [section, setSection] = useState('');
  // sınıf
  const [grade, setGrade] = useState('');
  const [facultyname, setFacultyname] = useState('');

  //tarih için gerekli
  const isShowDatePicker = (status) => {
    setDatePickerVisibility(status);
  };

  const handleConfirm = (date) => {
    const dateFormat = moment(date).format('L');
    setDatepicker(dateFormat);
    isShowDatePicker(false);
  };
  //butonların bi sonrakine gecmesini saglıyor
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input7 = useRef();
  const ref_input8 = useRef();

  console.log('zxc', name);
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
          name: 'Sınav İtiraz',
          status: true,
        }}
        right={null}
      />
      <ScrollView style={styles.main}>
        <Input
          value={name}
          placeholder="Ad & Soyad..."
          title={'Ad Soyad:'}
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={(text) => setName(text)}
        />
        <Input
          value={tel}
          placeholder="530*******"
          title={'Telefon:'}
          ref={ref_input2}
          keyboardType="numeric"
          onSubmitEditing={() => ref_input3.current.focus()}
          onChangeText={(text) => setTel(text)}
        />
        <Input
          value={mail}
          placeholder="mail@mail.com.tr..."
          title="Email:"
          ref={ref_input3}
          keyboardType="email-address"
          onSubmitEditing={() => ref_input4.current.focus()}
          onChangeText={(text) => setMail(text)}
        />
        <Input
          value={adress}
          placeholder="Adresiniz..."
          title="Adres:"
          ref={ref_input4}
          onSubmitEditing={() => ref_input5.current.focus()}
          onChangeText={(text) => setAdress(text)}
        />
        <Input
          value={university}
          placeholder="Üniversite Adı..."
          title="Üniversite Adı:"
          ref={ref_input5}
          onChangeText={(text) => setUniversity(text)}
        />

        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Fakülte Seciniz:</Text>
          </View>
          <View style={styles.inputArea}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setFacultyButton('Yüksekokul');
                      setFaculty("YÜKSEK OKULU MÜDÜRLÜĞÜ'NE");
                      setFacultyStart('Okulunuzun');
                    }}>
                    <Text style={styles.textStyle}>Yüksekokul</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setFacultyButton('Fakülte');
                      setFaculty('FAKÜLTESİ DEKANLIĞINA');
                      setFacultyStart('Fakülteniz');
                    }}>
                    <Text style={styles.textStyle}>Fakülte</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setFaculty('FAKÜLTESİ DEKANLIĞINA');
                      setFacultyButton('Mühendislik');
                      setFacultyStart('Fakülteniz');
                    }}>
                    <Text style={styles.textStyle}>Mühendislik</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>{facultyButton || 'Seçiniz'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Input
          value={facultyname}
          placeholder="Fakülteniz... "
          title="Fakülte Adı:"
          ref={ref_input5}
          onSubmitEditing={() => ref_input7.current.focus()}
          onChangeText={(text) => setFacultyname(text)}
        />
        <Input
          value={section}
          placeholder="Yazılım Mühendisligi..."
          title="Bölüm Adı:"
          ref={ref_input5}
          onSubmitEditing={() => ref_input7.current.focus()}
          onChangeText={(text) => setSection(text)}
        />
        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Sınıf:</Text>
          </View>
          <View style={styles.inputArea}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalgradle}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalGradle(!modalgradle);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalGradle(!modalgradle);
                      setGrade('Hazırlık');
                    }}>
                    <Text style={styles.textStyle}>Hazırlık</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalGradle(!modalgradle);
                      setGrade('1.');
                    }}>
                    <Text style={styles.textStyle}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalGradle(!modalgradle);
                      setGrade('2.');
                    }}>
                    <Text style={styles.textStyle}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalGradle(!modalgradle);
                      setGrade('3.');
                    }}>
                    <Text style={styles.textStyle}>3</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalGradle(!modalgradle);
                      setGrade('4.');
                    }}>
                    <Text style={styles.textStyle}>4</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={() => setModalGradle(true)}>
              <Text style={styles.textStyle}>{grade || 'Seçiniz'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Input
          value={no}
          placeholder="Numaranız..."
          title="Ögrenci No:"
          ref={ref_input7}
          onSubmitEditing={() => ref_input8.current.focus()}
          onChangeText={(text) => setNo(text)}
        />
        <Input
          value={lesson}
          placeholder="İnternet Programclıgı..."
          title="Ders Adı:"
          ref={ref_input8}
          onSubmitEditing={() => ref_input8.current.focus()}
          onChangeText={(text) => setLesson(text)}
        />
        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Sınav Türü:</Text>
          </View>
          <View style={styles.inputArea}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalexam}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalExam(!modalexam);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalExam(!modalexam);
                      setExam('Arasınav');
                    }}>
                    <Text style={styles.textStyle}>Arasınav</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalExam(!modalexam);
                      setExam('Final');
                    }}>
                    <Text style={styles.textStyle}>Final</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonModal}
                    onPress={() => {
                      setModalExam(!modalexam);
                      setExam('Bütünleme');
                    }}>
                    <Text style={styles.textStyle}>Bütünleme</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={() => setModalExam(true)}>
              <Text style={styles.textStyle}>{exam || 'Seçiniz'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.areaButton}>
          <View style={styles.textArea}>
            <Text style={styles.text}>Sınava Giriş Tarihi:</Text>
          </View>

          <View style={styles.inputArea}>
            <DateTimePickerModal
              locale="tr_TR"
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={() => isShowDatePicker(false)}
            />

            <TouchableOpacity
              style={styles.buttonMainModal}
              onPress={isShowDatePicker}>
              <Text style={styles.textStyle}>{datePicker || 'Seç'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Pdf', {
                valuetel: tel,
                valuemail: mail,
                valuename: name,
                valueuniversity: university,
                valueno: no,
                valuesection: section,
                valuegrade: grade,
                valuefacultyname: facultyname,
                valuefacultyValue: facultyValue,
                valuefacultyStart: facultyStart,
                valuelesson: lesson,
                valuedate: datePicker,
                valueexam: exam,
                valueadress: adress,
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
export default Notitiraz;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingLeft: wh(0.02),
    paddingBottom: wh(0.05),
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
    width: '90%',
    height: wh(0.07),
    backgroundColor: '#3A7FE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wh(0.025),
    borderRadius: wh(0.017),
    flexDirection: 'row',
    marginBottom: wh(0.025),
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',

    elevation: 5,
  },
  buttonModal: {
    width: 200,
    height: 50,
    marginTop: 10,
    backgroundColor: '#3A7FE7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#3A7FE7',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonMainModal: {
    width: 160,
    height: 45,
    backgroundColor: '#3A7FE7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    left: 20,
  },
});
