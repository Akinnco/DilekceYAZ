import React, {useRef, useState} from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

const imza = ({onOK,navigation,props}) => {
  const [signature, setSign] = useState(null);
  const ref = useRef();

  const handleSignature = signature => {
    setSign(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  }

  const handleConfirm = () => {
    ref.current.readSignature();
    navigation.navigate('sign',{signaturedata:signature});
    
  }
  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;
   console.log('sign1',signature)
  return (
    <View style={styles.container}>
      <SignatureScreen
          ref={ref}
          onOK={handleSignature} 
          webStyle={style}
      />
      <View style={styles.preview}>
        {signature ? (
          <Image
          
            resizeMode={"contain"}
            style={{ width: 300, height: 300 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <View style={styles.row}>
        <Button
            title="Temizle"
            onPress={handleClear}
        />
        <Button
          title="Gönder"
          onPress={handleConfirm}
        />
      </View>
    </View>
  );
}

export default imza;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  }
});