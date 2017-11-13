build:
	./scripts/build.sh

publish: build
	lerna publish

test:
	lerna run test

test-ci:
	lerna bootstrap
	lerna run test
