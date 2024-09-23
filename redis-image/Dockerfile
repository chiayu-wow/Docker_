# Using existing docker image as base
FROM alpine

# Download and install dependency
RUN apk add --update redis

# tell image what to do when it start a as container
CMD ["redis-server"]
