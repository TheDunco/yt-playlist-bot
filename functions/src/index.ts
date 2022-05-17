import * as functions from "firebase-functions";
import fetch from "node-fetch";

export const youTubeFn = functions.https.onRequest(async (request, response) => {
  
  const resp = await fetch('https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20')
  const data = response.json();

  console.log(data);
});