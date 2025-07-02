

function Navbar() {
    const nav = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Lessons', link: '/lessons' },
        { id: 4, name: 'Contact', link: '/contact' }

    ]
  return (

    
      <nav className="flex justify-between items-center p-4 lg:pl-10 lg:gap-20">
        <ul className="flex ml-4 mt-1 space-x-4 lg:gap-5 lg:tracking-widest text-white/90 leading-tight tracking-wide font-normal ">
          {nav.map((item) => (
            <li key={item.id} >
              <a href={item.link} className="active:text-white/40 active:underline underline-offset-2 transition-colors duration-300 ">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      
    
  )
}

export default Navbar
