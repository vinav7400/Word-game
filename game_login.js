function addUser(){
    player_1_name=document.getElementById("player_1").value;
    player_2_name=document.getElementById("player_2").value;

         localStorage.setItem("PLayer_1_name", player_1_name);
         localStorage.setItem("PLayer_2_name", player_2_name);
           
           window.location.replace("game_page.html");
}