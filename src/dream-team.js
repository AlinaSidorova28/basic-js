module.exports = function createDreamTeam(members) {
  let team = '';
  let k = 0;
  if(members == undefined)
    return false;
  for(let i=0; i<members.length; i++)
  {
    if(typeof members[i] == 'string')
        team += members[i].trim()[0];
  }
  return team.toUpperCase().split("").sort().join("");
};