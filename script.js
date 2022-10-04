var initialprice=document.querySelector("#initial-price");
var quantityOfStocks=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#latest-price");
var tellMe=document.querySelector("#button-operate");
var outputBox=document.querySelector("#output-box");
var outputboxs=document.querySelector("#output");

tellMe.addEventListener('click',tellMeHandler);

function tellMeHandler(){
  var ip= Number(initialprice.value);
  var qty= Number(quantityOfStocks.value);
  var lp= Number(currentPrice.value);
  profitAndLoss(ip,qty,lp);
}

function profitAndLoss(initial,quantity,current){
if(initial>0 && quantity>0 &&current>0){
    if(initial>current){
    var loss= (initial-current)*quantity;
    var lossPercentage=(loss/(initial*quantity))*100;
    outputBox.innerText="The loss is "+loss;
    outputboxs.innerText="The loss percentage is "+lossPercentage;
  }
  else if(current>initial){
    var profit=(current-initial)*quantity;
    var profitPercentage=(profit/(initial*quantity))*100;
    outputBox.innerText="The profit is "+profit;
    outputboxs.innerText="The profit percentage is "+profitPercentage;
  }
  else{
    outputBox.innerText="no profit no loss";
    outputboxs.innerText=""
  }

}
else{
  outputBox.innerText="Input cannot be Negative or Zero"
}
  
}

