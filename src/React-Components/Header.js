const Header = () => {
  return (
    <div>
      <div className="space-x-12 text-pink-600 font-bold text-2xl float-left pl-12">
        <p>
          <a href="/" >HOME</a>
        </p>
      </div>
      <div className="flex space-x-12 text-pink-600 font-bold text-2xl float-right pr-64">
        <p>
          <a href="Commands" rel="noreferrer" className="hover:text-white duration-100 delay-75">COMMANDS</a>
        </p>
        <p>
          <a href="API" rel="noreferrer" className="hover:text-white duration-100 delay-75">API</a>
        </p>
        <p>
          <a href="Updates" rel="noreferrer" className="hover:text-white duration-100 delay-75">UPDATES</a>
        </p>
      </div>
    </div>
  )
}

export default Header

