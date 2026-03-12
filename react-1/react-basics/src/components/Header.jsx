export default function Header()
{
    //inline css tanımlaması.
    // const style = {
    //   color : "red",
    //   fontSize : "30px",
    //   textTransform : "uppercase"
    // };
    // return <h1 style={style}>Header</h1>;
  
    return(
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href='#' className='navbar-brand'>Store App</a>
  
        </div>
      </nav>
    </header>
    );
}