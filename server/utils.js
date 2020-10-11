/**
 * Return true if 1 or more fields of a request body is empty or not there (undefined)
 * @param fields
 * @returns {boolean}
 */
const isEmpty = fields => {
    let empty = false;
    for (let i of fields) {
        if (i === undefined) {          // Fixed bug here
            empty = true;
        }
    }
    return empty;
}


const getAuthToken = (request) => {
    const auth = request.get('authorization');
    return (auth && auth.toLowerCase().startsWith('token')) ? auth.substring(6) : null;
}

module.exports = {
    isEmpty,
    getAuthToken
}