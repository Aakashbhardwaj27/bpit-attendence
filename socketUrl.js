

const io = require("socket.io-client");
 const SOCKET_URI = "https://socketapi37464cvfgfsdhfg.megahoot.net"
//const SOCKET_URI = "http://192.168.0.108:4000";
const socket = io(SOCKET_URI, {
  transports: ["websocket"],
});

export async function startSocket() {
  await socket.connect();
}

export function stopSocket() {
  if (socket.connected) {
    socket.disconnect();
    console.log("socket connected: ", socket.connected);
  } else {
    console.log("no active socket connection found");
  }
}

export default socket;