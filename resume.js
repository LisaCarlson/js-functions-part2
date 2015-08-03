
var resume = {
  firstName: "Lisa",
  lastName: "Carlson", 
  experience: [
    { company: "Initech",
      startDate: "2004",
      endDate: "2012",
      references: [{Aladdin: "303-555-8675"},{Jasmine: "720-758-9384"},{Cinderella: "758-973-8947"}]
    },

    { company: "Initrode",
      startDate: "2013",
      endDate: "2015",
      references: [{Ariel: "758-796-3937"},{Sebastian: "908-482-7078"},{Mulan: "190-383-3938"}]
  }],
  addresses: {
    Initech: {
      address: "123 Made Up Ave",
      city: "San Franciso",
      state: "CA",
      zip: "94101"
    },
    Initrode: {
      address: "456 Imaginary St",
      city: "Boston",
      state: "MA",
      zip: "02108"
    }
  }

}

function name() {
  console.log((resume.firstName + '  ' + resume.lastName));
  console.log('Experience:');
  function exp() {
    console.log('Initech');
    console.log("address: " + resume.addresses.Initech.address);
    console.log("city: " + resume.addresses.Initech.city);
    console.log("state: " + resume.addresses.Initech.state);
    console.log("zip: " + resume.addresses.Initech.zip);
    console.log(resume.experience.startDate + '-' + resume.experience.endDate);
  console.log('Initrode');
     console.log("address: " + resume.addresses.Initrode.address);
    console.log("city: " + resume.addresses.Initrode.city);
    console.log("state: " + resume.addresses.Initrode.state);
    console.log("zip: " + resume.addresses.Initrode.zip);
    console.log(resume.experience.startDate + '-' + resume.experience.endDate);
    
    
  }
  return exp();
}
name();





// for (var i=0; i<resume.Experience.length; i++)
//     for (var prop in resume.Experience[0]) {
//         console.log("company name: "+ resume.Experience[0].company);
//         console.log("address: "+ resume.Experience[1].company);
//         console.log("Target: "+result[i][name].targetUuid);
//     }









