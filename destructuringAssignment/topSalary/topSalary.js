function topSalary(salaries) {
  let entries = Object.entries(salaries);
  if (entries.length === 0) return null; 
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}


function topSalary1(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if(maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}


module.exports = topSalary, topSalary1;
