# Build the image

```
docker build -t fastapi-hello .
```

# Run the container

```
docker run -d -p 8000:8000 fastapi-hello
```

# Stop the container

```
docker stop $(docker ps -q --filter ancestor=fastapi-hello)
```
