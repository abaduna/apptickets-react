import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
        <h1>Welcomen home</h1>
        <Link to="tickts">Go to tickts</Link>
    </>
  )
}

export default Home