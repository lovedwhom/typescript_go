function isApiError(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
