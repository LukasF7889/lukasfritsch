const Navbar = () => {
  return (
    <div className="absolute flex w-full justify-end pr-12 pt-6 z-40">
      <div className="flex gap-2 rounded-full bg-lf-black shadow-2xl text-white px-6 py-2">
        <a onClick={() => (window.location.href = "#skills")}>Skills</a>
        <a onClick={() => (window.location.href = "#projects")}>Projects</a>
        <a onClick={() => (window.location.href = "#about")}>About Me</a>
        <a onClick={() => (window.location.href = "#contact")}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
