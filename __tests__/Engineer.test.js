const Engineer = require("../lib/Engineer");

test("Creating github", () => {
    const github = "shogren";
    const employee = new Engineer("Jonathan", 123, "email@fart.cool", github);
    expect(employee.github).toBe(github);
});

test("getGithub works", () => {
    const github = "Jonathan";
    const employee = new Engineer("Jonathan", 123, "email@fart.cool", github);
    expect(employee.getGithub()).toBe(github);
});

test("Role is set", () => {
    const value = "Engineer";
    const employee = new Engineer("Jonathan", 123, "email@fart.cool", "Jonathan");
    expect(employee.getRole()).toBe(value);
});