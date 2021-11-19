/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

let vorName, alter;

vorName =prompt("Bitte, geben sie ihren Vornamen ein!");
alter =prompt("Bitte, geben sie ihr alter ein!");

console.log (vorName + " " + alter); 


   if 
        (alter <= 5) 
{   console.log(vorName  + " trinkt Milch!");

   }  else if 
        (alter >=6 && alter <= 12)
{   console.log(vorName + " trinkt Saft!");

    } else if  
        (alter >= 13 && alter <=17)  
{   console.log(vorName + " tinkt Cola!");

    } else 
        (alter >= 18);
{   console.log(vorName + " trinkt Wein!");

 }  
     








