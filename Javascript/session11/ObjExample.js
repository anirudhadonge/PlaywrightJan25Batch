const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    GetLastName: function (){
        return this.lastName;
    }
  };

  person.firstName
  person.lastName

  console.log(person.fullName());

  console.log(person.GetLastName());