import axios from 'axios';

    const token = localStorage.getItem("token");

    var basicAuth = 'Basic ' + token ;

    console.log(basicAuth);

export default axios.create({
    

    baseURL: "https://test001.testnet.mobiliz.com.tr/interview",

    // headers: {
    //     Authorization: basicAuth,
    //   },
}) 