const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const DISCORD_TOKEN = '';

app.get('/lookup/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const response = await axios.get(`https://discord.com/api/v9/users/${userId}`, {
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`
            }
        });

        if (response.data) {
            const userData = response.data;
            const avatarURL = userData.avatar ? `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.png` : null;
            const bannerURL = userData.banner ? `https://cdn.discordapp.com/banners/${userId}/${userData.banner}.png` : null;

            const responseData = {
                ...userData,
                avatarURL: avatarURL,
                bannerURL: bannerURL
            };

            res.json(responseData);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
