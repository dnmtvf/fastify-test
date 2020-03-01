// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  //   return { hello: "world" };
  console.log("req", request);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
