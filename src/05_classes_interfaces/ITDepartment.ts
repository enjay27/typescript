import Department from './Department'

export default class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, name: string, admins: string[]) {
        super(id, `IT ${name}`);
        this.admins = admins;
    }

    describe(): void {
        console.log(`IT Department: (${this.id}) ${this.name}`);
    }
}
