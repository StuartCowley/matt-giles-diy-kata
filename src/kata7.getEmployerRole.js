const getEmployerRole = (employeeName, employees) => {
    console.log(employeeName);
    console.log(employees);
    const empName = employees.map((nameList) => `${nameList.name}`);
    const empRole = employees.map((nameList) => `${nameList.role}`);
    console.log(empName);
    console.log(empRole);
    console.log(empRole[empName.length-1]);
    return empRole[empName.length-1];
};

module.exports = getEmployerRole;
