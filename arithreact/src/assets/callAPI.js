/*
    =========================================================
    COMMON API CALL FUNCTION
    =========================================================

    This is an External JavaScript file.

    This function can be reused by any kind of different React components.

    Parameters:

   A. reqmethod
        -> GET, POST, PUT, DELETE
   B. url
        -> Backend API URL
   C. data
        -> Data to send to backend
   D. responseHandler
        -> Function that receives the response from backend

    In code, we have the four stages:
        1. Create options
        2. Call fetch()
        3. Receive response
        4. Send response back to component

    Simpler Usage Example:
        callApi("POST","http://localhost:5001/add",data,setResult);
*/


export function callAPI(reqmethod,url,data,responseHandler) 
{
    /*
        Variable used to store fetch configuration.
    */
    let options;
    /*
        GET and DELETE requests normally do not send a body.
    */
    if (reqmethod === "GET" || reqmethod === "DELETE") 
    {
        options = {method:reqmethod, headers: {"Content-Type":"application/json"}};
    }
    /*
        POST and PUT requests normally send data through request body.
    */
    else 
    {
        options = {method:reqmethod, headers: {"Content-Type":"application/json"}, body:JSON.stringify(data)};
    }
    /*
        fetch() sends the request to the backend API.
    */
    fetch(url, options)
    /*
        Receive response from server.
    */
    .then(response => {
        /*
            Check whether response is successful.
        */
        if (!response.ok) 
        {
            throw new Error(response.status + ": " + response.statusText);
        }
        /*
            Convert received response into text.
        */
        return response.json();
    })
    /*
        Send received data back to the React component.
    */
    .then(data => {responseHandler(data);})
    /*
        Handle any API error.
    */
    .catch(error => {alert(error);});
}
