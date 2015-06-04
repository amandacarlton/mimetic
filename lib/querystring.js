module.exports = function (input) {

    var objnew={}
    var splitarray=[]
    var input= input.replace("?","");

    var s = input.split("&");

    for (var i=0; i<s.length; i++){
         splitarray[i]=s[i].split("=");
          objnew[(splitarray[i][0])]=(splitarray[i][1]);
    };
         return(objnew);
  };
