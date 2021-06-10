const { WebhookClient } = require("dialogflow-fulfillment");

const routerWebHook = require("express").Router();

routerWebHook.post("/webhook", async (req, res) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaa");
  const agent = await new WebhookClient({ request: req, response: res });

  let intentMap = new Map();
  intentMap.set("createPostulant", require("./CreatePostulant"));
  intentMap.set("stallFree", require("./StallFree"));
  intentMap.set("welcomeChat", require("./WelcomeChat"));
  intentMap.set("stallTracking", require("./StallTracking"));

  await agent.handleRequest(intentMap);
});
module.exports = routerWebHook;
