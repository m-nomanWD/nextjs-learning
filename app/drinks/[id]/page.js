import Link from 'next/link'
import error from '../error'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch drink...')
  }
  return res.json()
}
const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id)
  const name = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb
  return (
    <div>
      <Link href='/drinks'>
        <button className='btn btn-primary my-6'>Back to Drinks</button>
      </Link>
      <h1>{name}</h1>
    </div>
  )
}

export default SingleDrinkPage
