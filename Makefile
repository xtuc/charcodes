build:
	./scripts/build.sh

publish: build
	lerna publish

test:
	lerna run test
