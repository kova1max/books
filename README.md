# Books API
Base url: http://localhost/api
## Book
Example: http://localhost/api/book/update

POST **/book/add**
> Parameters: title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors

PUT **/book/update**
> Parameters: id, title, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors

GET **/book/list**
> Without parameters

DELETE **/book/remove**
> Parameters: id

## Author
Example: http://localhost/api/book/update

POST **/author/add**
> Parameters: name

DELETE **/author/remove**
> Parameters: id

## Models Structure
To be continued ...