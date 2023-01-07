build:
	npm run build

serve:
	docker run --rm -it --init -p8000:8000 -v `pwd`:/app viktoras25/sculpin generate --watch --server --env=live
