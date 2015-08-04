var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-filter', function () {

    it('set white filter', function (done) {
        test('a{ filter: white() }',
            'a{ filter: brightness(0) invert(100%) }', {}, done);
    });

    it('set black filter', function (done) {
        test('a{ filter: black() }',
            'a{ filter: brightness(0) }', {}, done);
    });

});
