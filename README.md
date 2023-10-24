# Product RESTful API
RESTful API for sneaker products using Gin with MongoDB

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
- Gin

## Usage
