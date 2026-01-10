import { useNavigate } from "react-router-dom";
import Button from "../../components/button/RegularButton";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center"
      style={{
        backgroundImage: "var(--gradient-background)",
        backgroundAttachment: "fixed",
        backgroundColor: "var(--color-background)", // Fallback
      }}
    >
      <h1
        className="text-6xl font-display font-bold mb-4"
        style={{
          color: "var(--color-brand-blue)",
        }}
      >
        404
      </h1>
      <p
        className="text-xl mb-8"
        style={{
          color: "var(--color-primary)",
        }}
      >
        Oops! The page you are looking for does not exist.
      </p>
      <Button onClick={handleGoHome}>Go to Home Page</Button>
    </div>
  );
};

export default NotFoundPage;