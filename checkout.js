// var stateByCountry = {
//     India: ["Maharashtra","Goa","Kerala"],
//     UnitedStates: ["MA","CA","CO"],
//     Australia: ["South Australia"," NorthAustralia"]
//     }
//     function makeSubmenu(value) {
//     if(value.length==0) 
//     {
//         document.getElementById("stateSelect").innerHTML = "<option></option>";
//     }
//     else {
//     var stateOptions = ""; 
//     console.log(stateByCountry[value]);
//     for(stateId in stateByCountry[value]) {
//         console.log(stateId);
//         stateOptions+="<option>"+stateByCountry[value][stateId]+"</option>";
//     }
//     document.getElementById("stateSelect").innerHTML = stateOptions;
//     }
//     }

const saveJSONData =() => {
    var firstname, lastname, address1, address2, city, postalcode,phone,email, checkbox;
    firstname = document.getElementById('FirstName').value;
    lastname= document.getElementById('LastName').value;
    address1= document.getElementById('Address1').value;
    address2= document.getElementById('Address2').value;
    city= document.getElementById('city').value;
    postalcode= document.getElementById('postalcode').value;
    phone= document.getElementById('phone').value;
    email= document.getElementById('email').value;
    checkbox= document.getElementById('marketing').value;

    const output = {
        "firstName": firstname,
        "lastName": lastname,
        "address": {
            "address1": address1 ,
            "address2": address2,
            "city": city,
            "state": "",
            "country": "",
            "postalCode": postalcode
        },
        "phone": phone,
        "email": email,
        "isSubscribed": checkbox
    }
    

    console.log(output);
}


  