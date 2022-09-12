const Employee = require("../lib/Employee");

test("Create a new employee", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
})

test("Name is set", () => {
    const name = "Jonathan";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})

test("ID is set", () => {
    const id = 123;
    const newEmployee = new Employee("Jonathan", id);
    expect(newEmployee.id).toBe(id);
})

test("Email is set", () => {
    const email = "email@fart.cool";
    const newEmployee = new Employee("Jonathan", 123, email);
    expect(newEmployee.email).toBe(email);
})

test("getName method works", () => {
    const name = "Jonathan";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
})

test("getID method works", () => {
    const id = 123;
    const employeeInstance = new Employee("Jonathan", id);
    expect(employeeInstance.getId()).toBe(id);
})

test("getEmail method works", () => {
    const email = "email@fart.cool";
    const newEmployee = new Employee("Jonathan", 123, email);
    expect(newEmployee.getEmail()).toBe(email);
})

test("Role is set", () => {
    const value = "Employee";
    const newEmployee = new Employee("Jonathan", 123, "email@fart.cool");
    expect(newEmployee.getRole()).toBe(value);
})