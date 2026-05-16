const express = require("express");

const cors = require("cors");

const axios = require("axios");

const getToken = require("./auth");

const Log = require(
    "../logging_middleware/logger"
);

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 5000;

const NOTIFICATION_API =
    "http://4.224.186.213/evaluation-service/notifications";

app.get(
    "/notifications",
    async (req, res) => {

        try {

            const token =
                await getToken();

            const type =
                req.query.type;

            await Log(
                "backend",
                "info",
                "route",
                "Fetching notifications",
                token
            );

            const response =
                await axios.get(
                    NOTIFICATION_API,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            let notifications =
                response.data.notifications;

            if (
                type &&
                type !== "All"
            ) {

                notifications =
                    notifications.filter(
                        (item) =>
                            item.Type === type
                    );
            }

            res.json({
                notifications
            });

        } catch (error) {

            console.log(
                error.message
            );

            res.status(500).json({
                error: "Server Error"
            });
        }
    }
);

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});