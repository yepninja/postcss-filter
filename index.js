var postcss = require('postcss');

module.exports = postcss.plugin('postcss-filter', function (opts) {
    opts = opts || {};

    return function (css) {
        css.eachDecl('filter', function (decl) {
            var value = decl.value;

            if (value) {
                if (value.indexOf('black') !== -1) {
                    decl.value = 'brightness(0)';
                }
                if (value.indexOf('white') !== -1) {
                    decl.value = 'brightness(0) invert(100%)';
                }
            }
        });
    };
});
