var answer = document.getElementById("bar").innerHTML;
var plush = [["plush1","plush2","plush3","plush4"]];
var figure = [["figure1","figure2","figure3","figure4"]];
var hood = [["hood1","hood2","hood3","hood4"]];

/*for(var x=0;x<3;x++)
{
    for(var y=0;y<4; y++)
    {
        document.getElementById("result").innerHTML = (plush[x][y]);
    }
    
}*/
function bar()
{
if (answer == "plush")
{
    document.getElementById("result").innerHTML = (plush);
}
}
