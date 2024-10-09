import Link from 'next/link'

const DrinkList = ({ drinks }) => {

 return (
  <ul className='menu menu-vertical ml-0'>
   {
    drinks.map((drink) => {
     return <li key={drink.idDrink}>
      <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}
      </Link>
     </li>
    })
   }
  </ul>
 )
}

export default DrinkList
