export const goToHome = (history) => {
    history.push('/')
}

export const goToRegistration = (history) => {
    history.push('/register_request')
}

export const goToRequests = (history) => {
    history.push('/requests_page')
}

export const goToEdit = (history, id) => {
    history.push(`/registration_details/${id}`)
}

export const goToErrorPage = (history) => {
    history.push('/error')
}