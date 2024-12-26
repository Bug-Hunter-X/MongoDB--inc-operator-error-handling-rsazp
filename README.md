# MongoDB $inc Operator Error Handling
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB: attempting to increment a field that does not exist.  The provided code example shows the error and includes a solution to handle this scenario gracefully.

## Error Description
The `$inc` operator is used to increment a numerical field. However, if the specified field does not exist in the document, MongoDB will throw an error instead of creating the field and setting its value to 1. This can be problematic when working with documents that may not have all the expected fields.

## Solution
The solution involves using the `$setOnInsert` operator in conjunction with `$inc` to ensure that the field is created and incremented correctly.  The `$setOnInsert` operator ensures that the operation only sets a field if the document is being inserted. 
