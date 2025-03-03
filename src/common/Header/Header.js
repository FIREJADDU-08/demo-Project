import './Header.css';

function Header(){
    return(
        <header className='header-container'>
               <section>
                <img src='logo.webp' className='header-logo' alt='logo'></img>
                </section>
               <section>
               <input type="text" placeholder='search here'></input> 
                </section>
               <section>
                <nav className='nav-link'>
                    <a href='/'>Home</a>
                    <a href='/About'>About</a>
                    <a href='/Contact'>Contact</a>
                </nav>
                </section> 
        </header>
        
    )
}
export default Header;