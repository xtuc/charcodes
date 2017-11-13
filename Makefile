bootstrap:
	make clean-all
	yarn
	./node_modules/.bin/lerna bootstrap
	make build

build:
	./scripts/build.sh

publish: build
	./node_modules/.bin/lerna publish

test:
	./node_modules/.bin/lerna run test

clean-all:
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf packages/*/node_modules
	rm -rf packages/*/lib
	rm -rf packages/*/package-lock.json

test-ci:
	./node_modules/.bin/lerna bootstrap
	./node_modules/.bin/lerna run test
