## socket for click side 
 step 1. You have to install "socket.io-clien" by run "npm i socket.io-clien" in your terminal.
 step 2.  import { io } from 'socket.io-client' in Socket.js file.
 step 3. initialize socket;
 step 4. let a variable name "CON_PORT" and put the value of your channel that is given by your Backend Team.
 step 5. join room for chat by unique id .
 step 6. for joining room , send or receive message you must have same emit name as backend like .
 # socket.emit("join_room",{--your id for room join--})
 # socket.emit("send_message",{--your messages---})
 # socket.on("receive_message") this is a callback function.

  Note. 
  1.for receive message use "socket.on" .
  2. for send message use "socket.emit" .