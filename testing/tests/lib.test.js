const lib = require("../lib");
describe('absolute',()=>{
    it('should return a positive number if input number is positive',()=>{
        const result = lib.absolute(1);
        expect(result).toBe(1);
     });
     
     it('should return a positive number if input number is negative',()=>{
         const result = lib.absolute(-1);
         expect(result).toBe(1);
      });
     
     
      it('should return a 0 number if input number is 0',()=>{
         const result = lib.absolute(0);
         expect(result).toBe(0);
      });
})

describe('greet',()=>{
    it('should return a greet message',()=>{
        const msg = lib.greet('Ram');
        expect(msg).toContain('Ram');
    })
})

describe('getCurrencies',()=>{
    it('should be return vaild currency',()=>{
        const result = lib.getCurrencies();

        expect(result).toEqual(expect.arrayContaining(['USD']));
    })
});

describe('getProduct',()=>{
    it('should return the product by id',()=>{
        const result = lib.getProduct(1);
        expect(result).toMatchObject({id:1,price:10});
    })
})