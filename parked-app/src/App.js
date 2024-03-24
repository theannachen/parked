import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react';
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

const App = withAuthInfo(({isLoggedIn}) => {
  const logoutFn = useLogoutFunction()
  const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();

  if (isLoggedIn) {
    return <div>
      <NavBar/>
      <HomePage />
    </div>
  } else {
    return <div>
      To get started, please log in as test user.
      <br/>
      <button onClick={() => redirectToSignupPage()}>
        Sign up
      </button>
      <button onClick={() => redirectToLoginPage()}>
        Log in
      </button>
    </div>
  }
})

export default App;
