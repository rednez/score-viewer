# Score Viewer Backend

## Run locally for develop
- `npm install`
- `npm start`
- `http://localhost:3002`

### Requirements
- _node_: `16.15.0`
- _npm_: `8.5.5`

## Run via Docker
- `docker build -t source-view-backend .`
- `docker run -p 3002:3002 source-view-backend`
- `http://localhost:3002`

## Usage

### Fetch all companies without sorting
`GET http://localhost:3002/api/companies`

### Fetch all companies with sorting

#### Query params
- `sortBy`: `company` or `score`
- `order`: `asc` or `desc`

#### Example
`GET http://localhost:3002/api/companies?sortBy=company&order=asc`
