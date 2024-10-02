import "./nav.css";
import logoImg from '/images/logo.png';

export const NavBar =({ handleChange, isChecked }) => {

  return (
    <div className="NavBar">
      <div className="navContainer">
        <div className="navLeft">
          <img id="logoImg" src={logoImg}/>
          <h2 className="subHead">Illustration / Visual Design / Character Design</h2>
        </div>
        <div className="navButtons">
          <input
              type="checkbox"
              id="check"
              className="toggle"
              onChange={handleChange}
              checked={isChecked}
            />
            <label htmlFor="check"></label>


            <h2 className="navText"onClick={() => window.location = 'mailto:ana.daren.green@gmail.com'}>Contact</h2>
        </div>
      </div>

    <hr className='topLine'></hr>
  </div>
  
  );
};