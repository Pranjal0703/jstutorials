// API: aplication programming interface

//  APIs: js code will send request to API that this data is needed and API will response based on the our request.

// When two s/w interacts they interects through APIs. but APIs that uses https protocol(internet ke basis prr interact krati h h s/w ko) are called web APIs.

// APIs returns the data in JSON format

// SOME RANDOM APIs
// There are various APIs spme of them are paid and have key(that we have to be a authentic user of that API provider) and some APIs are free and don't have key.

// Free API example:
//  https://catfact.ninja/fact 
//  https://dog.ceo/api/breeds/image/random


// JSON (JavaScript Object Notation): it is the code in which APIs returns the data. It looks very similar to JS objects but they are different.

// It looks similar to js objects becuase it has key value pairs but all the keys present in JSON are always strings. 

// www.json.org
// JSON validators(to check if data is in valid data format): https://jsonlint.com/

// Earlier APIs return data in XML format of JSON. XML (extensible markup language) is is very similar to HTML but in XML we can make our own tags.

// ACCESSING JSON DATA
// To access JSON data we have 2 functions:
        //   JSON.parse(data) Method: To parse a string data into a JS object. Jb humare pass koi json ka data ata JS me ata h tb ek string ke andr store hokr ata h, eg:

// parse means ek data formate se dusre data formate me chnage krna

let jsonRes = '{"fact": "A cat lover is called an Ailurophilia (Greek: cat+lover).", "length": 57}';
console.log(jsonRes);
// Toh is data ko nikalne ke liye we use method JSON.parse( data )

let validResp= JSON.parse(jsonRes);
console.log(validResp);
console.log(validResp.fact);
console.log(validResp.length);


        // JSON.stringify(json) Method: To parse a JS object into JSON.
        // (This is moslty used jb hum khud ki APIs create krte h) eg:

let student= {
    name: "abc",
    marks: 99,
};
let stuData= JSON.stringify(student);
console.log(stuData);


// TESTING API REQUESTS (Tools)
    // Hoppscoth (hoppscoth.io)
    // Postman (need to download)
// both have same interface.

// Ajax (Asynchronous JavaScript and XML): 
    // It is basically a process jiske through hm apni API call krte h or humare paas response me kuch data ata h, ye pura process asynchronously hota h.

    //          req
    // ------   --->   -------
    // | JS | response | API |
    // ------   <---   -------
    //          XML

    // hm jin bhi API ko req bhejte h uska koi respose ata h, (phele response XML me ata tha) this is a asynchronous process. toh jb hum api ko req bhejte h and usme response ane me time lgta h toh web page prr baki ke kaam rukenge nhi vo chlte rhenge bina page load hue or jaise hi response aa jayega uske saath deal kr lenge, so jb hum APIs ko call bhejte h response lete h inhe AJAX calls khete h.

    // As earlier XML was there that's why it is called Ajax not Ajaj


// Hoppscoth Dashboard:
// Http Verbs:
    // GET: jb bhi hume koi info leni hoti h
    // POST: jb bhi hum apni API req ke saath kuch data post(bhejna) chahte h
    // DELETE: jb bhi API req ke andr koi cheez delete krni hoti h

//  Status Codes:
    // 200 - OK
    // 404 - Not Found
    // 400 - Bad Request 
    // 500 - Internal Server Error 

// ADDING INFORMATION IN URLs

    // Query Strings
    // https://www.google.com/search?q=new+phone
        // here q is key and the text after = is value. It is a key value pair.

    // for multiple key value in API we write:
        // ?name=abc&marks=95
            // here name and marks are key and abc and 95 are values

    // In API urls:
        // :varName, {{varName}}, <id>
        // these are the variables jinki koi valid value pass krni hoti h, isme varName ek valid id se replace hoga. Syntax:
        // api.potterdb.com/v1/movies/:id
        // example: https://api.potterdb.com/v1/movies/406c41c1-babd-4ead-9567-9783c1742d39


// Http Headers