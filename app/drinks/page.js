import DrinkList from '@/components/DrinkList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const fetchData = async () => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Error occurs during getting data')
  }
  const data = await response.json()

  return data
}
const Drinks = async () => {
  const data = await fetchData()

  return (
    <div>
      <DrinkList drinks={data.drinks} />
    </div>
  )
}

export default Drinks
