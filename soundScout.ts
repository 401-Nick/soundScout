import OpenAI from 'openai';
require('dotenv').config();

const OpenAIModel = 'gpt-3.5-turbo';

if (process.env.OPENAI_API_KEY === undefined) {
    throw new Error('Please set your OpenAI API key in the .env file');
}

export default class SoundScout {
    openai: OpenAI;

    constructor(apiKey: string) {
        this.openai = new OpenAI({
            apiKey: apiKey
        });
    }

    async prompt(prompt: string, systemPrompt: string = '', max_tokens: number = 2048): Promise<string | undefined> {
        try {
            const response = await this.openai.chat.completions.create({
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
            } else {
                // Handle the null value as needed
                return undefined;
            }
        } catch (err) {
            console.error(err);
        }
    }

    async generatePlaylist(playlistRequestNLP: string): Promise<string | undefined> {
        const systemPrompt = `Your job is to generate a playlist for me based on my request and only return in the following JSON format:
        {
            "response": responseToUsersRequest, 
            "playlist": [
            {"title": "...", "band (ifKnown)", "...","artist": "...", "year (ifKnown) ": ..., "genre (ifKnown) ": "..."},
            {...},
            {...}]
        }`;
        
        return await this.prompt(playlistRequestNLP, systemPrompt);
    }
}
