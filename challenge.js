
let accountBalance=300;
let depositFunds;=prompt("How much would you like to deposit?");
let withdrawFunds;=prompt("How much would you like to withdraw?");

prompt("What would you like to do today, withdraw or make a deposit or end?");
if (choice=="deposit"){
    depositFunds=prompt("How much would you like to deposit?");
    depositFunds=Number(depositFunds);

accountBalance =deposit(accountBalance,depositFunds)

if (accountBalance>0){
    alert("You got monnneeeyy!!")
}
else {
    alert("Low Funds")
}
`Your New balance is: ${accountBalance}`;

}
else if(choice=="withdraw"){
    withdrawFunds=prompt("How much would you like to withdraw?");
    withdrawunds=Number(withdrawFunds);
    
accountBalance =withdraw(accountBalance,withdrawFunds)

if (accountBalance>0){
    alert("You got monnneeeyy!!")
}
else {
    alert("Low Funds")
}
`Your New balance is: ${accountBalance}`;
    
}


function deposit(aB,dF){
    return aB+dF;
}
function withdraw(aB,wF){
    return aB+wF;
}
