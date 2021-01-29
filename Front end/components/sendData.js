const send_data = async (data, ip) => {
    //  Send data to the raspberry pi
    data = JSON.stringify(data);
    console.log(data);
    console.log(ip);
    return fetch("http://" + ip + ":8080/video", {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        },
        body: data,
    }).then(response => response.json()).catch(error => { console.log(error) });
}


export default send_data;
