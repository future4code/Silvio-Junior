import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useGetTripDetail = (id) => {
    const [trip, setTrip] = useState([])

    useEffect (() => {

        const headers = {
            headers:{

                auth: window.localStorage.getItem('token')
            }
        }

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trip/${id}`,headers)
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }, [])

    return trip
}