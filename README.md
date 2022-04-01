<div align="center">

# BooksLibrary Api Documentation

## link: https://bookslibrary-api.herokuapp.com/api/books

## Books Endpoints:

## Get All books:

### GET: https://bookslibrary-api.herokuapp.com/api/books

#### Responses:

### CODE:

200 :Success

404: Not Found

500: Server Error



## Add Book:

### POST: https://bookslibrary-api.herokuapp.com/api/books

#### Responses:

### CODE:

201 :Success

400: Bad Request

409: Conflict (exist name of book)

500: Server Error(Missing required field )



## Delete book :

### DELETE:https://bookslibrary-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error( wrong id of book )



## Get book by ID:

### GET: https://bookslibrary-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error( wrong id of book )



## Update book:

### PUT: https://bookslibrary-api.herokuapp.com/api/books/bookID

#### Responses:

### CODE:

200 :Success

404: Not found

500: Server Error(Missing required field )



<div>
