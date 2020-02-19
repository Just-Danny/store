//Plush array
var plush = new Array();
plush[0] = new Image();
plush[0].src ="plush.jpg";
plush[1] = new Image();
plush[1].src = "plush1.jpg";
plush[2] = new Image();
plush[2].src = "plush2.jpg";
plush[3] = new Image();
plush[3].src = "plush3.jpg";



//Figure array
var fig = new Array();
fig[0] = new Image();
fig[0].src ="fig.jpg";
fig[1] = new Image();
fig[1].src = "fig1.jpg";
fig[2] = new Image();
fig[2].src = "fig2.jpg";
fig[3] = new Image();
fig[3].src = "fig3.jpg";

//Hood array
var hood = new Array();
hood[0] = new Image();
hood[0].src ="hood.jpg";
hood[1] = new Image();
hood[1].src = "hood1.jpg";
hood[2] = new Image();
hood[2].src = "hood2.jpg";
hood[3] = new Image();
hood[3].src = "hood3.jpg";


//Search Bar
function bar()
{
    var answer = document.getElementById("search").innerHTML;
if (answer == "plush")
{
    console.log = (plush);
}
}

function plushies()
{
for(var x=0;x<=3;x++)
{
        console.log(plush[x]);
        document.getElementById("result0").innerHTML=("<li><img src='" + plush[0].src + "' </li>");
        document.getElementById("result1").innerHTML=("<li><img src='" + plush[1].src + "' </li>");
        document.getElementById("result2").innerHTML=("<li><img src='" + plush[2].src + "' </li>");
        document.getElementById("result3").innerHTML=("<li><img src='" + plush[3].src + "' </li>");  
}
}

function figures()
{
for(var x=0;x<=3;x++)
{
        console.log(fig[x]);
       document.getElementById("result0").innerHTML=("<li><img src='" + fig[0].src + "' </li>");
       document.getElementById("result1").innerHTML=("<li><img src='" + fig[1].src + "' </li>");
       document.getElementById("result2").innerHTML=("<li><img src='" + fig[2].src + "' </li>");
       document.getElementById("result3").innerHTML=("<li><img src='" + fig[3].src + "' </li>");    
}
}

function hoods()
{
for(var x=0;x<=3;x++)
{
        console.log(hood[x]);
       //document.write("<li><img src='" + hood[x].src + "' </li>" + "<br>" + "<a href='#'>" + "Return" +'</a>');
       document.getElementById("result0").innerHTML=("<li><img src='" + hood[0].src + "' </li>");
       document.getElementById("result1").innerHTML=("<li><img src='" + hood[1].src + "' </li>");
       document.getElementById("result2").innerHTML=("<li><img src='" + hood[2].src + "' </li>");
       document.getElementById("result3").innerHTML=("<li><img src='" + hood[3].src + "' </li>");  
}
}

let arr = ["anagrams-of-string-(with-duplicates)", "array-concatenation", "array-difference", "array-includes", "array-intersection", "array-remove", "array-sample", "array-union", "array-without", "array-zip", "average-of-array-of-numbers", "bottom-visible", "capitalize-first-letter-of-every-word", "capitalize-first-letter", "chain-asynchronous-functions", "check-for-palindrome", "chunk-array", "collatz-algorithm", "compact", "count-occurrences-of-a-value-in-array", "current-URL", "curry", "deep-flatten-array", "distance-between-two-points", "divisible-by-number", "drop-elements-in-array", "element-is-visible-in-viewport", "escape-regular-expression", "even-or-odd-number", "factorial", "fibonacci-array-generator", "fill-array", "filter-out-non-unique-values-in-an-array", "flatten-array-up-to-depth", "flatten-array", "get-days-difference-between-dates", "get-max-value-from-array", "get-min-value-from-array", "get-native-type-of-value", "get-scroll-position", "greatest-common-divisor-(GCD)", "group-by", "hamming-distance", "head-of-list", "hexcode-to-RGB", "initial-of-list", "initialize-array-with-range", "initialize-array-with-values", "is-array", "is-boolean", "is-function", "is-number", "is-string", "is-symbol", "last-of-list", "measure-time-taken-by-function", "median-of-array-of-numbers", "nth-element-of-array", "number-to-array-of-digits", "object-from-key-value-pairs", "object-to-key-value-pairs", "ordinal-suffix-of-number", "percentile", "pick", "pipe", "powerset", "promisify", "random-integer-in-range", "random-number-in-range", "redirect-to-URL", "reverse-a-string", "RGB-to-hexadecimal", "round-number-to-n-digits", "run-promises-in-series", "scroll-to-top", "shallow-clone-object", "shuffle-array", "similarity-between-arrays", "sleep", "sort-characters-in-string-(alphabetical)", "speech-synthesis-(experimental)", "standard-deviation", "sum-of-array-of-numbers", "swap-values-of-two-variables", "tail-of-list", "take-right", "take", "truncate-a-string", "unique-values-of-array", "URL-parameters", "UUID-generator", "validate-email", "validate-number", "value-or-default", "write-json-to-file"];

function updateResult(query) {
    let resultList = document.querySelector(".result");
    resultList.innerHTML = "";

    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += '<li class="list-group-item">${algo}</li>';
            }
        })
    })
}