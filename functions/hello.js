exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("process.env");
  console.log(process.env);
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
