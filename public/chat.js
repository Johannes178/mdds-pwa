const socket = io();

document
  .querySelector("#chat-message-input")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const inp = document.getElementById("message");
    console.log("emitting:", inp.value);
    socket.emit("chat message", inp.value);
    inp.value = "";
  });

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.innerHTML = msg;
  document.getElementById("messages").appendChild(item);
});
socket.on("response", (msg) => {
  console.log(msg);
});
