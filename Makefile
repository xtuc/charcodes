export PATH := $(PATH):./node_modules/.bin/

bootstrap:
	make clean-all
	yarn
	lerna bootstrap
	make build

build:
	./scripts/build.sh

publish: build
	lerna publish

test:
	lerna run test

clean-all:
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf packages/*/node_modules
	rm -rf packages/*/lib
	rm -rf packages/*/package-lock.json

test-ci: bootstrap test
