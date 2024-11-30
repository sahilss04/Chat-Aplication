import https from "https";
import app from "./app.js";


const server = https.createServer(app);

const PORT = process.env.PORT;
server.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});


