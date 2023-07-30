import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { AddProjectSchema } from "../Schemas/AddProjectSchema";
import { useDispatch } from "react-redux";
import { addingNewProject } from "../store/ProjectsSlice/ProjectsSlice";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Button } from "@mui/material";
import CatsSelect from "../helpers/CatSelect";
import SkillsSelect from "../helpers/SkillsSelect";

const addProject = () => {
  const { t } = useTranslation();

  const { categories, skills } = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arabic, setArbic] = useState("");
  const [files, setFiles] = useState([]);
  const filesRef = useRef(null);
  const addNewProject = (values) => {
    let newValues = {
      ...values,
      categoryId: values.categoryId,
    };

    const fd = new FormData();

    let files = newValues.files;
    let skillsIds = newValues.skillsIds;
    if (files) {
      for (let file of files) {
        fd.append("files", file);
      }

      ["files"].map((i) => delete newValues[i]);
    }
    if (skillsIds) {
      for (let sk of skillsIds) {
        fd.append("skillsIds[]", sk);
      }

      ["skillsIds"].map((i) => delete newValues[i]);
    }

    newValues.description_ar = arabic;
    for (let item in newValues) {
      fd.append(item, newValues[item]);
    }
    dispatch(addingNewProject({ fd }));

    swal({
      title: "Success",
      text: "projects added successfully",
      icon: "success",
    });

    navigate("/projects");
  };
  const suggestArabic = async (eve) => {
    made(eve.target.value);
  };
  async function made(text) {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/translate`,
      {
        params: {
          text,
        },
      }
    );

    const data = await response.data;
    setArbic(data.translated);
  }

  const handleSelecedFiles = (e) => {
    let files = [...e.target.files];

    let arr = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      if (file.type.startsWith("image")) {
        arr.push({
          path: URL.createObjectURL(file),
          type: "image",
          name: file.name,
        });
      } else {
        arr.push({
          path: URL.createObjectURL(file),
          type: "application",
          name: file.name,
        });
      }
    }
    setFiles(arr);
  };

  return (
    <div className="add-project mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Formik
              initialValues={{
                title: "",
                description: "",
                description_ar: "",
                range: null,
                duration: null,
                categoryId: "",
                skillsIds: [],
                files: null,
              }}
              validationSchema={AddProjectSchema}
              onSubmit={addNewProject}
            >
              {({ handleChange, handleSubmit }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      {t("Title")}
                    </label>
                    <Field
                      className="form-control"
                      id="title"
                      type="text"
                      name="title"
                    />
                    <ErrorMessage
                      name="title"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      {t("Description")}
                    </label>
                    <Field
                      as="textarea"
                      onBlur={(eve) => {
                        suggestArabic(eve);
                      }}
                      name="description"
                      className="form-control"
                      id="description"
                    />
                    <ErrorMessage
                      name="description"
                      className="text-danger"
                      component="div"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description_ar" className="form-label">
                      {t("Description In Arabic")}
                    </label>
                    <Field
                      as="textarea"
                      name="description_ar"
                      className="form-control"
                      id="description_ar"
                      value={arabic}
                      onChange={(e) => {
                        setArbic(e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name="description_ar"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    {!files.length && (
                      <label htmlFor="files" className="form-label">
                        files (optional)
                      </label>
                    )}
                    <input
                      style={{ display: "none" }}
                      ref={filesRef}
                      hidded="true"
                      multiple
                      name="files"
                      type="file"
                      accept="image/* , application/*"
                      onChange={(e) => {
                        const fl = e.currentTarget.files;
                        handleChange({
                          target: { name: "files", value: [...fl] },
                        });
                        handleSelecedFiles(e);
                      }}
                    />

                    {files.length > 3 ? (
                      <p>files more than 3</p>
                    ) : (
                      files.map((file, index) =>
                        file.type === "image" ? (
                          <img
                            className="mb-2"
                            width="200"
                            height="100"
                            key={index}
                            src={file.path}
                          />
                        ) : (
                          <p key={index}>{file.name}</p>
                        )
                      )
                    )}

                    <Button
                      style={{ display: "block" }}
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        filesRef.current.click();
                      }}
                    >
                      file upload
                    </Button>
                    <ErrorMessage
                      name="files"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="range" className="form-label">
                      {t("Range")}
                    </label>
                    <Field
                      type="number"
                      name="range"
                      className="form-control"
                      id="range"
                      min={1}
                    />
                    <ErrorMessage
                      name="range"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="range" className="form-label">
                      Duration in Days
                    </label>
                    <Field
                      type="number"
                      name="duration"
                      className="form-control"
                      id="duration"
                      min={1}
                    />
                    <ErrorMessage
                      name="duration"
                      className="text-danger"
                      component="div"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="categories" className="form-label">
                      {t("category")}
                    </label>

                    {/* <CustomSelect
                      name="categoryId"
                      options={categories}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      isMulti={false}
                      value="ahmed"
                    /> */}
                    <Field
                      name="categoryId"
                      as={CatsSelect}
                      label="Category"
                      options={categories}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="skills" className="form-label">
                      {t("Skills")}
                    </label>

                    {/* <CustomSelect
                      name="skillsIds"
                      options={skills}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      closeMenuOnSelect={false}
                    /> */}
                    <Field
                      name="skillsIds"
                      as={SkillsSelect}
                      label="Category"
                      options={skills}
                    />
                  </div>

                  <button className="btn btn-primary mb-5" type="submit">
                    {t("Add")}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-lg-4 col-md-12 pt-2" style={{ lineHeight: 1.5 }}>
            <h4 className="heada__title">
              {" "}
              {t("Start completing your project")}
            </h4>
            <p>
              {t(
                "You can complete your project the way you want through Mostaqel, Enter the project details, budget and the expected duration to be reviewed and published for free, after that, it will appear to the freelancers on the project page so they can submit their offers on it and you can choose the most suitable offer for you, and the freelancer starts implementing the project"
              )}
            </p>
            <br />
            <h4 className="heada__title">
              {t("Mostaqel website guarantees your rights")}
            </h4>
            <p>
              {t(
                "Mostaqel acts as an intermediary between you and the freelancer you hire to implement Your project, only after the freelancer completes the whole project, the money will be transfered to his account"
              )}
            </p>
            <br />
            <h4 className="heada__title">
              {t("Tips for a successful business")}
            </h4>
            <ul>
              <li>
                {" "}
                {t("Clarify all the details and tasks to be accomplished")}
              </li>
              <li>
                {" "}
                {t(
                  "Fill in all fields and provide examples of what you want to excute"
                )}{" "}
              </li>
              <li>
                {" "}
                {t(
                  "Break large projects and tasks into several small phases"
                )}{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addProject;
