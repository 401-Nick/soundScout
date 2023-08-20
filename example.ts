import SoundScout from "./soundScout.js";
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
}

const ss = new SoundScout(apiKey);

ss.generatePlaylist("give me a playlist of 5 funk/soul songs from the 80s")
.then((response) => {
    console.log(response);
});