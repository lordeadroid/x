#! /bin/bash

cp ./git-hooks/pre-commit ../.git/hooks/pre-commit

echo "Installing NPM packages"
npm install

echo "Running Tests"
npm run coverage
