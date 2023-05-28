
document.getElementById("btn-rule").addEventListener("click", function()
 {
    document.getElementById("box").style.display = "block";
  });
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("box").style.display = "none";
  });
  document.getElementById("btn-rule1").addEventListener("click", function()
 {
    document.getElementById("box1").style.display = "block";
  });
  document.getElementById("close1").addEventListener("click", function() {
    document.getElementById("box1").style.display = "none";
  });

  let ply = document.querySelectorAll(".ply");
  let computer = document.querySelectorAll(".computer");
  let you = document.querySelector(".you");
  let pc = document.querySelector(".pc");
  let winmodal = document.querySelector(".win-modal");
  let winner = document.querySelector(".winner");
  let lost = document.querySelector(".lost");
  let tiemodal = document.querySelector(".tie-modal");
  let play = document.querySelector(".play");
  let playagain = document.querySelector(".playagain");
  let same = document.querySelector(".same");
  let btn1 = document.querySelector(".btn1");
  let next= document.querySelector(".next");
  let btndiv= document.querySelector(".btn-div");
  let c1 = document.querySelector(".c1");
  let c2 = document.querySelector(".c2");
  let c3 = document.querySelector(".c3");
  let c4 = document.querySelector(".c4");
  let c5 = document.querySelector(".c5");
  let c6 = document.querySelector(".c6");
  let tie = document.querySelector(".tie");
   let gamescore =JSON.parse(localStorage.getItem("sc"))
 let scoreElem = document.getElementById("points");
 if(gamescore)
 {
   scoreElem.innerText=gamescore;
}
 let count = 0;

let Cgamescore =JSON.parse(localStorage.getItem("scr"))
 let scoreElem2 = document.getElementById("cpoints");
 if(Cgamescore)
 {
   scoreElem2.innerText=Cgamescore;
}
 let countcomp = 0;

  let random = Math.floor(Math.random()*3);
  let join1 = document.querySelector(".line1");
  let join2 = document.querySelector(".line2");
  let join3 = document.querySelector(".line3");


  
  ply.forEach((element,index)=>{
    element.addEventListener("click",()=>{
      you.style.opacity="1";
      join1.style.display = "none";
      join2.style.display = "none";
      join3.style.display = "none";
     ply.forEach(item =>{
      item.style.display = "none";
     });
     element.style.display="block";
     element.classList.add("display")
     setTimeout(() =>{
      pc.style.opacity="1";
setTimeout(() =>{
  computer[random].style.display="block";
  computer[random].classList.add("pc-display")
},2);
setTimeout(() =>{
if( index==0 && random==2 || index==1 && random==0 ||index==2 && random==1 ){
 winmodal.style.display="grid";
 winner.innerText="YOU WIN";
 lost.innerText="AGAINST PC";
 c1.style.opacity="1";
 c2.style.opacity="1";
 c3.style.opacity="1";
 count = gamescore;
 count ++;
 scoreElem.innerText=count;
 localStorage.setItem("sc", JSON.stringify(count));
 btn1.style.display="block";
 next.style.display="block";
 btndiv.style.display="none";
 }

else if(index == random){
  tiemodal.style.display="grid";
  element.style.display="block";
  tie.innerText="TIE UP";
}
else{
  winmodal.style.display="flex";
  winner.innerText="YOU LOST";
  lost.innerText="AGAINST PC";
  c4.style.opacity="1";
  c5.style.opacity="1";
  c6.style.opacity="1";
  countcomp = Cgamescore;
  countcomp ++;
  scoreElem2.innerText=countcomp;
  localStorage.setItem("scr", JSON.stringify(countcomp));
}
}, 400);
     },200);
    })
  });
  play.addEventListener("click",() =>{
    window.location.reload();
  })
  same.addEventListener("click",() =>{
    window.location.reload();
  })
  playagain.addEventListener("click",() =>{
    window.location.reload();
  })
  
  
