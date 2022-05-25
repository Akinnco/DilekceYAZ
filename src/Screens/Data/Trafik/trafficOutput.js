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

const App = ({route, navigation}) => {
  //tarih alma
  const [currentDate, setCurrentDate] = useState('');
  //modal ekranı
  const [modalVisible, setModalVisible] = useState(false);
  // Notitiraz sayfasından gelen verileri karşılama
  const valuetel = route?.params?.valuetel || null;
  const valuetc = route?.params?.valuetc || null;
  const valuename = route?.params?.valuename || null;
  const valueadress = route?.params?.valueadress || null;
  const valuecity = route?.params?.valuecity || null;
  const valuedistrict = route?.params?.valuedistrict || null;
  const valueserialnumber = route?.params?.valueserialnumber || null;
  const valuelawArticle = route?.params?.valuelawArticle || null;
  const valuerowNumber = route?.params?.valuerowNumber || null;
  const valuemoney = route?.params?.valuemoney || null;
  const valuesob = route?.params?.valuesob || null;
  const valuecomment = route?.params?.valuecomment || null;
  const valuedatePickerTebellug =
    route?.params?.valuedatePickerTebellug || null;
  const valuedatePickerCriminal =
    route?.params?.valuedatePickerCriminal || null;

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
  };

  const handleConfirm = () => {
    ref.current.readSignature();
  };
  const style = `.m-signature-pad--footer {display: none; margin: 0px;width:200px;}`;

  const printHTML = async () => {
    await RNPrint.print({
      html: `<html>
      <style>
        b {
          font-size: 16px;
          font-family: 'Times New Roman', Times, serif;
        }
      
        .main {
          margin: auto;
          width: 595px;
          height: 842px;
        }
      
        .title {
          width: 580px;
          height: 90px;
          margin: auto;
        }
      
      
        .titlearea {
          width: auto;
          height: 50px;
          text-align: center;
          position: relative;
          align-items: center;
          line-height: 120px;
          
        }
      
        .itirazeden {
          width: 90%;
          margin: auto;
          height: 120px;
      
        }
        .signature_main_area{
          width: 90%;
          margin: auto;
          height: 180px;
        }
      
        .nameleft {
          float: left;
          display: inline-block;
          height: 110px;
          width: 30%;
        }
        .signatureleft{
          float: left;
          display: inline-block;
          height: 160px;
        
          width: 60%;
        }
        .signatureright {
          float: left;
          display: inline-block;
          height: 160px;
          width: 40%;
      
        }
        .signature {
          width: 100%;
          height: 65px;
          margin: auto;
        }
        .signature_name {
          width: 100%;
          height: 40px;
          margin: auto;
        }
        .signature_text{
          height: 20px;
          width: 100%;
        }
        .signature_area {
          width: 200px;
          height: 120px;
        }
        .nameright {
          float: left;
          display: inline-block;
          height: 110px;
          width: 70%;
      
        }
      
        .name {
          margin-top: 5px;
          width: 100%;
          height: 20px;
        }
        .comment{
          width: 100%;
          height: 90px;
        }
        .comment_area {
          width: 90%;
          margin: auto;
          height: 120px;
      
        }
        .issue_date_area {
          width: 90%;
          margin: auto;
          height: 40px;
        }
        .issue_date_title {
          float: left;
          display: inline-block;
          height: 40px;
          width: 60%;
          line-height: 40px;
          vertical-align: middle;
        }
        .issue_date {
          float: left;
          position: relative;
          height: 40px;
          line-height: 40px;
          width: 40%;
          vertical-align: middle;
        }
        .subject_area {
          width: 90%;
          margin: auto;
          height: 80px;
      
        }
        .subject{
          width: 100%;
          height: 60px;
        }
        .explanation_area{
          width: 90%;
          margin: auto;
          height: 85px;
        }
        .explanation {
          float: left;
          display: inline-block;
          height: 80px;
          width: 100%;
        }
        .result {
          float: left;
          display: inline-block;
          height: 70px;
          width: 100%;
        }
        
      </style>
      
      <body>
        <div class="main">
          <div class="title">
      
      
            <div class="titlearea">
      
              <div>${valuecity || '....'} &nbsp;SULH CEZA HAKİMLİGİ'NE</div>
      
            </div>
          </div>
          <div class="itirazeden">
            <div><ins>İTİRAZ EDEN
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </ins></div>
            <div class="nameleft">
              <div class="name">
                AD SOYAD:
              </div>
              <div class="name">
                TC KİMLİK NO:
              </div>
              <div class="name">
                ADRES:
              </div>
              <div class="name">
                TELEFON:
              </div>
            </div>
            <div class="nameright">
              <div class="name">
              ${valuename || ' '}
              </div>
              <div class="name">
              ${valuetc || ' '}
              </div>
              <div class="name">
              ${valueadress || ' '}
              </div>
              <div class="name">
               ${valuetel || ' '}
              </div>
            </div>
          </div>
          <div class="comment_area">
            <div><ins>İTİRAZA KONU İDARİ PARA CEZASI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </ins></div>
            <div class="comment">
           <div>
           ${valuecity || ' '} İl Emniyet Müdürlüğü ${
        valuedistrict || ' '
      } İlçe Emniyet Müdürlüğü'nün ${valueserialnumber || ' '} seri nolu ${
        valuerowNumber || ' '
      } 
             sıra nolu trafik idari para cezası karar tutanağında belirtilen; ilgili Kanunun ${
               valuelawArticle || ' '
             } maddesi
             uyarınca düzenlenen ${valuedatePickerCriminal || ' '} tarihli ${
        valuemoney || ' '
      } TL tutarındaki para cezası
           </div>
            </div>
          </div>
          <div class="issue_date_area">
            <div class="issue_date_title"><ins>TUTANAĞIN TANZİM TARİHİ
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               : </ins></div>
           <div class="issue_date">
           ${valuedatePickerCriminal || ' '}
           </div>
          </div>
          <div class="issue_date_area">
            <div class="issue_date_title"><ins>CEZANIN TEBELLÜĞ TARİHİ
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               : </ins></div>
           <div class="issue_date">
             ${valuedatePickerTebellug || ' '}
           </div>
          </div>
          <div class="subject_area">
            <div><ins>İTİRAZ KONUSU
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;: </ins></div>
           <div class="subject">
            <div>
              ${
                valuecity || ' '
              } Trafik denetleme şube müdürlüğü, xxxx tarihli xxx seri xxxx sıra no'lu trafik ceza tutanağında yazılı para cezasının iptali hakkında.
            </div>
           </div>
            </div>
            <div class="explanation_area">
              <div><ins>AÇIKLAMA
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </ins></div>
              <div class="explanation">
                ${valuecomment || ' '}
              
              </div>
            </div>
            <div class="explanation_area">
              <div><ins>SONUÇ VE TALEP
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   : </ins></div>
              <div class="result">
                Sonuç olarak; Haksız bir şekilde hakkımda düzenlenen söz konusu idari para cezasının
                iptaline karar verilmesini saygılarımla Hakimliğinizden arz ve talep ederim ${currentDate}
              
              </div>
            </div>
            <div class="signature_main_area">
            
              <div class="signatureleft">
                <div class="name">
                 
                </div>
              </div>
              <div class="signatureright">
                <div class="signature_name">
                  AD SOYAD: ${valuename || ' '}
                </div>
                <div class="signature_area">
                  <div class="signature_text"> 
            
                    İMZA<br>
                    <img src="${signature}" width="200" height="150">

                  </div>
                </div>
                
              </div>
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
          name: 'PDF',
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
            Alert.alert('Modal has been closed.');
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
              }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View
                  style={{
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="times-circle" size={50} color="red" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              <View
                style={{
                  backgroundColor: '#F0EBD8',
                  width: '100%',
                  height: 300,
                  borderColor: '#E5E5E5',
                  borderWidth: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onOK={handleSignature}
                  webStyle={style}
                />
              </View>
              <Text style={[styles.buttonText, {top: 10}]}>İmza Çıktısı:</Text>
              {signature ? (
                <View style={{top: 20}}>
                  <Image
                    resizeMode={'contain'}
                    style={{width: 200, height: 150, backgroundColor: 'white'}}
                    source={{uri: signature}}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.row}>
              <View style={styles.button}>
                <TouchableOpacity onPress={handleClear}>
                  <Text style={{color: 'white'}}>Temizle</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={handleConfirm}>
                  <Text style={{color: 'white'}}>Gönder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.buttonText}>İmza Atmayı Unutmayınız!</Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setModalVisible(true)}>
          <Icon name="file-signature" size={30} color="white" />
          <Text style={styles.buttonText}>İmza At!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={printHTML}>
          <Icon name="download" size={30} color="white" />
          <Text style={styles.buttonText}>Pdf Çıktısı</Text>
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
    backgroundColor: '#3d3d3d',
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
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#2196F3',
    margin: 10,
  },
  view: {
    flex: 1,
    backgroundColor: '#3d3d3d',
  },
  modalView: {
    flex: 1,
    padding: 35,
    alignItems: 'center',
    width: '100%',
    height: 300,
  },
  row: {
    justifyContent: 'space-around',
    bottom: 10,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
});
