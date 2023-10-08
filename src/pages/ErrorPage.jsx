import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center text-2xl lg:text-4xl">
      <div>
        <h1>Oops! You seem to be lost!!</h1>
        <br />
        <p>Go back to Career Nook Home</p>
        <Link to="/">
            <button className="btn btn-outline mt-6">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;