var score = 0;
$(".answers1").click(function(){
     var answer1 = this.textContent;
     if(answer1==="\n                            A) Rhaegal\n                        "
     ){
        score++;
        $(".answers1").unbind("click");
     }
    
});

   

$(".answers2").click(function(){
    var answer2 = this.textContent;
    if(answer2==="\n                            D) Pyat Pree\n                        "){
        score++;
        $(".answers2").unbind("click");
    }
})
$(".answers3").click(function(){
    var answer3 = this.textContent;
    if(answer3==="\n                            A) Kraznys\n                        "){
        score++;
        $(".answers3").unbind("click");
    }
})
$(".answers4").click(function(){
    var answer4 = this.textContent;
    if(answer4==="\n                            B) 40000\n                        "){
        score++;
        $(".answers4").unbind("click");
    }
})
$(".answers5").click(function(){
    var answer5 = this.textContent;
    if(answer5==="\n                            C) Jorah Mormont\n                        "){
        score++;
        $(".answers5").unbind("click");
    }
})
$(".answers6").click(function(){
    var answer6 = this.textContent;
    if(answer6==="\n                            A) Gold\n                        "){
        score++;
        $(".answers6").unbind("click");
    }
})
$(".gif").click(function(){
   
    if(score===6){
       
       $(".gif").attr("src","https://media2.giphy.com/media/Q6gPyUYrCk76g/giphy.gif?cid=ecf05e47448l04jjt702fcxg0boq2v7qxbcngrqsn75ho2ki&rid=giphy.gif&ct=g");
       $(".correct").text("Your score is "+score+"/6. Woah you are the true fan of Khaleesi ");
    }
    else if(score===0 || score ===1 || score===2){

        $(".gif").attr("src","https://media3.giphy.com/media/nqlOlNMXtmNNu/giphy.gif?cid=ecf05e47m6j0s0yasnisezx0zpz674e25zl6e08lb495u2e3&rid=giphy.gif&ct=g");
        $(".correct").text("Your score is "+score+"/6.");
       
    }
    else
    {
        $(".gif").attr("src","https://media4.giphy.com/media/ZAppwio21zEjvkxEFd/giphy.gif?cid=ecf05e47y0jll4oi1snlcc7se0str4rz2e8nhfpn45ez004p&rid=giphy.gif&ct=g");
        $(".correct").text("Your score is "+score+"/6. Its Ok you can refresh the page and try again");
        
    }

    score=0;


   
})

    
