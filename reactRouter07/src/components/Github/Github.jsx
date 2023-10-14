import React from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className='flex flex-wrap  text-justify m-4 bg-gray-300 text-white p-4 text-3xl'>
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div>
              <img src={data.avatar_url} width={300} alt="" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Hi, I am Kashiprasad
              </h2>
              <p className="mt-6 text-gray-900">
                Highly skilled recent graduate from the prestigious CDAC - PG Diploma in Advanced Computing program at KNOW-IT CDAC, Pune, with expertise in full stack web development. Seeking a challenging position to utilize my practical knowledge, logical thinking, and problem-solving abilities. Known for my fast learning capabilities, analytical mindset, and comprehensive understanding of various domains.
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Github


export const githubInfoLoader = async () => {
  // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  const response = await fetch('https://api.github.com/users/prasadpatil1123')
  return response.json()
}