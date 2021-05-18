export default abstract class Department {
    static readonly fiscalYear = 2020;
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(
        protected readonly id: string,
        public name: string) {

    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
