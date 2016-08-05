function removeHtmlTag(strx,chop){var s=strx.split("<");

for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length);}}
s=s.join("");s=s.substring(0,chop-1);return s;}
function showrecentposts(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}
for(var k=0;k<entry.link.length;k++){

if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){
  pcm=entry.link[k].title.split(" ")[0];break;
}
}
if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;cmtext=(jtext!='no')?'<i></i>':'';var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break;}}

if(i==0){ var first = 'first';  }else{ var first = ''; }

var daystr=(jshowPostDate)?'<i><font color="'+jacolor+'"> - ('+day+' '+ m+' '+ y+')</font></i>':"";posttitle=(jaBold)?"<b>"+posttitle+"</b>":posttitle;var trtd='<li class="ccat '+first+'"><a href="'+posturl+'" ><img src="'+img[i]+'" /></a> <a class="himg" href="'+posturl+'" /> <a class="textp" href="'+posturl+'" >'+posttitle+'</a><p>'+removeHtmlTag(postcontent,jsummaryPost)+'...</p></li>';

document.write(trtd);j++;}}
document.write("<script src=\""+home_page+"feeds/posts/default/-/"+label+"?max-results="+numposts+"&orderby=published&alt=json-in-script&callback=showrecentposts\"><\/script>");