import { useState, useEffect, FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import CardDetail from '../components/CardDetail'

interface DetailsType {
    type: {
        name: string
    },
    slot: number
}

interface ProfilePoke {
    weight?: number
    height?: number
    name?: string
}

interface AbilitiesType {
    ability: {
        name: string
    }
}

interface MovesType {
    move: {
        name: string
    }
}

interface StatsType {
    base_stat: number
    stat: {
        name: string
    }
}

const DetailsPokemon = () => {
    const { id_pokemon, name_pokemon } = useParams()
    const [namePoke, setNamePoke] = useState<string>("")
    const [weight, setWeight] = useState<string>("")
    const [height, setHeight] = useState<string>("")
    const [data, setData] = useState<DetailsType[]>([])
    const [baseStat, setBaseStat] = useState<StatsType[]>([])
    const [abilities, setAbilities] = useState<AbilitiesType[]>([])
    const [moves, setMoves] = useState<MovesType[]>([])

    const navigate = useNavigate()

    function fetchData() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)
            .then((res) => {
                console.log("data name: ", namePoke)
                const ability = res.data.abilities
                const status = res.data.stats
                const move = res.data.moves
                const datas = res.data.types
                const { weight, height, name } = res.data
                setWeight(weight)
                setNamePoke(name)
                setHeight(height)
                setAbilities(ability)
                setBaseStat(status)
                setMoves(move)
                setData(datas)
            }).catch((err) => {
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    function catchHandler(name: string) {
        navigate(`/catch/${name}`)
    }

    return (
        <Layout overflow='auto'>
            <div className='flex justify-center w-full mt-8'>
                <h1 className='uppercase font-bold text-xl md:text-2xl text-black'>{name_pokemon}</h1>
            </div>
            <div className='grid grid-flow-row auto-rows-max grid-cols-2 p-6'>
                <Card
                    img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id_pokemon}.svg`}
                >
                    <div className='grid grid-flow-row auto-rows-max grid-cols-1 m-5 gap-3 md:grid-cols-2'>
                        {
                            data.map((data) => (
                                <div className='rounded-lg border-4 border-black'>
                                    <p className='bg-white rounded-lg text-center text-black capitalize text-xs md:text-md lg:text-lg font-bold'>{data.type.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </Card>
                <CardDetail>
                    <h1 className='text-lg uppercase font-bold text-black'>Pokemon Stats</h1>
                    {
                        baseStat.map((data) => (
                            <div className='mb-5'>
                                <p className="text-left text-black text-xs md:text-md lg:text-lg font-semibold capitalize">{data.stat.name}</p>
                                <div className='h-1 w-full bg-gray-300'>
                                    <div className="h-1 bg-blue-500 text-black text-xs md:text-md lg:text-lg font-semibold" style={{ width: `${data.base_stat >= 100 ? ("100"):(data.base_stat)}%` }}>{data.base_stat}</div>
                                </div>
                            </div>
                        ))
                    }
                </CardDetail>
            </div>
            <div className='mx-5'>
                <CardDetail>
                    <div className=''>
                        <h1 className='text-lg uppercase font-bold text-black'>Profile</h1>
                        <p className="text-left text-black text-xs md:text-md lg:text-lg capitalize ">Name: {namePoke}</p>
                        <p className="text-left text-black text-xs md:text-md lg:text-lg normal-case ">Weight: {weight}</p>
                        <p className="text-left text-black text-xs md:text-md lg:text-lg normal-case ">Height: {height}</p>
                    </div>
                </CardDetail>
            </div>
            <div className='grid grid-flow-row auto-rows-max grid-cols-2 p-6'>
                <CardDetail>
                    <h1 className='text-lg uppercase font-bold text-black'>Abilities</h1>
                    {
                        abilities.map((data) => (
                            <div className=''>
                                <p className='capitalize text-xs md:text-md lg:text-lg text-black'>{data.ability.name}</p>
                            </div>
                        ))
                    }
                </CardDetail>
                <CardDetail>
                    <h1 className='text-lg uppercase font-bold text-black'>Moves</h1>
                    {
                        moves.slice(0, 4).map((data) => (
                            <p className='capitalize text-xs md:text-md lg:text-lg text-black'>{data.move.name}</p>
                        ))
                    }
                </CardDetail>
            </div>
            <div className='w-full flex justify-center mb-10'>
                <Button
                    label='Catch!'
                    className='text-white'
                    onClick={() => catchHandler(namePoke)}
                />
            </div>
        </Layout>
    )
}

export default DetailsPokemon