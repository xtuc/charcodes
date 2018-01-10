export PATH := $(PATH):./node_modules/.bin/

bootstrap:
	make clean-all
	yarn
	./node_modules/.bin/lerna bootstrap
	make build

doc-charcodes:
	dump-exports ./packages/charcodes/src/index.js > ./packages/charcodes/README.md

build: doc-charcodes
	./scripts/build.sh

publish: build
	./node_modules/.bin/lerna publish --force-publish=*

test:
	./node_modules/.bin/lerna run test

clean-all:
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf packages/*/node_modules
	rm -rf packages/*/lib
	rm -rf packages/*/package-lock.json

test-ci: bootstrap test
