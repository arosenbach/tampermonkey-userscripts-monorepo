# `Sample Script`

This is a sample script

## Usage

### Initialize a new script

```bash
lerna create <script-name>
```
or 
```bash
mkdir packages/<script-name>
cp -r packages/_sample/ packages/<script-name>
```

Then edit `packages/<script-name>/package.json`.


### Usefull commands


```bash
yarn build                    # generate the script file with UserScript header
yarn run bump-version:patch   # increments the version number (patch) and build the scripts
yarn run bump-version:minor   # increments the version number (minor) and build the scripts
yarn run bump-version:major   # increments the version number (major) and build the scripts
```
