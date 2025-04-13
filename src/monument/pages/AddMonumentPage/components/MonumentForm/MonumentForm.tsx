import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <>
      <h2 className="main-title">Add a new monument</h2>
      <form className="monument-form">
        <p className="monument-form__instructions">
          Please fill out the following form to create a new monument:
        </p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="monument-form__text-box"
            id="description"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            className="monument-form__text-box"
            type="url"
            id="imageUrl"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="country"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="city"
            required
          />
        </div>

        <button className="monument-form__button" type="submit">
          Add monument
        </button>
      </form>
    </>
  );
};

export default MonumentForm;
