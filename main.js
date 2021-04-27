function getSelectedCity(){
  const cityName = document.getElementById("cities").value;
  return cityName;
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
  const checkedTagsArray = getCheckedTags().toString().split(",").join(" ");
  const query = [getSelectedCity(),checkedTagsArray];
  params.set("q", query);
  params.set("f", "live");
  const link = `${base}?${params.toString()}`;
  window.open(link);
  console.log(query);
}