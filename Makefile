export PATH := $(PATH):./node_modules/.bin/

bootstrap:
	make clean-all
	yarn
	./node_modules/.bin/lerna bootstrap
	make build

doc-charcodes:
	dump-exports ./packages/charcodes/src/index.js > ./packages/charcodes/README.md

flow-charcodes:
	cp ./packages/charcodes/src/index.js ./packages/charcodes/lib/index.js.flow
	cp ./packages/charcodes/src/index.js ./packages/charcodes/lib/index.mjs.flow

build:
	./scripts/build.sh
	make flow-charcodes

publish: build
	./node_modules/.bin/lerna publish --force-publish=*

test:
	./node_modules/.bin/jest

clean-all:
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf packages/*/node_modules
	rm -rf packages/*/lib
	rm -rf packages/*/package-lock.json

test-ci: bootstrap test
