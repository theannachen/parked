import NavBar from "../components/NavBar";
import {useState} from "react";
import HostDashboard from "../components/HostDashboard";
import CustomerDashboard from "../components/CustomerDashboard";


const Dashboard = ({change}) => {
    const [isHost, setIsHost] = useState(false);

    function handleState() {
        setIsHost(!isHost)
    }

    function getIsHost(){
        return isHost;
    }

    if(isHost){
        return (
            <div>
                <NavBar change ={change} setDashboard = {handleState} getIsHost = {isHost}/>
                <HostDashboard/>
            </div>);
    }
    else{
        return (
            <div>
                <NavBar change ={change} setDashboard = {handleState}/>
                <CustomerDashboard/>
            </div>);
    }


};

export default Dashboard;