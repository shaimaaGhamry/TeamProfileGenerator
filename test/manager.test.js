const Manager = require("../lib/Manager");

describe("Manager", () => {
    // Test for all use cases when initializing a new manager object
    describe("Initialization", () => {
      it("should create an object with an ID, name, email and office number if provided valid arguments", () => {
        const manager = new Manager(1, "Shaimaa", "Shaimaa_elghamry@hotmail.com", 200);
  
        // Verify that the new object has the correct properties
        expect(manager.id).toEqual(1);        
        expect(manager.name).toEqual("Shaimaa");
        expect(manager.email).toEqual("Shaimaa_elghamry@hotmail.com");        
        expect(manager.officeNum).toEqual(200);
      });
    });
});