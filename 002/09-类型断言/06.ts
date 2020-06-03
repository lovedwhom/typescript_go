class ApiError extends Error {
    code :number = 0;
}

class HttpError extends Error {
    statusCode: number = 200
}

function isApiError(error:Error) {
    if(error instanceof ApiError){
        return true
    }
    return false
}