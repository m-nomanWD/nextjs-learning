import Link from 'next/link'

const Navbar = () => {
 const links = [
  { href: '/about', label: 'about' },
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/query', label: 'query' },
  { href: '/tasks', label: 'tasks' },
 ]
 return (
  <nav className='bg-base-300 py-6 flex flex-col sm:flex-row'>
   <div className='navbar max-w-6xl px-8 mx-auto'>
    <Link href='/' className='btn btn-primary'>Next js</Link>
    <ul className='menu menu-horizontal md:ml-8'>
     {
      links.map((link) => {
       return <li className='capitalize'>
        <Link href={link.href}>{link.label}</Link>
       </li>
      })
     }
    </ul>
   </div>
  </nav>
 )
}

export default Navbar
