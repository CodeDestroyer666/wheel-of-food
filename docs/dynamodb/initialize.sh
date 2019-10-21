#!/bin/bash

# Restart dynamodb docker. TODO: Needs more robust implementation
docker restart laughing_banzai

# Rentals test. TODO: Remove when not needed
aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://table/rental.json
aws dynamodb batch-write-item --request-items file://test_data/rentals_put.json --endpoint http://localhost:8000

# Create dynamodb table
aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://table/one-armed_dinner.json

# Batch write data part 1
aws dynamodb batch-write-item --request-items file://test_data/one-armed_dinner.json --endpoint http://localhost:8000

# Batch write data part 2
aws dynamodb batch-write-item --request-items file://test_data/one-armed_dinner_2.json --endpoint http://localhost:8000