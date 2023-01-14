const Intern = require("../lib/Intern");

describe("Intern", () => {
    // Test for all use cases when initializing a new Intern object
    describe("Initialization", () => {
      it("should create an object with an ID, name, email and school if provided valid arguments", () => {
        const intern = new Intern(1, "Shaimaa", "Shaimaa_elghamry@hotmail.com", "Evergreen School");
  
        // Verify that the new object has the correct properties
        expect(intern.id).toEqual(1);        
        expect(intern.name).toEqual("Shaimaa");
        expect(intern.email).toEqual("Shaimaa_elghamry@hotmail.com");        
        expect(intern.school).toEqual("Evergreen School");
      });
    });
});