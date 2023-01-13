import { useState, useEffect } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
import Layout from '../components/Layout'

import { DataType } from '../utils/pokemon'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<DataType[]>([])
  const [nextPoke, setNextPoke] = useState<string>("")
  const [previousPoke, setPreviousPoke] = useState<string>("")

  function fetchData() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((data) => {
        const { results, next, previous } = data.data
        setData(results)
        setNextPoke(next)
        setPreviousPoke(previous)
      }).catch((err) => {
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function detailHandler(id: string, name: string) {
    navigate(`/detail/${id}/${name}`)
  }

  function nextPage() {
    axios.get(nextPoke)
      .then((data) => {
        const { results, next, previous } = data.data
        setData(results)
        setNextPoke(next)
        setPreviousPoke(previous)
      }).catch((err) => {
      })
  }

  function prevPage() {
    axios.get(previousPoke)
      .then((data) => {
        const { results, next, previous } = data.data
        setData(results)
        setNextPoke(next)
        setPreviousPoke(previous)
      }).catch((err) => {
      })
  }

  return (
    <Layout overflow='auto'>
      <h1 className='text-lg uppercase font-bold text-black text-center pt-5'>List Pokemon</h1>
      <div className='grid grid-flow-row auto-rows-max grid-cols-2 p-6'>
        {
          data.map((data) => (
            <Card
              onClick={() => detailHandler(data.url.slice(34).replace("/", ""), data.name)}
              name={data.name}
              img={data.url ? (
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.url.slice(34).replace("/", ".svg")}`
              ) : (
                data.url
              )}
            />
          ))
        }
      </div>
      <div className="flex w-full mb-5 ">
        <div className='flex w-full justify-start ml-6 text-base-100'>
          <AiFillCaretLeft size={35}
            onClick={() => prevPage()}
          />
        </div>
        <div className='flex w-full justify-end mr-6 text-base-100'>
          <AiFillCaretRight size={35}
            onClick={() => nextPage()}
          />
        </div>
      </div>
    </Layout>

  )
}

export default Home