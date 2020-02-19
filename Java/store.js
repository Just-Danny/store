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

//var answer = document.getElementById("search").innerHTML;
/*for(var x=0;x<3;x++)
{
    for(var y=0;y<4; y++)
    {
        document.getElementById("result").innerHTML = (plush[x][y]);
    }
    
}*/

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