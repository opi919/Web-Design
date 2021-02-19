// Challenge 1:Your age in days
function ageInDays()
{
    var name=prompt('What is your name?');
    var birthyear=prompt('What is your birthyear?');
    var days=(2018-birthyear)*365;
    if(name!=null)document.getElementById('days').innerHTML='Hello '+name+' your are '+days+' days old';
    //var h1=document.createElement('h1');
   // var answer=document.createTextNode('Hello '+name+' your are '+days+' days old');
  // h1.setAttribute('id','days');
    //h1.appendChild('answer');
    //document.getElementById('days').appendChild(h1);
}
function reset(){
    //document.getElementById('days').remove;
    document.getElementById('days').innerHTML='Hello Beautiful!!';
}
//Challenge 2: Cat Generator
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flexbox-cat');
    image.src="images/frnd.jpg";
    div.appendChild(image);
}
//Challenge 3: Rock,Paper,Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=intToChoice(ranToInt());
    console.log(botChoice);
    results=decideWinner(humanChoice,botChoice);
    message=finalMsg(results);
    console.log(message);
    rpsFronted(yourChoice.id,botChoice,message);
}
function ranToInt(){
    return Math.floor(Math.random()*3);
}
function intToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,botChoice){
    var rpsDataBase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }
    var yourScore=rpsDataBase[yourChoice][botChoice];

    return yourScore;
}
function finalMsg(yourScore){
    if(yourScore==0)
    {
        return {'message':'You Lost','color':'red'};
    }else if(yourScore==0.5){
        return {'message':'You Tied','color':'yellow'};
    }
    else if(yourScore==1){
        return {'message':'You Won!','color':'green'};
    }
}
function rpsFronted(humanImageChoice,botImageChoice,finalMessage){
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
    var messageDiv=document.createElement('id');

    humanDiv.innerHTML="<img src='"+imageDataBase[humanImageChoice]+"'height=150 weight=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'> "
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:60px;padding:30px;'>"+finalMessage['message']+"</h1>";
    botDiv.innerHTML="<img src='"+imageDataBase[botImageChoice]+"'height=150 weight=150 style='box-shadow:0px 10px 50px rgba(240,113,9,1)'> ";
    
    document.getElementById('flexbox-rps').appendChild(humanDiv);
    document.getElementById('flexbox-rps').appendChild(messageDiv);
    document.getElementById('flexbox-rps').appendChild(botDiv);
}
    //Challenge 4: Change the color of all buttons
    allButtons=document.getElementsByTagName('button');

    var copyAllButtons=[];
    for(var i=0;i<allButtons.length;i++)
    {
        copyAllButtons.push(allButtons[i].classList[1]);
    }

    function colorChange(buttonDetail){
        if(buttonDetail.value=='red')
        {
            buttonRed();
        }else if(buttonDetail.value=='green'){
            buttonGreen()
        }else if(buttonDetail.value=='reset'){
            buttonReset()
        }else if(buttonDetail.value=='random'){
            buttonRandom()
        }
    }

    function buttonRed(){
        for(var i=0;i<allButtons.length;i++){
            allButtons[i].classList.remove(allButtons[i].classList[1])
            allButtons[i].classList.add('btn-danger')
        }
    }

    function buttonGreen(){
        for(var i=0;i<allButtons.length;i++){
            allButtons[i].classList.remove(allButtons[i].classList[1])
            allButtons[i].classList.add('btn-success')
        } 
    }

    function buttonReset(){
        for(var i=0;i<allButtons.length;i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllButtons[i]);
        }
    }

    function buttonRandom(){
        
        let choice=['btn-primary','btn-danger','btn-warning','btn-success'];
        for(var i=0;i<allButtons.length;i++){
            let randomNumber=Math.floor(Math.random()*4);
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(choice[randomNumber]);
        }
    }
    //Challenge 5: Blackjack
    let blackjackGame={
        'you':{'scoreSpan':'#your-result','div':'#your-box','score':0,'win':'You'},
        'dealer':{'scoreSpan':'#dealer-result','div':'#dealer-box','score':0,'win':'Dealer'},
        'cards':['2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','J.png','K.png','Q.png','A.png'],
        'cardsMap':{'2.png':2,'3.png':3,'4.png':4,'5.png':5,'6.png':6,'7.png':7,'8.png':8,'9.png':9,'10.png':10,'J.png':10,'K.png':10,'Q.png':10,'A.png':[1,11]},
        'wins':0,
        'losses':0,
        'draws':0,
        'isStand':false,
        'turnsOver':false,
    }

    document.querySelector('#hit').addEventListener('click',blackjackHit);
    document.querySelector('#deal').addEventListener('click',blackjackDeal);
    document.querySelector('#stand').addEventListener('click',blackjackStand);

    const YOU=blackjackGame['you'];
    const DEALER=blackjackGame['dealer'];
    const hitSound=new Audio('sounds/swish.m4a');
    const winSound=new Audio('sounds/cash.mp3');
    const lossSound=new Audio('sounds/aww.mp3');

    function blackjackHit(){
        if(blackjackGame['isStand']==false){
            let card=randomCard();
            showCard(YOU,card);
            updateScore(YOU,card);
            showScore(YOU);
        }
    }

    function blackjackDeal(){
        if(blackjackGame['turnsOver']==true){
            let yourImages=document.querySelector('#your-box').querySelectorAll('img');
            let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
    
            for(let i=0;i<yourImages.length;i++){
                yourImages[i].remove();
            }
            for(let i=0;i<dealerImages.length;i++){
                dealerImages[i].remove();
            }
    
            YOU['score']=0;
            DEALER['score']=0;
            document.querySelector('#your-result').textContent=YOU['score'];
            document.querySelector('#your-result').style.color='white';
            document.querySelector('#dealer-result').textContent=DEALER['score'];
            document.querySelector('#dealer-result').style.color='white';
    
            document.querySelector('#play').textContent="Let's Play";
            document.querySelector('#play').style.color='black';

            blackjackGame['isStand']=false;
            blackjackGame['turnsOver']=false;
        }
    }

   async function blackjackStand(){

    if(YOU['score']>21){
        while(DEALER['score']<2) {
            let card=randomCard();
            showCard(DEALER,card);
            updateScore(DEALER,card);
            showScore(DEALER);
            await sleep(1000);
           }
    }
    else {
       while(DEALER['score']<16) {
        let card=randomCard();
        showCard(DEALER,card);
        updateScore(DEALER,card);
        showScore(DEALER);
        await sleep(1000);
       }
    }
        blackjackGame['isStand']=true;
     blackjackGame['turnsOver']=true;
     showWinner();
       
    }

    function randomCard(){
        let random=Math.floor(Math.random()*13);
        return blackjackGame['cards'][random];
    }

    function showCard(active,card){
        if(active['score']<=21){
        let cardImage=document.createElement('img');
        cardImage.src= 'images/'+card;
        document.querySelector(active['div']).appendChild(cardImage);
        hitSound.play();
        }
    }

    function updateScore(acitve,card){
        if(card=='A.png'){
            if(acitve['score']+blackjackGame['cardsMap'][card][1]<=21){
                acitve['score']+=blackjackGame['cardsMap'][card][1];
            }
            else {
                acitve['score']+=blackjackGame['cardsMap'][card][0];
            }
        }
        else{
        acitve['score']+=blackjackGame['cardsMap'][card];
        }
    }

    function showScore(active){
        if(active['score']>21){
            document.querySelector(active['scoreSpan']).textContent="BUST!";
            document.querySelector(active['scoreSpan']).style.color='red';
        }
        else {
        document.querySelector(active['scoreSpan']).innerHTML=active['score'];
        }
    }

    function computeWinner(){
        let winner;
        if(YOU['score']<=21){
            if(YOU['score']>DEALER['score'] || DEALER['score']>21){
                winner=YOU;
                blackjackGame['wins']++;
            }else if(YOU['score']==DEALER['score']){
                winner=0;
                blackjackGame['draws']++;
            }else {
                winner=DEALER;
                blackjackGame['losses']++;
            }
        }else if(YOU['score']>21 && DEALER['score']<=21){
            winner=DEALER;
            blackjackGame['losses']++;
        }else if(YOU['score']>21 && DEALER['score']>21){
            winner=0;
            blackjackGame['draws']++;
        }
        return winner;
    }

    function showWinner(){
        let message,messageColor;
    let winner=computeWinner();
    if(winner==YOU){
        message='You Win!';
        messageColor='green';
        winSound.play();
    }else if(winner==DEALER){
        message='You Lost!';
        messageColor='red';
        lossSound.play();
    }else {
        message='You Drew';
        messageColor='yellow';
    }
    document.querySelector('#play').textContent=message;
    document.querySelector('#play').style.color=messageColor;

    document.querySelector('#wins').textContent=blackjackGame['wins'];
    document.querySelector('#losses').textContent=blackjackGame['losses'];
    document.querySelector('#draws').textContent=blackjackGame['draws'];
    }

