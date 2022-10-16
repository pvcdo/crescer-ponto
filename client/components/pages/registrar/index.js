import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { 
  Container,  
  Input,
  ButtonSubmit,
  TextButtonSubmit
} from "./styles";
import api from '../../../utils/api';

const styles = StyleSheet.create({
  tamLogo:{
    width: 90,
    height: 90
  }
})

function Registrar(){
  
  async function onFormSubmit(){
    const data = await api.post('/registro/registrar')
      .then(res => {
        return res
      })
      .catch(res => {
        return res
      })

      console.log(res)
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

    </Container>
    
  )
}

export default Registrar;