## Code

- It uses twscrape library to fetch tweets without using official Twitter API
- The system manages Twitter accounts stored in twitter_accounts.json

It provides two endpoints:

- `/api/health`: Simple health check
- `/api/tweets/{username}`: Fetches tweets for a given username

## How to run locally

1. Clone the repository
1. Create and activate a virtual environment

```
python -m venv venv
```

```
source venv/bin/activate
```

Or On Windows use

```
venv\Scripts\activate
```

2. Install dependencies: `pip install -r requirements.txt`
3. Add Twitter accounts to twitter_accounts.json file
4. Run the application: `uvicorn src.main:app --reload`
5. Access the application at: `http://127.0.0.1:8000`
6. Health Check at: `http://127.0.0.1:8000/api/health`

## How to run with Docker

1. Clone the repository
2. Build the Docker image: `docker build -t twitter-scraper .`
3. Run the Docker container: `docker run -p 8000:8000 twitter-scraper`
4. Access the application at: `http://127.0.0.1:8000`

## How to use the API

- To fetch tweets for a given username, make a GET request to: `/api/tweets/{username}`
- Replace `{username}` with the desired Twitter username
- The response will be a JSON array containing the fetched tweets
