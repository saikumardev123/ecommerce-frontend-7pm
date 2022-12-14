# ecommerce-frontend-7pm

Register user: 


 API URL:   http://localhost:8089/api/v1.0.0/user/register 
 
 METHOD:  post 
 
 Request Body:  
 
    {
    "username": "",
    "password": "",
    "email": ""
}

Response: 

{
    "success": true,
    "token": "eyJhbGciOiwM2NiZmMxYjNhZjQyMTgwIiwiaWF0IjoxNjcwOTQwNjA5fQ.DTQoY521Nvq11PT3AEQlnvpasg52-EM0ni1r_XqpfZk",
    "message": "Registered successfully!"
}


Login user: 


 API URL:   http://localhost:8089/api/v1.0.0/user/login
 
 METHOD:  post 
 
 Request Body:  
 
    {
    "username": "",
    "password": ""
}

