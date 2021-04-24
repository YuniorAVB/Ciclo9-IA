const dialogflow = require("@google-cloud/dialogflow");

module.exports = async function runSample({ userQuery, userId }) {
  // A unique identifier for the given session
  const projectId = "assistant-beta-ehdh";
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, userId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: userQuery,
        // The language used by the client (en-US)
        languageCode: "Spanish—es",
      },
    },
  };

  // Send request and log result
  return await sessionClient.detectIntent(request);
};
