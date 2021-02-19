function rpsGame(myChoice){
    var humanChoice,botChoice;
    humanChoice=myChoice.id;
    botChoice=intToChoice(randomInt());
    results=decideWinner(humanChoice,botChoice);
    message=finalMessage(results);
    rpsFronted(humanChoice,botChoice,message);
}
function randomInt(){
    return Math.floor(Math.random()*3);
}
function intToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(humanChoice,botChoice){
    var winnerDataBase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }
    return winnerDataBase[humanChoice][botChoice];
}
function finalMessage(myScore){
    if(myScore==0)
    return {'message':'You Lost','color':'red'};
    else if(myScore==0.5)
    return {'message':'You Tied','color':'yellow'};
    if(myScore==1)
    return {'message':'You Win!','color':'green'};
    
}
function rpsFronted(humanChoice,botChoice,message){
    var imageDataBase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    if(message['color']=='red'){
        humanDiv.innerHTML="<img src="+imageDataBase[humanChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(180, 12, 12, 0.966)'>"
        botDiv.innerHTML="<img src="+imageDataBase[botChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(8, 148, 55, 0.966)'>"
    }
    else if(message['color']=='yellow'){
        humanDiv.innerHTML="<img src="+imageDataBase[humanChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(133, 177, 11, 0.966)'>"
        botDiv.innerHTML="<img src="+imageDataBase[botChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(133, 177, 11, 0.966)'>"
    }
    else if(message['color']=='green'){
        humanDiv.innerHTML="<img src="+imageDataBase[humanChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(8, 148, 55, 0.966)'>"
        botDiv.innerHTML="<img src="+imageDataBase[botChoice]+" height=200px width=200px style='box-shadow:0px 10px 50px rgba(180, 12, 12, 0.966)'>"
    }

    
    messageDiv.innerHTML="<h1 style='color:"+message['color']+";'>"+message['message']+"</h1>"
    

    document.getElementById('flexbox-rps').appendChild(humanDiv);
    document.getElementById('flexbox-rps').appendChild(messageDiv);
    document.getElementById('flexbox-rps').appendChild(botDiv);

}