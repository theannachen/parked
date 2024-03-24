import {withAuthInfo } from '@propelauth/react';
import LandingPage from "./pages/LandingPage";
import { useState } from 'react';


const App = withAuthInfo(({isLoggedIn}) => {
  const [curPage, setCurPage] = useState(<LandingPage change = {handleState}/>);

  function handleState(page) {
    setCurPage(page);
  }
  return curPage

})

export default App;
