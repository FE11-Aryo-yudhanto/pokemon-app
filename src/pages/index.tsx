import { useState, useEffect } from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
import Layout from '../components/Layout'

interface DataType {
  name: string
  url: string
}

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<DataType[]>([])

  function fetchData() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then((data) => {
        const { results } = data.data
        setData(results)
      }).catch((err) => {
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  function detailHandler(id: string, name: string) {
    navigate(`/detail/${id}/${name}`)
  }

  return (
    <Layout>
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
        <div className='flex w-full justify-start'>
          <AiFillCaretLeft size={35}/>
          <button
            className="btn ml-5"
          // onClick={() => prevPage()}
          // disabled={page === 1}
          >
            «
          </button>
        </div>
        {/* <button className="btn">{page}</button> */}
        <div className='flex w-full justify-end'>
        <AiFillCaretRight size={35}/>
          <button
            className="btn mr-5"
          // onClick={() => nextPage()}
          // disabled={page === totalPage}
          >
            »
          </button>
        </div>
      </div>
    </Layout>

  )
}

export default Home