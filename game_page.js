player_1name=localStorage.getItem("PLayer_1_name");
player_2name=localStorage.getItem("PLayer_2_name");
player_1score=0;
player_2score=0;


document.getElementById("player1_name").innerHTML=player_1name;
document.getElementById("player2_name").innerHTML=player_2name;
document.getElementById("player1_score").innerHTML=player_1score;
document.getElementById("player2_score").innerHTML=player_2score;

document.getElementById("player_question").innerHTML="Question turn - "+player_1name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player_2name;

function send(){
    get_word=document.getElementById("word").value;
     word=get_word.toLowerCase();
     console.log(word);

     charat1=word.charAt(1);
     console.log(charat1);

     length_divide_2=Math.floor(word.length/2);
     charat2=word.charAt(length_divide_2);
     console.log(charat2);

     length_minus_1=word.length-1;
     charat3=word.charAt(length_minus_1);
     console.log(charat3);

     remove_charat1=word.replace(charat1,"_");
     remove_charat2=remove_charat1.replace(charat2,"_");
     remove_charat3=remove_charat2.replace(charat3,"_");
     console.log(remove_charat3);

     Question_word="<h4 id='word_display'>Q. "+remove_charat3+"</h4>";
     input_box="<br> Answer: <input type='text' id='input_check_box'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row= Question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
}


question_turn="player1";
answer_turn="player2";





function check(){
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
console.log(answer);

if(answer==word){
    if(answer_turn=="player1"){
        player_1score=player_1score+1;
        document.getElementById("player1_score").innerHTML=player_1score;
    }
    else {
        player_2score=player_2score+1;
        document.getElementById("player2_score").innerHTML=player_2score;
    }
}

if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question turn - "+player_2name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn - "+player_1name;
}

if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer turn - "+player_2name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer turn - "+player_1name;
}
document.getElementById("output").innerHTML=" ";
}
