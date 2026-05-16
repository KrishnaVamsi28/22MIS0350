const axios = require("axios");

const AUTH_API =
  "http://4.224.186.213/evaluation-service/auth";

async function getToken() {

    try {

        const response = await axios.post(
            AUTH_API,
            {
                email: "rvkvamsi28@gmail.com",
                name: "Krishna Vamsi",
                rollNo: "22MIS0350",
                accessCode: "SfFuWg",
                clientID: "1ea48e55-f47f-493e-aa71-367281c4bc05",
                clientSecret: "yKmWMxxgaHTJrXKb"
            }
        );

        return response.data.access_token;

    } catch (error) {

        console.log(
            "Auth Error:",
            error.message
        );
    }
}

module.exports = getToken;