# employer-api

Clone package in any directory =>install express and mongoose in that directory using terminal Run command: npm install express mongoose --save

Then run mongodb database present in the system. Download if not present...

Run command from directory terminal: node src/app.js

Use Postman:

1.GET request(retrieve): get(localhost:5000/)

2.POST request(add): post(localhost:5000/add) body->text/json

     body{
     "name": "xyz",
     "id": 2,
     "department": "ABC",
     "address": "pqr"
     }
3.UPDATE request(update): put(localhost:5000/update)

  here id is primary key...
  
      body{
     "name": "xyzhj",
     "id": 2,
     "department": "hjnABC",
     "address": "pjbjr"
     }
     
        }
4.DELETE request(delete): delete(localhost:5000/remove) body{ "id": 2 }
