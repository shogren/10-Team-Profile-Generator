const Intern = require("../lib/Intern");

test("Creating school", () => {
    const school = "Ga Tech";
    const employeeInstance = new Intern("Jonathan", 2, "email@fart.cool", school);
    expect(employeeInstance.school).toBe(school);
});

test("officeNumber works", () => {
    const school = "Ga Tech";
    const employeeInstance = new Intern("Jonathan", 2, "email@fart.cool", school);
    expect(employeeInstance.getSchool()).toBe(school);
});

test("Role is set", () => {
    const value = "Intern";
    const employeeInstance = new Intern("Jonathan", 2, "email@fart.cool", "School Name");
    expect(employeeInstance.getRole()).toBe(value);
});