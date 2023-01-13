import { useState, useEffect } from 'react'
import axios from 'axios'
import { GiCancel } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

import Card from '../components/Card'
import Layout from '../components/Layout'
import { DataType } from '../utils/pokemon'


const MyPokemon = () => {
    const [datas, setDatas] = useState<DataType[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData() {
        const getFavPoke = localStorage.getItem("MyPokemon")
        if (getFavPoke) {
            setDatas(JSON.parse(getFavPoke))
        }
    }

    function detailHandler(id: number, name: string) {
        navigate(`/detail/${id}/${name}`)
    }
    function removeFavMovie(data: DataType) {
        let dupeDatas: DataType[] = datas.slice()
        const filterData = dupeDatas.filter((item) => item.id !== data.id)
        localStorage.setItem("MyPokemon", JSON.stringify(filterData))
        alert(`Delete ${data.name} from favorite list`);
        navigate(0)
      }
    return (
        <Layout overflow='auto'>
            <h1 className='text-lg uppercase font-bold text-black text-center pt-5'>My Pokemon</h1>
            <div className='grid grid-flow-row auto-rows-max grid-cols-2 p-6 '>
                {
                    datas.map((data) => (
                        <Card
                            onClick={() => detailHandler(data.id, data.name)}
                            name={data.name}
                            img={data.id ? (
                                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id + ".svg"}`
                            ) : (
                                data.url
                            )}
                        >
                            <div className='w-full p-2 flex justify-end text-black' onClick={()=>removeFavMovie(data)}>
                                <GiCancel size={30}/>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyPokemon