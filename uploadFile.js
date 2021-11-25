const pinataApiKey = "a8e2fff1fe45d92846de";
const pinataSecretApiKey = "c22feeae58c7c063473ba1e782826a45696283ae85001fbc68fc7ab0379e3d54";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append("file", fs.createReadStream("./1590589755463.gif"));
    const res = await axios.post(url, data, {
        maxContentLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretApiKey,
        },
      });
    console.log(res.data);
};
pinFileToIPFS();

// 결과
// {
//   IpfsHash: 'QmSyNKS792FkY3zFL3QWYMCFea4kt2ccUHc8Qf7RvnAzNg',
//   PinSize: 4109643,
//   Timestamp: '2021-11-24T08:51:50.424Z'
// }