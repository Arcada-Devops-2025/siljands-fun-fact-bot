import { expect, test } from 'vitest'

const url = "https://siljands-fun-fact-bot-fun-fact-bot.2.rahtiapp.fi/voice";
async function getResponse(url) {
  let responseObject = await fetch(url);
  let response = await responseObject.text();
  //console.log(response);
  if (typeof response == "string"){
    return true
  }
  else{
    return false
  }
}

test('checks response status', async () => {
    await expect(getResponse(url)).resolves.toBe(true);
})
