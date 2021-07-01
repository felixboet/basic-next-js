exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("process.env from function hello.js");
  console.log(process.env);
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
