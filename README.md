# Tampermonkey UserScripts monorepo

## In the root directory

```bash
lerna create <script-name>  # creates a new script skeleton in packages/ 
```


## In packages

```bash
yarn build                    # generate the script file with UserScript header
yarn run bump-version:patch   # increments the version number (patch) and build the scripts
yarn run bump-version:minor   # increments the version number (minor) and build the scripts
yarn run bump-version:major   # increments the version number (major) and build the scripts
```