"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const secret = process.env.STREAM_SECERET_KEY;

export const TokenProivder = async () => {
  const user = await currentUser();
  if (!user) throw new Error("User not found");
  if (!apiKey || !secret)
    throw new Error("Stream API key or secret is missing");
 
  const client =new StreamClient(apiKey, secret);

  // validity is optional (by default the token is valid for an hour)
const vailidity = Math.round( new Date().getTime() / 1000) + 3600;
const issued= Math.floor(new Date().getTime() / 1000)+60;

const token=client.generateUserToken({user_id:user.id, vailidity, issued});

return token;
};
