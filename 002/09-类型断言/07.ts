interface ApiError extends Error {
    code :number ;
}

interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error:Error) {
    if(error instanceof ApiError){
        return true
    }
    return false
}

// 'ApiError' only refers to a type, but is being used as a value here.