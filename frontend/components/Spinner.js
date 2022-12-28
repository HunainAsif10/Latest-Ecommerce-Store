import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";

export default function Spinner() {
  return (
    <div>
      <BounceLoader
       color="#000080"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
    </div>
  )
}
