const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomCreateHandler = (socket) => {
  console.log("roomCreateHandler executed");
  const socketId = socket.id;
  const userId = socket.user.userId;

  const roomDetails = serverStore.addNewActiveRoom(userId, socketId);

  socket.emit("room-create", {
    roomDetails,
  });

  roomsUpdates.updateRooms();
};

module.exports = roomCreateHandler;
