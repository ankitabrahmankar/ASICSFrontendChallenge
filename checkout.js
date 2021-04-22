//Function to create a cascade dropdown for state and country

let invalidFields=[]
window.CountryChange = function () {
    var countryState = [
      [
        'US', [
          ['', 'State/Province'],
          ['AL', 'Alabama'],
          ['AK', 'Alaska'],
          ['AZ', 'Arizona'],
          ['AR', 'Arkansas'],
          ['MA', 'Massachusetts'],
        ],
      ],
      [
        'CA', [
          ['', 'State/Province'],
          ['AB', 'Alberta'],
          ['BC', 'British Columbia'],
          ['MB', 'Manitoba'],
          ['NB', 'New Brunswick'],
          ['NS', 'Nova Scotia.'],
        ]
      ],
      [
        'IN', [
          ['', 'State/Province'],
          ['MH', 'Maharashtra'],
          ['GJ', 'Gujrat'],
          ['GA', 'Goa'],
          ['KR', 'Kerala'],
          ['JK', 'Jammu Kashmir'],
        ]
      ]
    ];

    var countryElement = document.getElementById('countryId');
    var stateElement = document.getElementById('stateId');
    
    if (countryElement && stateElement) {
      var listOfState = [
        ['XX', 'None']
      ];

      var currentCountry = countryElement.options[countryElement.selectedIndex].value;
      for (var i = 0; i < countryState.length; i++) {
        if (currentCountry == countryState[i][0]) {
          listOfState = countryState[i][1];
        }
      }
      var selectedState;
      for (var i = 0; i < stateElement.length; i++) {
        if (stateElement.options[i].selected === true) {
          selectedState = stateElement.options[i].value;
        }
      }
      stateElement.options.length = 0;
      for (var i = 0; i < listOfState.length; i++) {
        stateElement.options[i] = new Option(listOfState[i][1], listOfState[i][0]);
        if (listOfState[i][0] == selectedState) {
          stateElement.options[i].selected = true;
        }
      }
    }
  }

  function validation() {
    console.log("this ", this.event.target);
    console.log("this ", this.event.target.dataset.value);
    const value = this.event.target.value;
    const id = this.event.target.id;
    const validationDiv = this.event.target.dataset.value;

    if (value === "") {
        const invalid = {
            id, data: validationDiv
        }
        invalidFields.push(invalid);
        document.getElementById(id).classList.add("invalid");
        document.getElementById(validationDiv).style.display = "block";
    } else {
        document.getElementById(id).classList.remove("invalid");
        document.getElementById(validationDiv).style.display = "none";
        invalidFields = invalidFields.filter(field => field.id !== id);
    }
    console.log(invalidFields)
}


//Function to print all the data from input fields into a JSON object format on console
const saveJSONData =() => {
  console.log(invalidFields.length)
    if(invalidFields.length > 0){
      alert("Please insert all required fields");
    }else{
      var firstname, lastname, address1, address2, city, postalcode,phone,email, checkbox, state, country;
      firstname = document.getElementById('FirstName').value;
      lastname= document.getElementById('LastName').value;
      address1= document.getElementById('Address1').value;
      address2= document.getElementById('Address2').value;
      city= document.getElementById('city').value;
      postalcode= document.getElementById('postalcode').value;
      phone= document.getElementById('phone').value;
      email= document.getElementById('email').value;
      checkbox= document.getElementById('marketing').value;
      state=document.getElementById('countryId').value;
      country=document.getElementById('stateId').value;
  
      const output = {
          "firstName": firstname,
          "lastName": lastname,
          "address": {
              "address1": address1 ,
              "address2": address2,
              "city": city,
              "state": state,
              "country": country,
              "postalCode": postalcode
          },
          "phone": phone,
          "email": email,
          "isSubscribed": checkbox
      }
      console.log(output);
    }

}


  