interface ApiError extends Error {
    code : number;
}

interface HttpError extends Error {
    status: number;
}

function isApiError (error:Error){
    if(typeof (error as ApiError).code === 'number'){
        return true
    }
    return false
}
