import {Text, View} from "react-native-web";
import {StatusBar} from "expo-status-bar";

export function Loading() {
    return (
        <div>
            <Text>Loading...</Text>
            <StatusBar style="auto" />
        </div>
    );
}