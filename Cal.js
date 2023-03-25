let express='';
let expDisplay=document.getElementById('expDisplay');
let ansDisplay=document.getElementById('ansDisplay');
function set(e)
{ let n1=e.target.value;
 
    if(n1==='C')
    {
       express="";
       ans="";
       ansDisplay.innerHTML=ans;
       expDisplay.innerHTML=express;
    }
    if(n1==='X')
    { 
        // express+=n1
        express=express.substring(0,express.length-1);
    expDisplay.innerHTML=express;
    }

    if(n1==='=')
    {
      let  ans=eval(express)
      ansDisplay.innerHTML=ans;
    }
    else if(n1!=='C'&& n1!=='X')
    {
        express+=n1;
        expDisplay.innerHTML=express;

    }


}