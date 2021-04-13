const Navbarlist = ({ cssItems }) => {
  return (
    <div className={cssItems}>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbarlist;
