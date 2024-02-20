import './App.css';


//comment

function App() {
  const NavigationBar =['Home','Services','About','Skills','Portfolio','Contact']
  return (
    <>
    <div className="App">
      <div className="Logo">
        <h2>GM</h2>
      </div>
      <div className="Navigation">
       {NavigationBar.map(nav=> <p className='Nav'>{nav}</p>)}
      </div>
    </div>
    <div className='Content' >
    <p className='Major'>Hello, I'm Gnana Moorthy<br></br>a Back end Developer</p>
    <h2 className='Minor'>I'm help to build and maintain the mechanisms<br></br> that process data and perform actions on websites</h2>
    <button className='Talk'>Let's Talk</button>
</div>
    </>
  );
}

export default App;
