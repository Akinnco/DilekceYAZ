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

const ResignationPdf = ({route, navigation}) => {
  const valuename = route?.params?.valuename || null;
  const valuetc = route?.params?.valuetc || null;
  const valueadress = route?.params?.valueadress || null;
  const valueserialnumber = route?.params?.valueserialnumber || null;
  const valuemoney = route?.params?.valuemoney || null;
  const valueoldmoney = route?.params?.valueoldmoney || null;
  const valuedatePicker = route?.params?.valuedatePicker || null;
  const valueworkPlace = route?.params?.valueworkPlace || null;
  const valuePhone = route?.params?.valuePhone || null;
  const cubicMeter = route?.params?.cubicMeter || null;

  //tarih alma
  const [currentDate, setCurrentDate] = useState('');
  //modal ekranı
  const [modalVisible, setModalVisible] = useState(false);
  // verileri aldıgımız sayfadan gelen verileri karşılama

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
      html: `
      <html>
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
            height: 110px;
            margin: auto;
          }
          .titlename{
            width: 530px;
            height: 100px;
            margin: auto;
            
          }
          .titlenamearea{
            width: auto;
            height: 50px;
            text-align:center;
            position: relative;
            top: 25px;
          } 
          .titlesubname{
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
            height: 180px;
            margin: auto;
          }
         
          .info{
            width: 580px;
            height: 442px;
          }
          .namearea
          {
            width: 100%;
            height: 221px;
            margin: auto;
            text-align: right;
          }
          .adveimza{
            width: 200px;
            float: right;
            height: 221px;
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
         .date{
          width: 200px;
            height: 51px;
            text-align: left;
         }
         .adressandtel_area{
           width: 100%;
           height: 100px;
           margin: auto;
           flex-direction: row;
         }
         .date{
           
           margin: auto;
           height: 25px;
           width: 90%;
           text-align: right;
         }
         .adressandtel{
          float: left;
          display: inline-block;
           height: 200px;
           width: 100%;
         }
         .adress{
           width: 100%;
           height: 100px;
         }
         .date_area{
          width: auto;
            height: 50px;
            position: relative;
            top: 5px;
            right: 10px;
         }
      </style>
      <body>
        <div class="main">
          <div class="date">
            <div class="date_area"> ${currentDate}</div>
          </div>
          <div class="title">
        
            <div class="titlename">
              <div class="titlenamearea">
                
                <div>${valueworkPlace || ' '}</div>
              </div>
              <div class="titlesubname">
                
                <div>GENEL MÜDÜRLÜĞÜ'NE</div>
    
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="text">
             Kurumunuzun ${
               valueserialnumber || ' '
             }  abone numaralı doğalgaz abonesiyim. ${
        valuedatePicker || ' '
      } tarihinde adıma gelen faturada ciddi şekilde yanlışlık yapıldığını ve  
             ${
               valuemoney || ' '
             } TL'lik faturanın tarafıma hatalı gönderildiğini düşünmekteyim. Aylık ortalama
              gaz tüketimimiz ${
                cubicMeter || ' '
              } metreküptür ve gelen ortalama doğalgaz faturası ${
        valueoldmoney || ' '
      } TL civarındadır. , 
           bu nedenle gerekli kontrollerin yapılmasını ve faturamın tekrar düzenlenmesini arz ediyorum.
            </div>
          
        
          
            <div class="namearea">
              <div class="adveimza">
                <div class="ad">
                  
                  Ad-Soyad:<br>
                  ${valuename || ' '}
                </div>
            
                <div class="imza">
                  İmza<br>
                  <div class="imzarea">
                    <img src="${signature || ' '}" width="200" height="150">
                  </div>
                  
                </div>
              
              </div>
            </div>
            <div class="adressandtel_area">
           
              <div class="adressandtel">
                <div class="adress">ADRES:<br>
                ${valueadress || ' '}
                </div> 
                TC KİMLİK NO: ${valuetc}<br>
              TEL:${valuePhone || ' '}<br>
              </div>
              
             </div>
      </body>
      
    </html>
    `,
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

export default ResignationPdf;

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
