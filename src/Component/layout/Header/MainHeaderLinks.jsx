const MainHeaderLinks = ({ path, icon }) => {
  return (
    <>
      <a href={path} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </>
  );
};

export default MainHeaderLinks;
