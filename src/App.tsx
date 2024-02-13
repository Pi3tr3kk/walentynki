import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Button, Image, Text, Card } from '@chakra-ui/react'
import { useState } from 'react'






function App() {
  const [type, changeType] = useState(false)

  function wrongButton() {
    alert('Źle skarbie kliknęłaś chyba, spróbuj jeszcze raz!')
    changeType(true)
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <Card>
          <Image className='center' id='serce' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'></Image>
          <Text id='text' className='center' fontSize={24}>Bedziesz moją walentynką?</Text>
          <br></br>
          <Button onClick={() => alert('To super skarbie jestes tak, to moja walentynką!')} className='center' colorScheme='teal'>Tak</Button>
          <br></br>
          <Button isDisabled={type} onClick={() => wrongButton()} className='center' colorScheme='teal'>Nie</Button>
        </Card>
      </ChakraProvider>
    </>
  );
}

export default App;

