import Link from "../routers/Link";

const Root = () => {
  return (
    <div>
      Home
      <Link to="/about">About</Link>
    </div>
  );
};

export default Root;