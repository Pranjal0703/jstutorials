<?php


// kl vale me koi doubt? HNN vo file open kaise hogi html me toh go lie krne se hoti h isme kaise hogi
// okay php ek backend language h koi bi backend language k liye ek server chaiye hota h or ek engine
// isme hm php k liye Apache server use krte h php apache server p run hoti isme hm phle xampp ko start krte to xampp ke andr apache server h to vo apache server ko run kr deta h jispe php ki scripts run hoti h okay hnn
// to sbse phle xampp run kro or apache satrt kro kra hua h

// okay kl hmne kra tha indexed array or ek foreach ka loop ye smj aa gya tha? hnn 
// phle hmne usme kiya tha ki array me hr ek element ki ek position hoti h jisme hm index bolte h iss vjh se usko indexed array bolte h thk h? hnn aaj hm krenge associative array

$indexed_array = array("element 1","element 2","element 3");

// ye hmara kl vala array h phle isko print krte h

print_r($indexed_array);

// isme agar hme 2nd position ka elemnt print krna ho to kaose krnege krke bta

echo $indexed_array[1]; // ye 3rd psotion  position 1 se start hoti h or index 0 se? ha okay thk h abb krte aasociative array

echo "<br>";

$assoc_array = array("name"=>"Pranjal","designation"=>"developer");
// isme hme hr ek element me uske associate m ek key rakh di jaie pranjal k liye naam
// isme aise h jaise name isme key 
// or Pranjal value h  array("Key"=>"Value") thk h ? hnn 

// abb hme agar pranjal print krna ho to
$assoc_array["name"] = "Ashok"; // thk h
// hnn
// echo $assoc_array["designation"];

// abb hm isme 2 chize use krnege str concat
echo "<br>";
echo "My name is ".$assoc_array['name']." & my position is ".$assoc_array['designation'];

// thk h aaya smj? hnn agr isme puri array print krani ho toh print_r wala use hoga? ha dekh try kr

print_r($assoc_array);
// echo $assoc_array; hua clear ya btau kucho gya isme bi jaise phle vale me kiyatha ki kisi bi index p uski value change kr skte h isme bss key ka name dena h

// abb krnege isme same vhi loop usme hmne key add kry thi to vo index number de rha tha yha key dega
echo "<br>";

foreach($assoc_array as $key=>$value){
    print_r($key."--".$value);
    echo "<br>";
}

// aaya smj?hnn
// hm array ko dusre trike se bi likh skte h

$new_array = ["element 1","element 2","element 3"];
// $indexed_array = array("element 1","element 2","element 3");
// ye or upr vala same h ye dono same h okay associative wale ko bhi aise kr skte h? ha okay hmne array m item add krna to sikh liya abb remove krenge kis position p
unset($new_array[1]); // okeay isme index bhi ht jayega ha okay
// iske liye ek function h unset(index)
print_r($new_array);
// abhi hm 2nd psotion ka elemnt remove krnege jsika index number h 1
// abb hm krenge array ki sorting

$s_array = [1,4,2,7,3];
sort($s_array);

print_r($s_array); // okay aaya smj hnn sorting m bi kyi types hote h vo tu dekh lena m type kr deta hu tu try kr lena arsort, krsort, rsort,asort, ksort, inko google kr lena okay

// array m 2 chiz or rh gyi kre aaj hi ya kl kregi aap batao agar tuje jyada na lg rha ho to bta abhi krlete h
// thk h isme next h multidimensional array , isme array k andr kyi sare array ho skte h

$multi_array = array(
    array("name"=>"Pranjal","age"=>"23"),
    array("name"=>"ashok","age"=>"25")
);

// abb isme hm index number or key k hisab se print krnege aise hme pranjal ko print krna h

// to array me 0 index first array h or uske "name" key p pranjal h

print_r($multi_array[1]["age"]); // thk h aaya smj hnn bake agla h array k functions vo bhot sare h vo tuje khud try krne pdenge m bta deta hu thk h?okay array_search() array_reverse() array_push()


// ye itne sare h jo abhi show hue the bss inko dhyan m rakhna hota h kuch ginti k h jo jyada use hote h baki bhot km hote h rare hi
// jaise array_push h ye jyada use hota h
// array_map()
// array_merge()
// array_unique()
// array_key_last()

// ye aise h bhot sare inke upr cusor leke jayegi to inke use ka pta lg jayega thk h ?Hnn ajj array khtm ho gya kl dusra krenge okay koi doubt nhi simple h ?Hnn easy  mja aya hnnthk h kr le save apne pass okay
?>