function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp]
  }
  else {
    return "Not Found"
  }
  // Only change code above this line
}
const objekt = {
  gift: "pony", pet: "kitten", bed: "sleigh"
}
console.log(checkObj(objekt, "gift"))
