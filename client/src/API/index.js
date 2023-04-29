// import axios from 'axios';

// // Get IP Address
// export const GetIpAddress = async ({ setLoading, setIpData }) => {
//     try {
//         let res = await axios.get(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADDRESS_API_KEY}`);
//         if (res) {
//             setLoading(false);
//             setIpData(res.data.country_name);
//         }
//     } catch (error) {
//         alert(`IP Address Error: ${error}`);
//     }
// };

// // Get Countries
// export const GetCountries = async ({ setLoading, setCountries }) => {
//     try {
//         let res = await axios.get(`https://api.apilayer.com/number_verification/countries`,
//         {
//             headers: {
//                 apiKey: process.env.REACT_APP_NUMBER_VALIDATE_API_KEY,
//             }
//         });
//         if (res) {
//             setLoading(false);
//             setCountries(res.data);
//         }
//     } catch (error) {
//         alert(error.response.data.message);
//         setLoading(false);
//     }
// };
