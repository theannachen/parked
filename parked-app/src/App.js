import {withAuthInfo } from '@propelauth/react';
import {withAuthInfo } from '@propelauth/react';
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { useState } from 'react';


const App = withAuthInfo(({isLoggedIn}) => {
  const [curPage, setCurPage] = useState(<Dashboard change = {handleState}/>);

  function handleState(page) {
    setCurPage(page);
  }

  if (isLoggedIn) {
    return curPage
  } else {
    return <LandingPage/>
  }
})

export default App;
