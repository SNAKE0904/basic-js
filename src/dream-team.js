module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach(function (name, index){
    if (typeof name === 'string'){
      return members[index] = name.trim();
    } else{
      delete members[index];
    }
  })

  return members.reduce(function (letters, name) {
  return letters + name.slice(0, 1)}, "").toUpperCase().split("").sort().join("");
}