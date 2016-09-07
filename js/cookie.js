function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + "; ";
}

function deleteCookie()
{
    var d = new Date();
    d.setTime(d.getTime()-1);
    document.cookie = "expires="+d.toUTCString();
}
function getCookie(cookieName)
{
    var sourcelink = cookieName + "=";
    var cookieList = document.cookie.split(";");
    for(var i=0; i<cookieList.length; i++) {
        var c = cookieList[i];
        while (c.charAt(0)==' '){
        c = c.substring(1);
        }
        if (c.indexOf(sourcelink) == 0)
        {
            return c.substring(sourcelink.length, c.length);
        }
    }
    return "";
}

function checkCookie()
{
    var sourcelink = getCookie("sourcelink");
    if (sourcelink != "") 
    {
        return 1;
    } else 
    {
        return 0;
    }
}