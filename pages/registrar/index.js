import React from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { 
  Container,  
  Input,
  ButtonSubmit,
  TextButtonSubmit
} from "./styles";

const styles = StyleSheet.create({
  tamLogo:{
    width: 90,
    height: 90
  }
})

function Registrar(){
  return(
    <Container>
      <Image
        style = {styles.tamLogo}
        source = {{uri: "https://cdn-icons-png.flaticon.com/512/17/17004.png"}}
      />
      <Input autoCapitalize="none"/>
      <Input secureTextEntry={true} />
      <ButtonSubmit>
        <TextButtonSubmit>
          Registrar ponto
        </TextButtonSubmit>
      </ButtonSubmit>

    </Container>
    
  )
}

export default Registrar;