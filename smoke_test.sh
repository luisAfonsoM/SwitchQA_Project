#!/bin/bash

BACKEND_PORT=5001
BASE_URL="http://localhost:$BACKEND_PORT/api/v1"

EXPECTED_RECENT_POSTS_RESPONSE='"posts":\['
EXPECTED_POPULAR_POSTS_RESPONSE='"posts":\['
EXPECTED_MEMBER_RESPONSE='"member":{'


# Basic check for /recent endpoint
if curl -s "$BASE_URL/posts/recent" | grep -q "$EXPECTED_RECENT_POSTS_RESPONSE"; then
  echo "Recent posts endpoint is up."
else
  echo "Recent posts endpoint check failed."
  exit 1
fi

# Basic check for /popular endpoint
if curl -s "$BASE_URL/posts/popular" | grep -q "$EXPECTED_POPULAR_POSTS_RESPONSE"; then
  echo "Popular posts endpoint is up."
else
  echo "Popular posts endpoint check failed."
  exit 1
fi

# Register a new user
REGISTRATION_RESPONSE=$(curl -s -X POST "$BASE_URL/users" -H "Content-Type: application/json" -d "{\"email\":\"$TEST_USER_EMAIL\",\"username\":\"$TEST_USER_USERNAME\",\"password\":\"$TEST_USER_PASSWORD\"}")

echo "Registration Response: $REGISTRATION_RESPONSE"

LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/users/login" -H "Content-Type: application/json" -d "{\"username\":\"$TEST_USER_USERNAME\",\"password\":\"$TEST_USER_PASSWORD\"}")

echo "Login Response: $LOGIN_RESPONSE"

TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.accessToken')

if [ -z "$TOKEN" ]; then
  echo "Login failed or token not received"
  exit 1
fi

# Sample data for creating a post (modify as per your API requirements)
POST_DATA='{"title": "Test Post Title", "content": "This is test post content"}'

# Create a post
CREATE_POST_RESPONSE=$(curl -s -X POST "$BASE_URL/posts" -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" -H "Content-Type: application/json" -d "$POST_DATA")

echo "Create Post Response: $CREATE_POST_RESPONSE"