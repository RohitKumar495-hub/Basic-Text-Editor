function run()
{
    var code=document.getElementById("code-box").value;
    var result_box=document.getElementById("result");
    result_box.innerHTML=code;
    var code_box=document.getElementById("field");
    code_box.style.display="none";
    var result=document.getElementById("show");
    result.style.display="block";
    result.setAttribute("class","animate__animated animate__slideInRight"); 
    var run=document.getElementById("btn");
    run.style.display="none";
    var back=document.getElementById("return-code-btn");
    back.style.display="block";
}

function back()
{
    var code_box=document.getElementById("field");
    code_box.style.display="block";
    code_box.setAttribute("class","animate__animated animate__slideInLeft");
    var result=document.getElementById("show");
    result.style.display="none"; 
    var run=document.getElementById("btn");
    run.style.display="block"; 
    var back=document.getElementById("return-code-btn");
    back.style.display="none";
}