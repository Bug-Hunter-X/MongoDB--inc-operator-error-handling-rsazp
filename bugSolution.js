```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"counter":1},"$setOnInsert":{"counter":0}});
//The above code will work even if the field counter does not exist in the document.
//It uses $setOnInsert to set the initial value to 0 if the document is new. 
```