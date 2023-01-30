player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - "+player2_name;
function send(){
    Number1 = document.getElementById("word").value;
    Number2 = document.getElementById("word1").value;
    actual_answer = parseInt(Number1)*parseInt(Number2);
    console.log(actual_answer);
    question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    inputbox = "<br>Answer:<input type = 'text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class = 'btn btn-primary' onclick = 'check()'>Check</button>";
    row = question_number + inputbox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word1").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    if(getAnswer == actual_answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
    }
    
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}


