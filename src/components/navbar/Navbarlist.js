const Navbarlist = ({ cssList, cssItems }) => {
  return (
    <div className={cssItems}>
      <ul className={cssList}>
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbarlist;
