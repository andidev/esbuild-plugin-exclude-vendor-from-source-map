# esbuild-plugin-exclude-vendor-from-source-map

exclude node_modules from source maps to reduce the size 

## Installation

```
npm i --save-dev esbuild-plugin-exclude-vendor-from-source-map
```

## Usage

```javascript
import esbuild from 'esbuild';
import { excludeVendorFromSourceMap } from 'esbuild-plugin-exclude-vendor-from-source-map';

esbuild.build({
    entryPoints: ['./src/index.js'],
    outfile: './dist/index.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [
        excludeVendorFromSourceMap(),
    ],
});
```

Original authors are ESBuild @evanw and this blog post [Speedrun Blog - Optimizing lambda coldstarts](https://speedrun.nobackspacecrew.com/blog/2023/09/23/optimizing-lambda-coldstarts.html#removing-sources-content-and-json-from-sourcemaps)
