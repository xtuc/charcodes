build:
	./scripts/build.sh

publish: build
	lerna publish
