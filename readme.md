# SoundScout

SoundScout is a TypeScript module that leverages OpenAI's GPT-3.5-turbo model to generate playlists based on natural language queries.

## Prerequisites

- Node.js
- An OpenAI API key
- TypeScript compiler (tsc)

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and set the OpenAI API key:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

## Compiling TypeScript

Since SoundScout is written in TypeScript, it must be compiled into JavaScript before running. Use the following command:

```bash
tsc
```

## Usage

### Importing the Module

Import the SoundScout class into your project:

```typescript
import SoundScout from "./soundScout.js";
```

### Initializing SoundScout

Create an instance of SoundScout with your OpenAI API key:

```typescript
const apiKey = process.env.OPENAI_API_KEY;
const ss = new SoundScout(apiKey);
```

### Generating a Playlist

Use the `generatePlaylist` method to generate a playlist based on a query:

```typescript
ss.generatePlaylist("give me a playlist of 5 funk/soul songs from the 80s")
.then((response) => {
    console.log(response);
});
```

## Methods

### `prompt(prompt: string, systemPrompt: string = '', max_tokens: number = 2048): Promise<string | undefined>`

General-purpose method to send a prompt to OpenAI.

### `generatePlaylist(playlistRequestNLP: string): Promise<string | undefined>`

Generates a playlist based on a natural language query.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.