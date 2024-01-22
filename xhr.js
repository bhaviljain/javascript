let request = new XMLHttpRequest()
request.open("GET","https://jsonplaceholder.typicode.com/comments")
request.send()
request.onload = function() {
    console.log(request.response);
}