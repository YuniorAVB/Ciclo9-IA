const { WebhookClient } = require("dialogflow-fulfillment");

const routerWebHook = require("express").Router();

routerWebHook.post("/webhook", (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  let intentMap = new Map();
  intentMap.set("createPostulant", require("./CreatePostulant"));

  agent.handleRequest(intentMap);
});

module.exports = routerWebHook;
