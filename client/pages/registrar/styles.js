import styled from 'styled-components/native'

//o KeyboardAvoindingView tira vários problemas de usabilidade, como por exemplo evita que botões fiquem abaixo do teclado
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2D3A3A;
`

export const Input = styled.TextInput`
  width: 80%;
  margin: 20px 0;
  border: 2px solid #fff;
  border-radius: 30px;
  padding: 15px 20px;
  color: #fff
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #19381F;
  width: 50%
  border-radius: 9px;
  padding: 15px 20px;
  align-items: center

`

export const TextButtonSubmit = styled.Text`
  font-size: 15px
  color: #fff;
  font-weight: bold;
`