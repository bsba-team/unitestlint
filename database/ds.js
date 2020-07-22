const axios = require('axios')

module.exports = (link) => {
    return axios.get(link)
        .then(response => {
        return response.data
    })
        .catch(errors => {
        // console.log(errors.response.status)
        return null
    })
}