import React from 'react'
import Photo from './Photo'

//props as argument for the method
const CardContainer = props => {

    const displayPics = () => {
        return props.photos.map((photo,key) => {
            return <Photo url = {photo.url} key={key} />
        })
    }

    return (

        <div>
            {/* displayPics() */}
         <section>{displayPics()}</section>
        </div>
    )
}

export default CardContainer