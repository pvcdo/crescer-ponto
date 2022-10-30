import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
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
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
        console.error("Erro no formsubmit")
      })
  }

  /*const onFormSubmit =async () => {
    try {
        const res = await api.post('/registro/registrar',{})
        console.log(res)

        //console.log("Entramos na função do front")
        
    } catch (error) {
        console.log('Deu erro: ', JSON.stringify(error))
    }
    
  }*/

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

    </Container>
    
  )
}

export default Registrar;