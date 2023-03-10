import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GiCancel } from 'react-icons/gi'
import Swal from 'sweetalert2'

import Layout from '../components/Layout'
import Card from '../components/Card'

import { useTitle } from '../utils/hooks/customHooks'
import { DataType } from '../utils/pokemon'


const MyPokemon = () => {
    const [datas, setDatas] = useState<DataType[]>([])
    useTitle("My Pokemon - Pokemon App")
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
        Swal.fire({
            title: `Are you sure want to delete ${data.name}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes",
            cancelButtonColor: "#d33",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    text: "Delete successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                let dupeDatas: DataType[] = datas.slice()
                const filterData = dupeDatas.filter((item) => item.id !== data.id)
                localStorage.setItem("MyPokemon", JSON.stringify(filterData))
            }
            navigate(0)
        })
    }

    return (
        <Layout overflow='auto'>
            <div className='h-screen overflow-auto'>
                <h1 className='text-lg uppercase font-bold text-black dark:text-white text-center pt-5'>My Pokemon</h1>
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
                                <div className='w-full p-3 flex justify-end text-black dark:text-white ' onClick={() => removeFavMovie(data)}>
                                    <div className='btn btn-ghost'>
                                        <GiCancel size={30} />
                                    </div>
                                </div>
                            </Card>

                        ))
                    }
                </div>
            </div>

        </Layout>
    )
}

export default MyPokemon