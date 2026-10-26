import { createServer } from "node:http";

const port = process.env.PORT ?? 3000;

const server = createServer((_request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Hello from Docker!" }));
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});