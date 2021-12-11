import React, { useState } from 'react';
import { Button, Text, TextInput, View, Image } from 'react-native';
import styles from './styles';

export default function Layout() {
  const [txt, setTxt] = useState("any txt")
  const [index,setIndex]=useState(0);
  const imgSrcArr = ["https://images.unsplash.com/photo-1637269235441-c676660d568a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1636884285351-0f14627ada21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1637139496880-52af24614d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1637371756702-bc9dc8dca298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618449523291-821f55117b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1635378709011-93612597aec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
const next=()=>{
  if(index===imgSrcArr.length-1){
    setIndex(imgSrcArr.length-1);
  }else{
    setIndex(index+1);
  }
}
const pre=()=>{
  if(index===0){
    setIndex(0);
  }else{
    setIndex(index-1);
  }
}
    return (
    <View>
      <Text style={styles.header}>Aya Mamdouh Kamel </Text>
      <View style={styles.child}>
        <TextInput placeholder="Please Enter Your Name" style={styles.input} value={txt}></TextInput>
        <View style={styles.btn}>
          <Button title="Change Text" color="blue" onPress={() => {
            setTxt("Aya Mmdouh")
          }}></Button>
        </View>
      </View>
      <View style={styles.img}>
        <Image style={{ width: 200, height: 300 }}
          source={imgSrcArr[index]} width="200" height="300"></Image>
      </View>
      <View style={styles.action}>
        <Button title="Privous" onPress={()=>pre()}></Button>
        <View> <Button title="Next" style={styles.btns} onPress={()=>next()}></Button></View>
      </View>
    </View>
  );
}
