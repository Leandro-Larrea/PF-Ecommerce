

export default function validate(e, input) {

    let errors = {};
    const validation ={
        name: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{1,40}$/,
        lastName: /^[A-Z]{1}[a-zA-Z.¿?¡!',:;\s_-]{1,40}$/,
        mail: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        country: /^[A-Z]{1}[a-zA-Z.:,'\s_-]{1,62}$/,
        city: /^[A-ZA-Z]{1}[a-zA-Z.:,'\s_-]{1,62}$/,
        address: /^[A-ZA-Z]{1}[a-zA-Z.\d':,\s_-]{1,92}$/,
      }
      const message ={
        name: "Only letters, first letter capitalize",
        lastName: "Only letters, first letter capitalize",
        mail: "Must have an email structure",
        phone: "Must have the country and city code",
        country: "Type a valid country, first letter capitalize",
        city: "Type a valid city, first letter capitalize",
        address: "Type a valid address, first letter capitalize"
      }
    if(e === "city" || e === "country" || e === "address" ) {
      errors[e] = !validation[e].test(input.location[e])? message[e]: null
    }
    else {
    errors[e] = !validation[e].test(input[e])? message[e]: null
  }

    return errors;
}