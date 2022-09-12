const Manager = require("../lib/Manager");

test("Creating office number", () => {
    const office = 123;
    const employeeInstance = new Manager("Jonathan", 123, "email@fart.cool", office);
    expect(employeeInstance.officeNumber).toBe(office);
});

test("officeNumber works", () => {
    const office = 123;
    const employeeInstance = new Manager("Jonathan", 123, "email@fart.cool", office);
    expect(employeeInstance.getOfficeNumber()).toBe(office);
});

test("Role is set", () => {
    const value = "Manager";
    const employeeInstance = new Manager("Jonathan", 123, "email@fart.cool", 123);
    expect(employeeInstance.getRole()).toBe(value);
});