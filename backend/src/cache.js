import { createClient } from "redis";
import { config } from "dotenv";

config();

const url = process.env.REDIS_URL || "redis://localhost:6379";
console.log("Redis url:", url);

const redis = createClient({ url });

redis.on('error', (err) => console.log('Redis Error:', err));

(async () => {
  await redis.connect();
  console.log("Connected to Redis");
})();

export default redis;