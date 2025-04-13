import { useState } from "react";
import { useNavigate } from "react-router";
import { MonumentData } from "../../types";
import "./MonumentForm.css";

interface MonumentFormProps {
  action: (monumentData: MonumentData) => Promise<void>;
}

const MonumentForm: React.FC<MonumentFormProps> = ({ action }) => {
  const initialMonumentData: MonumentData = {
    name: "",
    description: "",
    imageUrl: "",
    city: "",
    country: "",
  };

  const [monumentData, setMonumentData] =
    useState<MonumentData>(initialMonumentData);

  const changeMonumentData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    const propertyName =
      event.target.id === "imageUrl" ? "imageUrl" : event.target.id;

    setMonumentData((monumentData) => ({
      ...monumentData,
      [propertyName]: newValue,
    }));
  };

  const isFormValid =
    monumentData.name !== "" &&
    monumentData.description !== "" &&
    monumentData.imageUrl !== "" &&
    monumentData.country !== "" &&
    monumentData.city !== "";

  const navigate = useNavigate();

  const onSubmitForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    await action(monumentData);

    navigate("/monuments");
  };

  return (
    <>
      <form className="monument-form" onSubmit={onSubmitForm}>
        <h3 className="monument-form__instructions">
          Please fill out the following form to create a new monument
        </h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="name"
            value={monumentData.name}
            onChange={changeMonumentData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="monument-form__text-box"
            id="description"
            value={monumentData.description}
            onChange={changeMonumentData}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            className="monument-form__text-box"
            type="url"
            id="imageUrl"
            value={monumentData.imageUrl}
            onChange={changeMonumentData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="country"
            value={monumentData.country}
            onChange={changeMonumentData}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            className="monument-form__text-box"
            type="text"
            id="city"
            value={monumentData.city}
            onChange={changeMonumentData}
            required
          />
        </div>

        <button
          className="monument-form__button"
          type="submit"
          disabled={!isFormValid}
        >
          Add monument
        </button>
      </form>
    </>
  );
};

export default MonumentForm;
