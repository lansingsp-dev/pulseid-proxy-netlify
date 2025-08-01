// pulseid-proxy.js
export async function handler(event, context) {
  const API_KEY = "pulseRockBottomGolf";
  const COMPANY = "PersonalizeYourGear";

  const method = event.httpMethod;
  const { url } = event.queryStringParameters || {};

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing 'url' parameter" }),
    };
  }

  const options = {
    method,
    headers: {
      "apiKey": API_KEY,
      "company": COMPANY,
      "Content-Type": "application/json",
    }
  };

  if (method === "POST" || method === "PUT") {
    options.body = event.body;
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, apiKey, company",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}