const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

// Replace with your Universe ID
const universeId = "17017769292";

app.get("/playercount", async (req, res) => {
    try {
        const response = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
        const data = await response.json();
        res.json({ playerCount: data.data[0]?.playing || 0 });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch player count" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
