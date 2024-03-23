import {Text, View} from "react-native-web";
import {StatusBar} from "expo-status-bar/build/StatusBar";

const bookings = ["bbb", "ccc", "ddd"];


export function HomePage() {
    return (<View>
        <Text>Logged In</Text>
        <StatusBar style="auto"/>
        <h1>Available Bookings</h1>

        {bookings.map((slot) => (
            <div>{slot}</div>
        ))}


    </View>);
}

export default HomePage;