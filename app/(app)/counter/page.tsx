'use client'

import {useAppDispatch, useAppSelector} from '@/lib/hooks'

import {incrementByAmount} from './counterSlice'
import {Button} from "@/app/(app)/counter/Button";

const Page = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <>
            <Button onclick={() => dispatch(incrementByAmount(3))}/>
            <div>{count}</div>
        </>
    )
}
export default Page