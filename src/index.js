const fs = require('fs');

const excludeVendorFromSourceMap = () => {
    return {
        name: 'excludeVendorFromSourceMap',
        setup(build) {
            //ignore source map for vendor files
            const sourceMapExcludeSuffix = '\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIiJdLCJtYXBwaW5ncyI6IkEifQ==';
            build.onLoad({ filter: /node_modules\/.*\.m?js$/ }, (args) => {
                return {
                    contents: fs.readFileSync(args.path, 'utf8') + sourceMapExcludeSuffix,
                    loader: 'default',
                };
            });
        },
    };
}

module.exports = {
    excludeVendorFromSourceMap,
};
