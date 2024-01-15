import { HttpClient } from '@/lib/HttpClient'

const Page = async () => {
  const { status, result } = await HttpClient.get('posts/1')
  // const status = Status.Success
  // const result = "dfdfdf"
  // The `state` arg is correctly typed as `RootState` already
  // const count = useAppSelector(state => state.counter.value)
  // const dispatch = useAppDispatch()

  return (
    <>
      <p>{result.data.body}</p>
      {/*<Button onclick={() => dispatch(incrementByAmount(3))}/>*/}
      {/*<div>{count}</div>*/}
    </>
  )
}
export default Page
