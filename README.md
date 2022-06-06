# Score Viewer Monorepo

## Run backend and frontend apps via Docker
- `docker compose up`

## Usage

### _Frontend_
`http://localhost:3003`

### _Backend_

#### Fetch all companies without sorting
`GET http://localhost:3002/api/companies`

#### Fetch all companies with sorting

**Query params:**
- `sortBy`: `company` or `score`
- `order`: `asc` or `desc`

#### Example
`GET http://localhost:3002/api/companies?sortBy=company&order=asc`
