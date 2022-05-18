import * as functions from "firebase-functions";
import fetch from "node-fetch";
import key from "../../key";

const channelIds = ["UCp8OOssjSjGZRVYK6zWbNLg"];
export const youTubeFn = functions.https.onRequest(
  async (request, response) => {
    channelIds.forEach(async (channelId) => {
      const resp = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
      );
      const data = await resp.json();

      console.log(data);
      functions.logger.log(data);
    });
  }
);
