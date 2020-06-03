class ApiError extends Error {
    code :number = 0;
}

class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error:error) {
    if(typeof (error as ApiError).code ==="number"){
        return true
    }
    return false
}