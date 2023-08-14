# Table of Contents

- [Table of Contents](#table-of-contents)
- [Minimum Requirment API](#minimum-requirment-api)
- [Videos](#videos)
  - [POST /videos](#post-videos)
  - [GET /videos](#get-videos)
  - [GET /videos/:id](#get-videosid)
  - [PATCH /videos/:id](#patch-videosid)
  - [DELETE /videos/:id](#delete-videosid)
  - [GET /videos/thumbnails](#get-videosthumbnails)
- [Products](#products)
  - [GET /products](#get-products)
  - [GET /:videoId/products](#get-videoidproducts)
  - [GET /products/:id](#get-productsid)
  - [POST /:videoId/products](#post-videoidproducts)
  - [PATCH /products/:id](#patch-productsid)
  - [DELETE /products/:id](#delete-productsid)
- [Comments](#comments)
  - [GET /:videoId/comments](#get-videoidcomments)
  - [POST /:videoId/comments](#post-videoidcomments)
  - [PATCH /comments/:id](#patch-commentsid)
  - [DELETE /comments/:id](#delete-commentsid)
- [Users](#users)
  - [POST /signin](#post-signin)
  - [POST /signup](#post-signup)
  - [GET /users](#get-users)
  - [GET /users/:id](#get-usersid)
  - [PATCH /users/:id](#patch-usersid)
  - [DELETE /users/:id](#delete-usersid)

# Minimum Requirment API

> **Note**
> Here's the list of endpoints to meet the minimum requirement for the GIGIH 3.0 🚀

- [GET /videos/thumbnails](#get-videosthumbnails)
- [GET /:videoId/products](#get-videoidproducts)
- [GET /:videoId/comments](#get-videoidcomments)
- [POST /:videoId/comments](#post-videoidcomments)

# Videos

- Video object

```
{
  _id       : ObjectId
  title     : string
  url       : string
  thumbnail : string
}
```

## POST /videos

Add new video.

- **URL Params**  
  None
- **Data Params**

  _Required:_

```
  {
    title: string,
    url: string,
    thumbnail: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
   **Content:** `{ message: 'Video added successfully',
data: {<video_object>}, }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## GET /videos

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    [
        {<video_object>},
        {<video_object>},
        {<video_object>}
    ]
}
```

## GET /videos/:id

Returns the specified video.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <video_object> }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "video not found" }`

## PATCH /videos/:id

Update specified video.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  _Optional:_

```
  {
    title: string,
    url: string,
    thumbnail: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Video updated successfully', }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Video not found" }`  
  OR  
  **Code:** 400  
  **Content:** `{ error : {error message} }`

## DELETE /videos/:id

Delete specified video.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Video deleted successfully' }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Video not found" }`

## GET /videos/thumbnails

Returns all videos thumbhnail in the.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{[
    {
        _id: ObjectId,
        thumbnail: string,
        title: string
    },
    {
        _id: ObjectId,
        thumbnail: string,
        title: string
    },
    .....
]}
```

# Products

- Product object

```
{
  _id: ObjectId,
  videoId: ObjectId,
  title: string,
  price: number,
  url: string,
  thumbnail: string,
}
```

## GET /products

Returns all products in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    [
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
}
```

## GET /:videoId/products

Returns products on specified video.

- **URL Params**  
  _Required:_ `videoId=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    [
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
}
```

## GET /products/:id

Returns the specified product.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <product_object> }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Product not found" }`

## POST /:videoId/products

Add new product.

- **URL Params**  
  _Required:_ `videoId=[ObjectId]`
- **Data Params**  
  _Required:_

```
  {
    title: string,
    price: number,
    url: string,
    thumbnail: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
   **Content:** `{ message: 'Product added successfully',
data: {<product_object>}, }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## PATCH /products/:id

Update specified product.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  _Optional:_

```
  {
    videoId: ObjectId,
    title: string,
    price: number,
    url: string,
    thumbnail: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Product updated successfully', }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  **Code:** 400  
  **Content:** `{ error : {error message} }`

## DELETE /products/:id

Delete specified user.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Product deleted successfully' }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Product not found" }`

# Comments

- Comment object

```
{
  _id: ObjectId,
  videoId: ObjectId,
  userId: ObjectId,
  comment: string,
  timestamp: Date,
}
```

## GET /:videoId/comments

Returns comments on specified video.

- **URL Params**  
  _Required:_ `videoId=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    [
        {
          _id: ObjectId,
          comment: String,
          timestamp: Date,
          user: {
                    id: ObjectId,
                    name: String,
                    profilePictUrl: String,
                },
        },
        {
          _id: ObjectId,
          comment: String,
          timestamp: Date,
          user: {
                    id: ObjectId,
                    name: String,
                    profilePictUrl: String,
                },
        },
        ....
    ]
}
```

## POST /:videoId/comments

Add new comment.

- **URL Params**  
  _Required:_ `videoId=[ObjectId]`
- **Data Params**  
  _Required:_

```
  {
    comment: string,
    userId: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
   **Content:** `{ message: 'Comment added successfully',
data: {<product_object>}, }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## PATCH /comments/:id

Update specified comment.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  _Optional:_

```
  {
    comment: string,
    userId: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Comment updated successfully', }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Comment not found" }`  
  OR  
  **Code:** 400  
  **Content:** `{ error : {error message} }`

## DELETE /comments/:id

Delete specified comment.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'Comment deleted successfully' }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "Comment not found" }`

# Users

- User object

```
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  profilePictUrl: string,
}
```

## POST /signin

Add new user.

- **URL Params**  
  None
- **Data Params**

```
  {
    name: string,
    password: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
   **Content:** `{ email: String,
    name: String,
    id: String,
    profile: String,
    token: String }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## POST /signup

Add new user.

- **URL Params**  
  None
- **Data Params**

```
  {
    name: string,
    password: string,
    email: string,
    profilePictUrl: string,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
   **Content:** `{ email: String,
    name: String,
    id: String,
    profile: String,
    token: String }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## GET /users

Returns all users in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
    [
        {<user_object (-password)>},
        {<user_object (-password)>},
        {<user_object (-password)>}
    ]
}
```

## GET /users/:id

Returns the specified user.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object (-password)> }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "User not found" }`

## PATCH /users/:id

Update user.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  _Optional:_

```
  {
    name: string,
    email: string,
    profilePictUrl: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'User updated successfully', }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "User not found" }`  
  OR  
  **Code:** 400  
  **Content:** `{ error : {error message} }`

## DELETE /users/:id

Delete specified user.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ message: 'User deleted successfully' }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "User not found" }`
