import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.js';
import Software from './Software';
import AI from './AI';
import Film from './Film';
import Design from './Design';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path = "/" exact element = {<MainPage/>}/>
          <Route path = "/Software" exact element = {<Software/>}/>
          <Route path = "/AI" exact element = {<AI/>}/>
          <Route path = "/Film" exact element = {<Film/>}/>
          <Route path = "/Design" exact element = {<Design/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
