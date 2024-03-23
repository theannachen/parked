import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import {Loading} from "./Auth/Loading"
import {HomePage} from "./Components/HomePage"


export default function App() {
    return(
    <RequiredAuthProvider authUrl={process.env.REACT_APP_AUTH_URL}>
        displayWhileLoading={<Loading />}
        displayIfLoggedOut={<RedirectToLogin />}
        <HomePage/>
    </RequiredAuthProvider>
    );
}
