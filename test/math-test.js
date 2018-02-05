const math = require('../math');
const expect = require('chai').expect;
describe('Validate all math functions work properly', function(){
	it('should return the sum successfully', function(done){
		const sum = math.add(5,5);
		console.log('sum ==> ', sum);
		expect(sum).to.equal(10);
		done();
	})
});
