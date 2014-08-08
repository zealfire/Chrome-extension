$(document).ready(function()
{
    console.log('hello');

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.scraped-data.webatu.com/chrome-extension/contest.json", true);
         xhr.send(); xhr.onreadystatechange = function() {
            var json = JSON.parse(xhr.responseText);
           //document.getElementById('indicator')
             //   .style.display = 'none';
                reset();
            console.log('hello1');
            populateDiv(json);
            
            
        };
    var populateDiv = function(json) {
        
        for (i = 0, len = json.length; i < len; i++) {
            
                
                
            e = json[i];
            
         document.getElementById('try')
                    .appendChild(createNode(e,i));
        }
    };
    var reset=function()
    {
        clearDiv("try");
    }
    var clearDiv = function(div) {
        node = document.getElementById(div);
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    };
 
    var createNode=function(e,i1){
        i1++;
        //console.log('hello3');

        var ele = document.createElement("div");
                str="<div class='col-xs-12' id='sub'><div class='col-xs-12' ><a href='"+e.url+"' target='_blank'><h4  id='title'>"+e.title+"</h4></a></div>"+
                    "<strong><div class='col-xs-12' id='text'>Start: <a href='http://www.timeanddate.com/worldclock/converter.html' target='_blank' data-toggle='tooltip' title='Convert to local time'>"+e.start+"</a></div></strong>"+"<strong><div class='col-xs-12' id='text1'>End: <a href='http://www.timeanddate.com/worldclock/converter.html' target='_blank' data-toggle='tooltip' title='Convert to local time'>"+e.end+"</a></div></strong></div>";
            ele.innerHTML=str;
            return ele;

            };
            
});
