import { createClient } from "redis";
import { config } from "dotenv";

const host = process.env.REDIS_HOST;
const user = process.env.REDIS_USER;
const password = process.env.REDIS_PASSWORD;
const port = process.env.REDIS_PORT;

const redis = createClient({
    socket: {
        host: host,
        port: port
    },
    username: user,
    password: password
});

redis.on('error', (err) => console.log('Redis Error:', err));

(async () => {
  await redis.connect();
  console.log("Connected to Redis");
})();

export default redis;