'use client'

import axios from "axios";
import { useEffect, useState } from "react";


export default function Events() {

  const [images, setImages] = useState([])


  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get('/api/v1/event_images')

        setImages(res.data)
      } catch (error) {
        alert(error.response.error)
      }
    }
    fetchImages()
  }, [])


  return (
    <>
      {
        images.length < 1 ? <div className="w-screen h-screen items-center flex justify-center">
          <div className="spinner"></div>
        </div> : <div className="w-screen p-5 pt-25 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {
            images.map((img, idx) => <img key={idx} src={img} className="rounded-xl" />)
          }
        </div>
      }

    </>
  );
}
