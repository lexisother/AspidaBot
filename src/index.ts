import * as discord from "discord.js";
import config from "./config";

const client = new discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.username}`);
});

client.login(config.token);
