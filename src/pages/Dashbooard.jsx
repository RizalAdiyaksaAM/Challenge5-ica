import React, { useEffect } from 'react'
import { CookieKeys, CookieStorage } from '../utils/cookie'
import { useNavigate } from 'react-router-dom'

export const Dashbooard = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const cekCookie = CookieStorage.get(CookieKeys.AuthToken)
        if (!cekCookie) {
            navigate('/Login')
        } 
        
    })

    return (
    <div>Dashbooard</div>
  )
}
