
var plush = new Array();
plush[0] = new Image();
plush[0].src ="images/plush.jpg";
var figure = [["figure1","figure2","figure3","figure4"]];
var hood = [["hood1","hood2","hood3","hood4"]];
//var answer = document.getElementById("search").innerHTML;
/*for(var x=0;x<3;x++)
{
    for(var y=0;y<4; y++)
    {
        document.getElementById("result").innerHTML = (plush[x][y]);
    }
    
}*/
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
for(var x=0;x<4;x++)
{
 
        console.log(plush[x]);
        document.write("result <img src'" + plush[x]);
    
}
}
