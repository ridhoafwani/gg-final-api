# Users

- User object

```
{
  _id: ObjectId
  name: string
  email: string
  profilePictUrl: string
}
```

## **POST /users**

Add new user.

- **URL Params**  
  None
- **Data Params**

```
  {
    name: string,
    email: string,
    profilePictUrl: string (optional)
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
   **Content:** `{ message: 'User created successfully',
data: <user_object>}, }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## **GET /users**

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
        {<user_object>},
        {<user_object>},
        {<user_object>}
    ]
}
```

## **GET /users/:id**

Returns the specified user.

- **URL Params**  
  _Required:_ `id=[ObjectId]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <user_object> }`
- **Error Response:**  
  **Code:** 404  
  **Content:** `{ error : "User not found" }`

## **PATCH /users/:id**

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
  **Content:** `{ error : "{error message}" }`

## **DELETE /users/:id**

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

# Videos

- Video object

```
{
  _id       : ObjectId
  title     : string
  utl       : string
  thumbnail : string
}
```

## **POST /videos**

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
data: <video_object>}, }`
- **Error Response:**  
  **Code:** 400  
  **Content:** `{ error : {error.message} }`

## **GET /videos**

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

## **GET /videos/:id**

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

## **PATCH /videos/:id**

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

## **DELETE /videos/:id**

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
