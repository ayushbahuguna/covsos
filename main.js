function getSelectedCity(){
  const cityName = document.getElementById("cities").value;
  if(cityName != ""){
    return cityName;
  }
  
}

function getNearByOption(){
  const nearBy = document.getElementsByName("nearMe");
  for(let near of nearBy){
    if(near.checked){
      return true;
    }
   
  }
}

function getCheckedTags(){
  const checkedTags = document.getElementsByName("tags");
  const appliedTags = [];
  for(let checkedTag of checkedTags){
    if(checkedTag.checked){
      appliedTags.push(checkedTag.value);
    }
  }
  return appliedTags;
}

function generateLink(){
  const base = "https://twitter.com/search"
  const params = new URLSearchParams();
  if(getSelectedCity() != undefined && getCheckedTags().length > 0){
    const query = [getSelectedCity(),getCheckedTags().toString()];
    params.set("q", query.toString().split(",").join(" "));
  }
  
  params.set("f", "live");
  if(getNearByOption()){
    params.set("lf", "on");
  }
  if(params.get("q") != null){
    const link = `${base}?${params.toString()}`;
    window.open(link);
  }else{
    alert("Please select City or Tags!")
  }
  
}