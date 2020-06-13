# import config.
cnf ?= config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# find the version from the latest tag in Git, defaulting to 0.0,0,0
VERSION=$(shell git describe --tags 2> /dev/null || echo '0.0.0')

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


# FLASK TASKS
run_dev: ## Run the api for development 
	flask run

# DOCKER TASKS
docker_build: ## Build the API image
	docker build -t $(APP_NAME) .

docker_run: docker_build ## Run a API container
	docker run -i -t --rm --env-file=./config.env -v ${PWD}:/usr/src/api -p=$(FLASK_RUN_PORT):$(FLASK_RUN_PORT) --name="$(APP_NAME)" $(APP_NAME)
