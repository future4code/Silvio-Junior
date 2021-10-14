import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useGetTrips = () => {
    const [trips, setTrips] = useState([])

    useEffect (() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips')
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }, [])

    return trips
}