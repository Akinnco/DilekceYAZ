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
  const valuecity = route?.params?.valuecity || null;
  const valueserialnumber = route?.params?.valueserialnumber || null;
  const valuemoney = route?.params?.valuemoney || null;
  const valueoldmoney = route?.params?.valueoldmoney || null;
  const valuedatePicker = route?.params?.valuedatePicker || null;
  const valueworkPlace = route?.params?.valueworkPlace || null;
  const valuePhone = route?.params?.valuePhone || null;

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
            width: 50%;
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
           height: 100px;
           width: 45%;
           float: left;
          display: inline-block;
         }
         .adressandtel{
          float: left;
          display: inline-block;
           height: 100px;
           width: 55%;
         }
         .adress{
           width: 100%;
           height: 50px;
         }
      </style>
      <body>
        <div class="main">
          <div class="title">
        
            <div class="titlename">
              <div class="titlenamearea">
                
                <div>${valueworkPlace}</div>
              </div>
              <div class="titlesubname">
                
                <div>GENEL MÜDÜRLÜĞÜ'NE</div>
    
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="text">
              Şirketinizin  ${valuecity} ilinde ${valueadress} adresinde ikamet eden ${valueserialnumber} abone numaralı ve ${valuetc} kimlik numaralı müşterisiyim. 
              ${valuedatePicker} son ödeme tarihli elektrik faturamda bulunan ${valuemoney} TL tutarındaki elektrik tüketimi bana ait değildir. Bundan önceki faturalarım ${valueoldmoney} TL civarındadır.  Konunun incelenerek tarafıma bilgi verilmesini, muhtemel sorunların ve hataların düzeltilmesini arz ederim.
            </div>
          <div class="adressandtel_area">
           <div class="date">
           TARİH:${currentDate}
           </div>
           <div class="adressandtel">
             <div class="adress">ADRES:${valueadress}</div> 
           TEL:${valuePhone}<br>
           </div>
          </div>
        
          
            <div class="namearea">
              <div class="adveimza">
                <div class="ad">
                  
                  Ad-Soyad<br>
                  ${valuename}
                </div>
            
                <div class="imza">
                  İmza<br>
                  <div class="imzarea">
                    <img src="${signature}" width="200" height="150">
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
