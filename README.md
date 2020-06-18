## navigator

### Project setup
```
npm install -g parcel-bundler   //Global installation
npm install -D parcel-bundler   //devDependencies
```

### Create the package.json
```
npm init -y
```

### Project run
```
parcel src/index.html                   //If command line shows parcel was not founded ↓
npx parcel src/index.html --no-cache    //npx: Automatic search parcel. --no-cache!
```

### Project build
```
parcel build src/index.html --no-minify
```

### Set the project path
```
parcel build src/index.html --no-minify --public-url ./
```

### Simplify build command
```
npm build   //package.json scripts: {"build": "..."}
```

### Other command
```
parcel build --help
```