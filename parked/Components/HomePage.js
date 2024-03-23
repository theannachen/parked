import {Text, View} from "react-native-web";
import {StatusBar} from "expo-status-bar/build/StatusBar";

export function HomePage(){
    return (<View>
        <Text>Logged In</Text>
        <StatusBar style="auto" />
    </View>);
}