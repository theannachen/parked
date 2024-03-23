import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import {Loading} from "./Auth/Loading"
import {HomePage} from "./Components/HomePage"

export default function App() {
    console.log("URL: ");

    console.log(process.env.EXPO_PUBLIC_AUTH_URL);
    return(
    <RequiredAuthProvider authUrl={process.env.EXPO_PUBLIC_AUTH_URL}>
        displayWhileLoading={<Loading />}
        displayIfLoggedOut={<RedirectToLogin />}
        <HomePage/>
    </RequiredAuthProvider>
    );
}
