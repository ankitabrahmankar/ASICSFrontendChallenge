var stateByCountry = {
    India: ["Maharashtra","Goa","Kerala"],
    UnitedStates: ["MA","CA","CO"],
    Australia: ["South Australia"," NorthAustralia"]
    }
    function makeSubmenu(value) {
    if(value.length==0) 
    {
        document.getElementById("stateSelect").innerHTML = "<option></option>";
    }
    else {
    var stateOptions = ""; 
    console.log(stateByCountry[value]);
    for(stateId in stateByCountry[value]) {
        console.log(stateId);
        stateOptions+="<option>"+stateByCountry[value][stateId]+"</option>";
    }
    document.getElementById("stateSelect").innerHTML = stateOptions;
    }
    }
  