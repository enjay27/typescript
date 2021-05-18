import Department from './Department';

export default class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    }
    
    get mostRecentReport() {
        console.log('object');
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('no value passed.');
        }
        this.addReport(value);
    }
    
    describe(this: Department): void {
        throw new Error("Method not implemented.");
    }
    
    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}
