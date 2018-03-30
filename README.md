
# REST-API

## Introduction
Here you can find the API for android project (MDS School)

## Prerequisites

install `nodejs` & `npm`

## How to use it
Clone this repository to your local storage:
`git clone https://github.com/eamarelo/rest-api.git`
<br>
and install dependencies:
`npm i`
<br>
Run the project to http://localhost:1337/ :
`npm run start`

## UML

#### Table Users

| USERS | type
| --- | --- 
| _id | String
|Name | String
| email | String
| password | String/hashed

#### Table Track

| TRACK| type
| --- | --- 
| _id | String
|identification| String
| longitude| String
| latitude| String

## URL REQUEST

### USER PART
#### Register an user

URI : http://localhost:1337/api/auth/register
method: POST
Data to send :
`{ 
	"name": "name",
	"email": "email@hotmail.fr",
	"password": "password"
}`

response: 
`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNmODJjNzRkM2NkMTZkODRiMzYyMiIsImlhdCI6MTUyMjMzMzc0MCwiZXhwIjoxNTIyNDIwMTQwfQ.ZhW2VDbOWk0m9iMMP5KifHdlwe5CFn9FjO7izBtcz6o"
}`

#### Get list all users

URI : http://localhost:1337/users/
method: GET

response: 
`[
    {
        "_id": "5abcb9e23e638722f860de02",
        "name": "Guizmo",
        "email": "jasmine@hotmail.fr",
        "password": "elies",
        "__v": 0
    },
    {
        "_id": "5abcbb629464d5370ccb5d60",
        "name": "Katy",
        "email": "Katy@hotmail.fr",
        "password": "Jasmine",
        "__v": 0
    },
    {
        "_id": "5abcbdc29464d5370ccb5d62",
        "__v": 0
    },
    {
        "_id": "5abcc7b5375e0d19f0ec2065",
        "name": "jaime",
        "email": "jaime@hotmail.fr",
        "password": "$2a$08$0ffEqllxsQwgoXAI9qulJuPeEwwlFemYa7CWR6IfJBC2i61XPZYiG",
        "__v": 0
    },
    {
        "_id": "5abce5f4454c0a1f141dcad8",
        "__v": 0
    },
    {
        "_id": "5abce812454c0a1f141dcad9",
        "name": "Elies",
        "email": "elies@hotmail.fr",
        "password": "Jasmine",
        "__v": 0
    },
    {
        "_id": "5abceefe9fc39f2db83a59ee",
        "name": "Vincent",
        "email": "Vincent@hotmail.fr",
        "password": "Salle",
        "__v": 0
    }
]`
#### Get user by Id

URI : http://localhost:1337/users/:id
method: GET

response: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Update an user

URI : http://localhost:1337/users/:id
method: PUT 
data to send :
`{
	"name": "Aladin"
}`
response before modification: 
`{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Guizmo",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

response before modification: `{
    "_id": "5abcb9e23e638722f860de02",
    "name": "Aladin",
    "email": "jasmine@hotmail.fr",
    "password": "elies",
    "__v": 0
}`

#### Delete an user

URI : http://localhost:1337/users/:id
method : DELETE
resonse: User was deleted.

#### Get user by token
URI : http://5.51.221.85:1337/api/auth/me

Headers:`{
	"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMyMTMzMywiZXhwIjoxNTIyNDA3NzMzfQ.BHdZhxboUpGcTZVVv6ERAx3ttruGbUvf_Sw6mQPNPOA"
}`

method : GET

response :
`{
    "_id": "5abcc7b5375e0d19f0ec2065",
    "name": "jaime",
    "email": "jaime@hotmail.fr",
    "__v": 0
}`

#### Login /Authentification

URI : http://localhost:1337/api/auth/login
data to send :
`{
	"email":"email@hotmail.fr",
	"password":"password"
}`
method: POST

response if correct : 
`{
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYmNjN2I1Mzc1ZTBkMTlmMGVjMjA2NSIsImlhdCI6MTUyMjMzNDE2MSwiZXhwIjoxNTIzMTk4MTYxfQ.CmvzV9766J4HdowKyG2RRytaXFpWp1WFgQSBT-We1j4"
}`

response if incorrect : 
`{
    "auth": false,
    "token": null
}`

### TRACKER PART
#### Create a tracker
URI : http://localhost:1337/track/
method: POST

data to send :
`{
		"identification" : "Motorola",
		"longitude" : "2.2945",
		"latitude" : "48.8584"
	}`
	
response : 
`{
    "_id": "5abcfb9d74d3cd16d84b3624",
    "identification": "Motorola",
    "longitude": "2.2945",
    "latitude": "48.8584",
    "__v": 0
}`

#### List all tracker
URI : http://localhost:1337/track/
method: GET
	
response : 
`[
    {
        "_id": "5abcdeee938c3d365828d345",
        "identification": "samsung",
        "longitude": "2,2945",
        "latitude": "48,8584",
        "__v": 0
    },
    {
        "_id": "5abcdff9cf4c2603f0366669",
        "identification": "samsung",
        "longitude": "2,2945",
        "latitude": "48,8584",
        "__v": 0
    },
    {
        "_id": "5abce38e454c0a1f141dcad5",
        "__v": 0
    },
    {
        "_id": "5abce4bf454c0a1f141dcad6",
        "__v": 0
    },
    {
        "_id": "5abce547454c0a1f141dcad7",
        "__v": 0
    },
    {
        "_id": "5abcefd6e7424640e4e59b8a",
        "identification": "Nokia",
        "longitude": "2,2945",
        "latitude": "48,8584",
        "__v": 0
    },
    {
        "_id": "5abcefdbe7424640e4e59b8b",
        "identification": "Nokia",
        "longitude": "2,2945",
        "latitude": "48,8584",
        "__v": 0
    },
    {
        "_id": "5abceffce7424640e4e59b8c",
        "identification": "iphone",
        "longitude": "2.2945",
        "latitude": "48.8584",
        "__v": 0
    },
    {
        "_id": "5abcfacf74d3cd16d84b3623",
        "identification": "Motorola",
        "longitude": "2.2945",
        "latitude": "48.8584",
        "__v": 0
    }
]`

#### Create a tracker
URI : http://localhost:1337/track/:id
method: GET
	
response : 
`{
    "_id": "5abcfb9d74d3cd16d84b3624",
    "identification": "Motorola",
    "longitude": "2.2945",
    "latitude": "48.8584",
    "__v": 0
}`
