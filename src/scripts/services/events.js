import {repositoryQuantity} from '/src/scripts/variables.js'

async function getEvents(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=${repositoryQuantity}`)
    return await response.json()
}

export {getEvents}