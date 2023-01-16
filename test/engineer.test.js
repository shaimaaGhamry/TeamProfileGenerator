const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // Test for all use cases when initializing a new Engineer object
    describe("Initialization", () => {
      it("should create an object with an ID, name, email and github user name if provided valid arguments", () => {
        const engineer = new Engineer(1, "Shaimaa", "Shaimaa_elghamry@hotmail.com", "ShaimaaGhamry");
  
        // Verify that the new object has the correct properties
        expect(engineer.id).toEqual(1);        
        expect(engineer.name).toEqual("Shaimaa");
        expect(engineer.email).toEqual("Shaimaa_elghamry@hotmail.com");        
        expect(engineer.gitHubName).toEqual("ShaimaaGhamry");
        expect(engineer.type).toEqual("Engineer");
      });
    });
});