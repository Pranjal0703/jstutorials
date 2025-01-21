<?php
// ek array me data or data k sets ho skte h 

$array = array("name","my", "hello");

// ye ek array h isme data h isko hm echo nhi kr skte kyunki ye array or array k andr elements hote h inki ek position or index hota h

// jaise jo "name" h vo 1 position p h mtlb uska index 0 h or "my" 2nd position h lekin uska index 1 h okay ?hnn

// echo $array; // dekho isme error aa gya ki echo ka use sirf string print krne k liye hota habb hm iske liye use krenge print_r

print_r($array); // thk h aaya smj hnn ab hm iske alg alg elements ko print krnege position k hisab se

print_r($array[0]); // means hme array me se 0 position ka elemnt chaiye thk h hnnchiz 
echo "<br>";  // ye next m print ho iss vjh se use kiya h
echo $array[1];  // ye abb aise bi print ho skta h kyunki abb ye string bn gya  thk h aaya smj hnnise hi hm baki k elemeprint kr skte h psotion k hisab se okay? hnn isme hm iske total items ko bi count kr skte h

echo "<br>";

echo count($array); // ye kuch built in functions h ye hme yaad rakhne pdenge thk h hnn isme lenght func nhi hot ? nhi isme nhi vo javascript m hoga okay ye jo hmne kiya ye indexed array tha array k kyi sare types h

// isme hm kisi bi position k element ki value bi change kr skte h
echo "<br>";

$array2 = array("name","my", "hello");
// abhi hm "name" jo h 0 position p uski value change krenge

$array2[0] = "pranjal";

print_r($array2); // thk h aaya smj hnn var dump wala datatype ke liye hota h na?ha usse ye pta lg jata h jo data h uska type kya h okay isi m loop ka bi bta du? hnn abb hm $array 2 p foreach ka loop use krenge iske element ko print krne k liye
echo "<br>";
foreach($array2 as $any_name=>$element){
    // isme element ko hm kuch bi naam de skte h okay Hnn isme hm sath m uske index number bi print kr skte h
    echo $any_name."--".$element."<br>"; // thk hnn

    // thk aaya smj key wale me bhi kuch bhi naam de skte h? ha bss method yhi hona chaiye
}

// isme upr vale m hme array k elemnt ko change kiya tha position bta k abb hm krenge ki array m nya element kaise add krte h thk h hnn

echo "<br>";

$array3 = array("name","my", "hello");
// abb hm isme ek ny elemt add krte h

array_push($array3,"Pranjal"); // thk h ye function yaad rakhne pdenge okay 

print_r($array3);


// aaj k liye itna hi na to confuse ho jayegi okay isko phle kl aa ke revise krna fir next krenge tere se puchunga phle okay okay 

?>