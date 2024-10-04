import fs from 'fs';

export default () => {
    return {
        name: 'exclude-vendor-from-source-map',
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
