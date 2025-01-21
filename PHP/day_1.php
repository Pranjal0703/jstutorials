<?php
// ye php k tag h yha se php ko define kiya jata h

// sbse phle hm ek form create kr lete h thk h?okay

// abb isme hm vo data get krenge 

if(isset($_POST['submit'])){


    // isme hmne isset ka use kiya ye php ka function isme hmne ye kiya ki agar koi submit ko post krta h jo niche define kiya h

    $anything = $_POST['user_name'];
    // isme hmne user_name ko capture kr lia $user_name m ye kuch naam rakh skte h hm apni marzi se 
    // bss ye $_POST['user_name'] isme user_name use kiya ye jo niche input ka name h uska hona chaiye thk h?okay
    echo $anything;

    // aaya kuch smj?hnn or get wale me ye url me show hoga jo output ayega? 
    // http://localhost/php_project/?user_name=hello+user&submit=Submit ye aise url m parameter show honge get method m okay or upr bi fir $_POST ki jgh $_GET use hoga okay thk h aaj k liye itna hn phle jo maine bnaya tha usme submit krne pr error aa rha tha vo wala dikhau? ye error show hua tha ruhata hu 
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- form m 2 chizo ka dhyan rakhna hota h suru m 1 
 1 . action - agar hm php ka code same file m use kr rhe h to action ko blank rakhna h jaise form m dikh rha h abhi  action="" is trh se or agar php ka code dusri file m h to uss file ki path use krte h ex- action="file.php" is trh se abhi hm same file m use krenge to isko blank rakh lete h okay ?hnn
 
 2 . Method - ye 2 trh k hote h post or get post m hm data bhejte h jisme data jha bhej rhe h vhi dikhe gi url m nhi dikhegi agar get se bhejenge to vo url m dikhegi iska use aage btaunga abhi post ka krnege thk h?okay-->
<form action="" method="get">
    <label for="">user name</label>
    <input type="text" name="user_name">

    <input type="submit" name="submit">
    <!-- abhi hmne sirf ek input liya h dekhte h kaisa dikh rha h okay hnns thk h abhi sirf ek input h
     
    abhi hme isme ye krna h ki koi isme kuch input kre to vo show ho jaye
    
    abhi agar hm kuch kr rhe h to kuch show nhi hoga okay ?hnn-->


</form>
    
</body>
</html>