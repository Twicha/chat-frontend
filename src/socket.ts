import io from "socket.io-client";

const socket = io(
  // process.env.REACT_APP_MAIN_URL_BACKEND ||
  "http://localhost:80/chat",
  {
    // "force new connection": true,
    reconnectionAttempts: 1000,
    timeout: 10000,
    transports: ["websocket"],
  }
);

console.log(socket);

export default socket;
