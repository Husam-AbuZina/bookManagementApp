# bookManagementApp

## Useful functions to use whenbuilding functions:

Certainly! Here's a list of some commonly used methods available on JavaScript's Array.prototype. These methods allow you to manipulate, iterate, and perform various operations on arrays:

forEach(callbackFn, thisArg): Calls a provided function once for each element in the array.

map(callbackFn, thisArg): Creates a new array with the results of calling a provided function on every element in the array.

filter(callbackFn, thisArg): Creates a new array with all elements that pass the test implemented by the provided function.

reduce(callbackFn, initialValue): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

reduceRight(callbackFn, initialValue): Similar to reduce, but works from right to left in the array.

some(callbackFn, thisArg): Checks if at least one element in the array passes the test implemented by the provided function.

every(callbackFn, thisArg): Checks if all elements in the array pass the test implemented by the provided function.

find(callbackFn, thisArg): Returns the first element in the array that passes the test implemented by the provided function.

findIndex(callbackFn, thisArg): Returns the index of the first element in the array that passes the test implemented by the provided function.

indexOf(searchElement, fromIndex): Returns the first index at which a given element can be found in the array, or -1 if it's not present.

lastIndexOf(searchElement, fromIndex): Returns the last index at which a given element can be found in the array, or -1 if it's not present.

includes(searchElement, fromIndex): Checks if the array contains a certain element, returning true or false.

slice(start, end): Returns a shallow copy of a portion of the array selected from start to end (end not included).

splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

concat(array1, array2, ...): Returns a new array comprised of this array joined with other arrays or values.

join(separator): Creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator string.

sort(compareFn): Sorts the elements of an array in place and returns the array.

reverse(): Reverses the elements in the array in place.

isArray(value): Checks if the given value is an array.

Remember that these are just some of the most commonly used methods on the Array.prototype. There are more methods available as well, so it's always a good idea to refer to the official JavaScript documentation for a comprehensive list and detailed explanations.

## HTTP response status codes 

##### indicate the outcome of a HTTP request made by a client to a web server. Here is a list of common HTTP response status codes along with their meanings:

1xx - Informational Responses:

100 Continue: The server has received the request headers and the client should proceed to send the request body.
101 Switching Protocols: The server agrees to switch protocols and is acknowledging the client's request to do so.
2xx - Successful Responses:

200 OK: The request has succeeded, and the server has returned a response.
201 Created: The request has been fulfilled, and a new resource has been created as a result.
204 No Content: The server successfully processed the request, but there's no content to send in the response.
3xx - Redirection Responses:

300 Multiple Choices: The requested resource has multiple representations; the user or the user agent can choose among them.
301 Moved Permanently: The requested resource has been assigned a new permanent URI and the client should update its references.
304 Not Modified: The client's cached copy is up-to-date, and the requested resource hasn't been modified.
4xx - Client Error Responses:

400 Bad Request: The server cannot understand the request due to a client error.
401 Unauthorized: Authentication is required and has failed or has not been provided.
403 Forbidden: The client does not have the necessary permissions to access the requested resource.
404 Not Found: The server has not found anything matching the requested URI.
405 Method Not Allowed: The method specified in the request is not allowed for the resource identified by the URI.
5xx - Server Error Responses:

500 Internal Server Error: A generic error message, typically given when an unexpected condition was encountered on the server.
501 Not Implemented: The server does not support the functionality required to fulfill the request.
502 Bad Gateway: The server, while working as a gateway to get a response needed to handle the request, got an invalid response.
503 Service Unavailable: The server is not ready to handle the request; the server is down or overloaded.
Note that this list includes some of the most common status codes, but there are additional status codes with their own meanings as defined in the HTTP specification. It's important to refer to the official documentation for complete and accurate information on HTTP status codes.

# Notes:

- Make More Advanced features about the project
- Clean Code Is essential for Programmers to know
- More Practice Gives More Value and Speed.
