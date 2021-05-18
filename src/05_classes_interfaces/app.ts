import Department from './Department'
import ITDepartment from './ITDepartment'
import AccountingDepartment from './AccountingDepartment'


const employee1 = Department.createEmployee('Noah');
console.log(employee1, Department.fiscalYear);

const itAccounting = new ITDepartment('01', 'Accounting', ['Noah']);

itAccounting.addEmployee('Max');
itAccounting.addEmployee('Anna');
// itAccounting.employees[2] = 'Anna';

console.log(itAccounting);

itAccounting.describe();
itAccounting.printEmployeeInformation();

// const accountingCopy = { describe: itAccounting.describe };
// const accountingCopy2 = { name: 'copy', describe: itAccounting.describe };

const accounting = AccountingDepartment.getInstance();//new AccountingDepartment('d2', []);
// const accounting2 = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Noah');
accounting.printEmployeeInformation();

console.log('object');

accounting.printReports();

// accountingCopy.describe();
// accountingCopy2.describe();