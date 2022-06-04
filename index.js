// Write your solution in this file!
const employee = {name:"Kamau", streetAddress: "770 Nairobi"};

function updateEmployeeWithKeyAndValue(employee, key,value){
   const newObj = {...employee};
   newObj[key] = value;
   return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;
}