## Description

- This repo is a template for a simple typescript (CLI) project which already contains basic configurations.

## Directory Structure

```bash
.
├── src                         <-- Source code for this application
│   └── index.ts                <-- Entry of the application
├── test                        <-- All unit tests
├── README.md                   <-- This instructions file
├── package.json                <-- NodeJS dependencies and scripts
├── tsconfig.json               <-- Typescript config file
├── tslint.json                 <-- Lint config
├── .env                        <-- Environment variables
├── .gitignore                  <-- gitignore
├── .nycrc.json                 <-- Unit test coverage config
└
```

## Git branches

- feature/* - Branches for developing features, not used at the moment.
- develop - The branch for integration, all feature branches should be merged back into `develop` branch when it is done.
- master - The branch for deployment, merging from `develop` branch to `master` branch happens when the code is ready.

## Command Lines

- `npm i` please run this first to install all dependencies.
- `npm run start` will start this application.
- `npm run build` compile the src to javascript and output to `./dist`.
- `npm run clean` remove the compiled files.
- `npm run test` run all unit tests.
- `npm run coverage` run the unit tests with coverage report.
