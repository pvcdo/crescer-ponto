import React from 'react';
import { Image, StyleSheet, View, Text, Button, ToastAndroid } from 'react-native';
import { 
  Container,  
  Input,
  ButtonSubmit,
  TextButtonSubmit
} from "./styles";
import api from '../../../utils/api';
//import axios from 'axios'

const styles = StyleSheet.create({
  tamLogo:{
    width: 90,
    height: 90
  }
})

function Registrar(){
  
  function onFormSubmit(){
    
    console.log("estamos no formsubmit")
    
    api.post('/registro/registrar')
      .then((res) => {
        console.log(res.data.msg)
        ToastAndroid.show(res.data.msg,ToastAndroid.LONG)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
        console.error("Erro no formsubmit")
      })
    
  }
  
  function pegarRegistros(){
    
    console.log("estamos no formsubmit")
    
    api.get('/registro/pegarRegistros')
      .then((res) => {
        console.log(JSON.stringify(res.data.registros))
        ToastAndroid.show(res.data.msg,ToastAndroid.LONG)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
        console.error("Erro no pegarRegistros")
      })
    
  }

  return(
    <Container>

      <Image
        style = {styles.tamLogo}
        source = {{uri: "https://cdn-icons-png.flaticon.com/512/17/17004.png"}}
      />

      <Input autoCapitalize="none"/>
      <Input secureTextEntry={true} />
      <ButtonSubmit onPress={onFormSubmit} >
        <Text>Registrar ponto</Text>
      </ButtonSubmit>
      
      {/*<ButtonSubmit onPress={pegarRegistros} >
        <Text>Retornar Pontos</Text>
  </ButtonSubmit>*/}

    </Container>
    
  )
}

export default Registrar;