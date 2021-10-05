http = require('http');
url = require('url');
const port = process.env.PORT || 3000;
querystring = require('querystring');
function onRequest(request,response)
{
    var query = url.parse(request.url).query;   
    var val = querystring.parse(query)["fact"];
    var ans = 1;
    if (val != 0 || val != 1){
        for(var i = val; i >= 1; i--)
        {
            ans = ans * i;
        }
    } 
    response.write('Factorial of a given number is: '+ans);
    response.end();
}
http.createServer(onRequest).listen(port);
console.log('server started');