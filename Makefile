
default: ts

prepare: ts license readme

ts: clean
	tsc

data:
	wget https://github.com/iaseth/redicons/raw/master/src/data.tsx
	mv data.tsx src/commands/data.ts

publish: prepare
	npm publish

readme:
	readmix --compile --markdown README.md.rx

license:
	readmix --compile --markdown LICENSE.md.rx

clean:
	@rm -rf dist
