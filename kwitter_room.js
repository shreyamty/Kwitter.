var firebaseConfig = {
      apiKey: "AIzaSyA64qNKFlNAKi6CqV4iF2AqeiIBBbbmKj8",
      authDomain: "kwitter-27-march.firebaseapp.com",
      databaseURL: "https://kwitter-27-march-default-rtdb.firebaseio.com",
      projectId: "kwitter-27-march",
      storageBucket: "kwitter-27-march.appspot.com",
      messagingSenderId: "728545673087",
      appId: "1:728545673087:web:a5f79f95c4ccbcd0c3644a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}