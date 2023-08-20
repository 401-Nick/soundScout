"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soundScout_js_1 = __importDefault(require("./soundScout.js"));
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined in the environment variables');
}
const ss = new soundScout_js_1.default(apiKey);
ss.generatePlaylist("give me a playlist of 5 funk/soul songs from the 80s")
    .then((response) => {
    console.log(response);
});
