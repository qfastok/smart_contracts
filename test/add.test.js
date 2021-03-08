const Add = artifacts.require("Add");

contract('Add', () =>{
    it ("stored 90", async() => {
        const instance = await Add.deployed()
        await instance.main(89,1);
        const storedInt = await instance.storage();
        assert.equal(storedInt,90, "Integer 90 was not stored")
    });
});