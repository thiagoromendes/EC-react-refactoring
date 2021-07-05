import React from 'react';
import Container from '@material-ui/core/Container';
import {AppProvider} from '../src/hooks'
import {GlobalStyle} from '../src/styles/GlobalStyle';
import {AppBar} from './components/AppBar';
import {Form}  from '../src/pages/Form';

function App() {
  return (
    <Container width="auto" >
      <GlobalStyle />
      <AppProvider>
        <AppBar />
        <Form />
      </AppProvider>
    </Container>
  );
}

export default App;
