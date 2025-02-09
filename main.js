function validate() {
  // Tab to edit
  const inp=document.getElementById("input-box");
  const trim_input=inp.value.trim();
  const errorMsg=document.getElementById("errorMsg");
  if(trim_input===""){
    inp.classList.add("shake");
    errorMsg.style.visibility="visible";
    setTimeout(function(){
      inp.classList.remove("shake");
      errorMsg.style.visibility="hidden";
    },500);
  }else{
    alert(trim_input);
  }
}
