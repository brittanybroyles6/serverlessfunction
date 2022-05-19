const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "https://dadjokegenerator.com/";
  try {
    const jokeStream = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    });
    const jsonJoke = await jokeStream.json();
    return {
      statusCode: 200,
      body: jsonJoke
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};