exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  console.log("process.env from function hello.js");
  console.log(process.env.NETLIFY);
  console.log(process.env.BRANCH);
  console.log(process.env.CONTEXT);
  console.log(process.env.REPOSITORY_URL);
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
