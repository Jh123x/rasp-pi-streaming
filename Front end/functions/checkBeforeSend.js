import send_data from './sendData';
import validateIP from './validateIP';


export default function checkBeforeSend(ip, body) {
    if (!validateIP(ip)) {
        console.log(false);
        return false;
    }
    send_data(body, ip);
    return true;
}