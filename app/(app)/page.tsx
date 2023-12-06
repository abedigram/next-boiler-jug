'use client'
import {useAppDispatch, useAppSelector} from '@/lib/hooks'

const Home = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (<></>)
}
export default Home