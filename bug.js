```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
//The above code will produce an error if the field counter does not exist in the document.
```