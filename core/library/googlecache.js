
//Google Cache Checker

var linksArr = new Array();
var nlinksArr = new Array();
var myURL,authCode;

function startTask(auth){
    authCode = auth;
    jQuery("#mainbox").fadeOut();
    jQuery("#resultBox").css({"display":"block"});
    jQuery("#resultBox").show();
    jQuery("#resultBox").fadeIn();
    jQuery(".percentimg").css({"display":"block"});
    jQuery(".percentimg").show();
    jQuery(".percentimg").fadeIn();
    
    var nLoop = 0;
    var rawUrl;
    var listHTML = '<br><table class="table table-bordered"><thead><tr><th>#</th><th>'+msgTab1+'</th><th>'+msgTab2+'</th></tr></thead><tbody>';
    for(i=0; i < linksArr.length; i++){
       myURL=jQuery.trim(linksArr[i]);
       rawUrl = myURL;
   	   if (myURL.indexOf("https://") == 0){myURL=myURL.substring(8);}
       if (myURL.indexOf("http://") == 0){myURL=myURL.substring(7);}
       if(myURL != ""){
        nlinksArr[nLoop] = rawUrl;
        var classTr = nLoop % 2 == 0?'even':'odd';
        listHTML+= '<tr class="'+classTr+'"><td align="center">'+(nLoop+1)+'</td><td id="link-'+nLoop+'"><a href="'+ "http://" + myURL +'" target="_blank">'+ myURL +'</a></td><td align="center" id="status-'+nLoop+'">&nbsp;</td></tr>';
        if(nLoop===19){
        break;
        }
        nLoop = nLoop +1;
       }
    }
    listHTML+= '</tbody></table>';
    jQuery("#results").html(listHTML);
    jQuery("#results").slideDown();
    setTimeout(function(){
    var pos = $('#results').offset();
    $('body,html').animate({ scrollTop: pos.top });
    }, 1500);
    make(0,rawUrl);
}

/*
 * @author Balaji
 * @name: A to Z SEO Tools v3 - PHP Script
 * @copyright 2023 ProThemes.Biz
 *
 */
 
function make(domainID,sqURL) { 
	if(domainID >= nlinksArr.length){
		jQuery(".percentimg").fadeOut();
		return;
	}
    var c_link = nlinksArr[domainID];
    //AJAX Call
	jQuery.post(axPath,{googleCache:'1',sitelink:c_link,authcode:authCode},function(data){
		if(data == '0')
			jQuery("#status-"+domainID).html('<b style="color:red">'+msgTab3+'</b>');
		else
			jQuery("#status-"+domainID).html('<b style="color:green">'+data+'</b>');
		window.setTimeout("make("+(domainID+1)+",'"+sqURL+"')", 1000);
	});
}

jQuery(document).ready(function(){
    jQuery("#checkButton").click(function(){
        var myURLs=jQuery("#linksBox").val();
        if(myURLs == ""){
   	        sweetAlert(oopsStr, msgDomain , "error");
            return false;
        }
        linksArr = myURLs.split('\n');
        validateCaptcha();
    });
});