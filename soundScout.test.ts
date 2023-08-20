import SoundScout from "./soundScout.js";
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
}

const ss = new SoundScout(apiKey);
expect(JSON.parse(ss.generatePlaylist("some great music"))).toEqual(JSON.parse(soundScout));