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


Product Management:

Add Product: 

  method: post 
  
  url: http://localhost:8089/api/v1.0.0/product/add 
  
  request body: 
  
  {
        "name": "POCO M3 (Cool Blue, 64 GB)  (6 GB RAM)",
        "description": "The POCO M3 is a stylish personal device that offers immersive visuals, seamless performance, and long battery life for uninterrupted functioning. This smartphone features a Premium Design to let you flaunt style, 6 GB LPDDR4X RAM for smooth performance, and an FHD+ Display for clear and detailed visuals.",
        "richDescription": "Premium DesignThe POCO M3 features a textured back panel and a premium leather-like finish to offer an elegant look to this smartphone. Also, it has a side-mounted fingerprint sensor that adds a premium style and convenience.",
        "image": "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
        "brand": "POCO",
        "price": 10999,
        "category": "60ba004e79527eb5ca3ab71e",
        "countInStock": 10,
        "rating": 4,
        "isFeatured": true
}

response:  {
    "success": true,
    "message": "product added successfully!"
}

list all products:

  method: GET 
  
  API_URL:  http://localhost:8089/api/v1.0.0/product/list 
  
  
  response: list of products from the db


update a product: 

 method: PUT 
 
 API_URL: http://localhost:8089/api/v1.0.0/product/63a45ee66d13dedda7316435 
 
 request: 
 
 {
            "_id": "63a45ee66d13dedda7316435",
            "name": "POCO M3 (Cool Blue, 64 GB)  (6 GB RAM)",
            "description": "The POCO M3 is a stylish personal device that offers immersive visuals, seamless performance, and long battery life for uninterrupted functioning. This smartphone features a Premium Design to let you flaunt style, 6 GB LPDDR4X RAM for smooth performance, and an FHD+ Display for clear and detailed visuals.",
            "richDescription": "Premium DesignThe POCO M3 features a textured back panel and a premium leather-like finish to offer an elegant look to this smartphone. Also, it has a side-mounted fingerprint sensor that adds a premium style and convenience.",
            "image": "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
            "brand": "POCO",
            "price": 9999,
            "countInStock": 50,
            "rating": 5
        }
        
    response: 
    
    {
    "success": true,
    "message": "updated successfully!"
}

Delete a Product: 

Method: DELETE 

API_URL: http://localhost:8089/api/v1.0.0/product/63a45ee66d13dedda7316435 

Response: 
{
    "success": true,
    "message": "deleted successfully!"
}
 
 

