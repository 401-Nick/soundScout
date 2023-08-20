"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
require('dotenv').config();
const OpenAIModel = 'gpt-3.5-turbo';
if (process.env.OPENAI_API_KEY === undefined) {
    throw new Error('Please set your OpenAI API key in the .env file');
}
class SoundScout {
    constructor(apiKey) {
        this.openai = new openai_1.default({
            apiKey: apiKey
        });
    }
    prompt(prompt, systemPrompt = '', max_tokens = 2048) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.openai.chat.completions.create({
                    model: OpenAIModel,
                    max_tokens: max_tokens,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: prompt }
                    ],
                });
                const content = response.choices[0].message.content;
                if (content !== null) {
                    return content;
                }
                else {
                    // Handle the null value as needed
                    return undefined;
                }
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    generatePlaylist(playlistRequestNLP) {
        return __awaiter(this, void 0, void 0, function* () {
            const systemPrompt = `Your job is to generate a playlist for me based on my request and only return in the following JSON format:
        {
            "response": responseToUsersRequest, 
            "playlist": [
            {"title": "...", "band (ifKnown)", "...","artist": "...", "year (ifKnown) ": ..., "genre (ifKnown) ": "..."},
            {...},
            {...}]
        }`;
            return yield this.prompt(playlistRequestNLP, systemPrompt);
        });
    }
}
exports.default = SoundScout;
