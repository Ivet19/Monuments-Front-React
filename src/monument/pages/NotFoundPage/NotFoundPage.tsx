import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Page not found</h1>
      <img
        className="error-image"
        src="/images/404.svg"
        alt="error 404"
        width={600}
      />
      <p className="error-message">
        The page you are looking for doesn't exist or an error has ocurred.
      </p>
    </div>
  );
};

export default NotFoundPage;
