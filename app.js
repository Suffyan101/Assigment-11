// Question 1
// function power(a,b){
//     for( i= 1; i<=b ;i++ ){
//         var result = a*i
//         document.write(result+"<br>")
//     }
    
// }

// power(6,10)

// Question 2

// var a  = +prompt("Please enter year to check its leap or not...2019,2022.2023")

// function leayYear(){
//     if(a%4===0){
//         document.write("Leap Year")
//     }
//     else{
//         document.write("Not a Leap Year")
//     }
// }

// leayYear(a)


// Question 3

// var a = 6
// var b = 6
// var c = 6

// function areaTriangle(){
//     var s = (a+b+c)/2
//     areat(s)
//     function areat(){
//         var area = s*(s-a)*(s-b)*(s-c)
//         document.write("The area of Triangle is: "+ area)
//     }
// }

// areaTriangle(a,b,c)

// Question 4

// var a = +prompt("Your English marks")
// var b = +prompt("Your Math marks")
// var c = +prompt("Your Chemistry marks")

// function marksheet(){
//     var markObtaint = a+b+c
//     function average(){
//         var ave = markObtaint/3
//         document.write("Your Average is: "+ave+"<br>")
//     }
//     function percentage(){
//         var per = markObtaint/300*100
//         document.write("Your Percentage is: "+per)
//     }
//     average(markObtaint)
//     percentage(markObtaint)
// }

// marksheet(a,b,c)


// Question 5

// var a = "carry"
// function index(){
//     var b = "r";
    
//     for(i=0; i<=a.length; i++){
//         var c = a[i]
//         // var d = i-1
//         if(b===c){
//             document.write("Index of "+ b +" is: "+i+"<br>")
//         }
//     }
// }
// index(a)

// Question 6

// var a = "abbcdefghiOu"

// function removeVowel(){
//     var result =[]
//     for(i=0;i<a.length;i++){
//         if(a[i]!=="a" && a[i]!=="e" && a[i]!=="i" && a[i]!=="o" && a[i]!=="u"){
//             result+=a[i]
//         }
//     }
//     document.write(result)
// }
// removeVowel(a)


var a = "Pleases read this application and give me gratuity"

    var result =""
    for(i=0;i<a.length;i++){
        switch (a){
            case a[i]=="a" && a[i]=="e" && a[i]=="i" && a[i]=="o"&& a[i]=="u" 
            &&a[i+1]=="a" && a[i+1]=="e" && a[i+1]=="i" && a[i+1]=="o"&& a[i+1]=="u":
            result+=a[i]
            result+=a[i+1]

        } 
    }
