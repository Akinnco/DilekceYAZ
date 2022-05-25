import React, {useState, useRef, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignatureScreen from 'react-native-signature-canvas';
import Header from '../../../Components/header';
import RNPrint from 'react-native-print';
import {wh, ww} from '../../../helpers/responsive';

let malKoray = null;

const App = ({route, navigation}) => {
  //tarih alma
  const [currentDate, setCurrentDate] = useState('');
  //modal ekranı
  const [modalVisible, setModalVisible] = useState(false);
  // Notitiraz sayfasından gelen verileri karşılama
  const valuetel = route?.params?.valuetel || null;
  const valuemail = route?.params?.valuemail || null;
  const valueadress = route?.params?.valueadress || null;
  const valuename = route?.params?.valuename || null;
  const valueuniversity = route?.params?.valueuniversity || null;
  const valueno = route?.params?.valueno || null;
  const valuesection = route?.params?.valuesection || null;
  const valuegrade = route?.params?.valuegrade || null;
  const valuefacultyname = route?.params?.valuefacultyname || null;
  const valuefacultyValue = route?.params?.valuefacultyValue || null;
  const valuefacultyStart = route?.params?.valuefacultyStart || null;
  const valuelesson = route?.params?.valuelesson || null;
  const valuedate = route?.params?.valuedate || null;
  const valueexam = route?.params?.valueexam || null;

  // tarih alma
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(date + '/' + month + '/' + year);
  }, []);

  //imza alma
  const [signature, setSign] = useState(null);
  const ref = useRef();

  const handleSignature = (signature) => {
    setSign(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
    clearTimeout(malKoray);

    // setModalVisible(true);
  };

  const handleConfirm = () => {
    ref.current.readSignature();
    malKoray = setTimeout(() => {
      setModalVisible(false);
    }, 3500);
    // setModalVisible(false);
  };
  const style = `.m-signature-pad--footer {display: none; margin: 0px;width:200px;}`;

  const printHTML = async () => {
    await RNPrint.print({
      html: `<html>
      <style>
        b{
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
        }
        .main{
          margin: auto;
          width: 595px;
          height:842px;
          }
          .title{
            width: 580px;
            height: 150px;
            margin: auto;
          }
          .date{
            width: 580px;
            height: 40px;
            position: relative;
            text-align: right;
            align-items: center;
            right: 40px;
          }
          .schoolname{
            width: 530px;
            height: 100px;
            margin: auto;
            
          }
          .schoolnamearea{
            width: auto;
            height: 50px;
            text-align:center;
            position: relative;
            top: 25px;
          } 
          .facultyname{
            width: auto;
            height: 50px;
            margin: auto;
            text-align: center;
          }
          .textarea{
            width: 580px;
            height: 200px;
            margin: auto;
          }
          .text{
            width: 560px;
            height: 200px;
            margin: auto;
          }
          .info{
            width: 580px;
            height: 442px;
            margin: auto;
          }
          .namearea
          {
            width: 580px;
            height: 221px;
            margin: auto;
            text-align: right;
          }
          .adveimza{
            width: 200px;
            height: 221px;
            float: right;
            text-align: right;
          }
          .imza{
            width: 200px;
            height: 221px;
            text-align: left;
          }
          .imzarea{
            width: 200px;
            height: 150px;
    
          }
          .ad{
            width: 200px;
            height: 51px;
            text-align: left;
          }
          .adressandtel
          {
            width: 580px;
            height: 271px;
            margin: auto;
          }
          .adress{
            width: 580px;
            height: 100px;
            
          }
          .datetext{
            text-align: center;
          }
      </style>
      <body>
        <div class="main">
          <div class="title">
            <div class="date">
    
              <div>${currentDate}</div>
            </div>
            <div class="schoolname">
              <div class="schoolnamearea">
                
                <div>${valueuniversity || ' '}</div>
              </div>
              <div class="facultyname">
                
                <div>${valuefacultyname || ' '}&nbsp;  ${
        valuefacultyValue || ' '
      }</div>
    
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="text">
              ${valuefacultyStart || ' '} &nbsp; ${
        valuesection || ' '
      }&nbsp; Bölümü ${valueno || ' '} &nbsp; numaralı ${
        valuegrade || ' '
      } &nbsp; sınıf öğrencisiyim. ${
        valuedate || ' '
      }&nbsp; tarihinde girmiş olduğum ${valuelesson || ' '} dersinin ${
        valueexam || ' '
      }&nbsp; sınavının sonucunun yeniden incelenmesi hususunda;
              Gereğini arz ederim.
              
    
            </div>
          </div>
          <div class="info">
            <div class="namearea">
              <div class="adveimza">
                <div class="imza">
                  İmza<br>
                  <div class="imzarea">
                    <img src="${signature}" width="200" height="150">
                  </div>
                  <div class="ad">
                    Ad-Soyad<br>
                    ${valuename || ' '}
                  </div>
                </div>
              
              </div>
            </div>
            <div class="adressandtel">
              <div class="adress">
                <b>ADRES:</b><br>
                ${valueadress || ' '}
              </div>
              <b>TEL:</b><br>
               ${valuetel || ' '}
            </div>
          </div>
        </div>
      </body>
      
    </html>`,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        left={{
          name: 'Geri',
          icon: 'back',
          action: () => navigation.goBack(),
          status: true,
        }}
        center={{
          name: 'İMZALA VE İNDİR',
          status: true,
        }}
        right={null}
      />
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.view}>
            <View
              style={{
                width: '100%',
                height: 50,
                alignItems: 'center',
                right: 10,
                marginTop: 10,
              }}></View>
            <View style={styles.modalView}>
              <View
                style={{
                  backgroundColor: '#F0EBD8',
                  width: '100%',
                  height: 300,
                  borderColor: '#3A7FE7',
                  borderWidth: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onOK={handleSignature}
                  webStyle={style}
                />
              </View>

              <Text
                style={[
                  styles.buttonTextImza,
                  {top: wh(0.01), color: '#3A7FE7'},
                ]}>
                İmza Çıktısı:
              </Text>
              {signature ? (
                <View style={{top: 20}}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: wh(0.2),
                      height: wh(0.2),
                      backgroundColor: 'white',
                    }}
                    source={{uri: signature}}
                  />
                </View>
              ) : null}
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonSend}
                onPress={() => {
                  handleConfirm();
                }}>
                <Text style={{color: 'white', fontSize: wh(0.02)}}>
                  Önizle ve Oluştur
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleClear}
                style={{
                  width: wh(0.15),
                  height: wh(0.03),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: wh(-0.099),
                }}>
                <Text
                  style={{
                    fontSize: wh(0.015),
                    color: '#3A7FE7',
                    fontWeight: 'bold',
                  }}>
                  Tekrar Çiz
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.buttonText2}>Son bir Adım Kaldı...</Text>
        <Text style={styles.buttonText}>
          Önce İmzanı Atın Sonra Dilekçeniz Hazır
        </Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setModalVisible(true)}>
          <Icon name="file-signature" size={30} color="white" />
          <Text style={styles.buttonText1}>İmza At!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={printHTML}>
          <Icon name="download" size={30} color="white" />
          <Text style={styles.buttonText1}>Pdf Çıktısı</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: wh(0.017),
    color: 'black',
  },
  buttonText2: {
    fontSize: wh(0.04),
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText1: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextImza: {
    fontSize: wh(0.02),
    color: '#3A7FE7',
  },

  buttonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3A7FE7',
    margin: 10,
  },
  view: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  modalView: {
    flex: 1,
    padding: 35,
    alignItems: 'center',
    width: '100%',
  },
  row: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: ww(1),
    height: wh(0.3),
  },
  buttonView: {
    flexDirection: 'row',
  },
  button: {
    width: wh(0.2),
    height: wh(0.05),
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wh(0.07),
    borderRadius: wh(0.015),
    marginLeft: ww(0.6),
  },
  buttonSend: {
    width: wh(0.4),
    height: wh(0.07),
    backgroundColor: '#3A7FE7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wh(0.015),
  },
});
