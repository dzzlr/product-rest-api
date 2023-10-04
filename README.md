# Product RESTful API
RESTful API for sneaker products using ExpressJS with MongoDB

## Endpoint API
| **Method** | **Route**         | **Description**                |
|------------|-------------------|--------------------------------|
| GET        | /api/products     | Get All Products               |
| POST       | /api/products     | Add Products                   |
| GET        | /api/products/:id | Get Detail Products With ID    |
| PUT        | /api/products/:id | Update Detail Products With ID |
| DELETE     | /api/products/:id | Delete Products With ID        |

Getting Data Products using Filter and Pagination
| **Parameter**  | **Type**  | **Required** | **Description**                      |
|----------------|-----------|--------------|--------------------------------------|
| search         | String    | Optional     | Search for product                   |
| brand          | String    | Optional     | Filter for product brand             |
| price          | Integer   | Optional     | Filter for product price             |
| page           | Integer   | Optional     | Link to another page                 |
| limit          | Integer   | Optional     | Show maximum number product per page |

## Requirements
- NodeJS or NPM

## Usage
1. Fork this repository.
2. Duplicate `.env.example` and rename it to `.env` then make  changes according to your development server configuration.
3. Run the command `npm install` in the project folder of this repository.
4. Create a collection in MongoDB called `collect_product` (match with your .env) on your development server
5. Run the app `npm run start-dev`
