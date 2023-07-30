import React, { useEffect, useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllProjects } from "../../store/ProjectsSlice/ProjectsSlice";
import axios from "axios";
import { Button, Slider } from "@mui/material";
import { setFilteringObj } from "../../store/ProjectsSlice/FilteringSlice";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contextAPI/context";

const ProjectsListFilter = () => {
  const dispatch = useDispatch();
  const [cats, setCats] = useState([]);
  const [skills, setSkills] = useState([]);
  const [catsIds, setCatsIds] = useState([]);
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const filterdObj = useSelector((state) => state.FilterSlice);

  const handleProjectsSearch = (e) => {
    dispatch(setFilteringObj({ keyword: e.target.value }));
    dispatch(
      getAllProjects(setFilteringObj({ keyword: e.target.value }).payload)
    );
  };

  const handleCategory = (e) => {
    let val = e.target.value;
    let isCheck = e.target.checked;

    if (isCheck) {
      setCatsIds((old) => {
        const unique = Array.from(new Set([...old, val]));
        console.log(setFilteringObj({ categoryIds: unique }).payload);
        dispatch(setFilteringObj({ categoryIds: unique }));
        dispatch(
          getAllProjects(setFilteringObj({ categoryIds: unique }).payload)
        );
        return unique;
      });
    } else {
      setCatsIds((old) => {
        const filtered = old.filter((id) => id !== val);
        const unique = Array.from(new Set(filtered));
        console.log(setFilteringObj({ categoryIds: unique }).payload);
        dispatch(setFilteringObj({ categoryIds: unique }));
        dispatch(
          getAllProjects(setFilteringObj({ categoryIds: unique }).payload)
        );
        return unique;
      });
    }
  };
  const handleSkills = (e) => {
    let filterSkillsIds = e.reduce((acc, current) => {
      acc.push(current.value);
      return acc;
    }, []);
    dispatch(setFilteringObj({ skillsIds: filterSkillsIds }));
    dispatch(
      getAllProjects(setFilteringObj({ skillsIds: filterSkillsIds }).payload)
    );

    console.log(filterdObj);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/category`, {
        params: {
          lang,
        },
      })
      .then((d) => {
        setCats(d.data.categories);
      });
    axios
      .get(`${import.meta.env.VITE_API_URL}/skills`, {
        params: {
          lang,
        },
      })
      .then((d) => {
        setSkills(d.data.results);
      });
  }, [lang]);
  const [sliderValue, setSliderValue] = useState(0); // initial value is 50

  const handleSlider = (event, newSliderValue) => {
    setSliderValue(() => {
      dispatch(setFilteringObj({ range_lt: newSliderValue, range_gt: 0 }));
      dispatch(
        getAllProjects(
          setFilteringObj({ range_lt: newSliderValue, range_gt: 0 }).payload
        )
      );

      return newSliderValue;
    });

  };

  return (
    <div className="filter-side">
      <div className="search">
        <div className="search-title mb-2 h5"> {t("Search")} </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={handleProjectsSearch}
          />
        </div>
      </div>
      <div className="category">
        <div className="category-title my-2 h5">{t("Category")}</div>
        <ul className="list-unstyled px-0">
          {cats &&
            cats.map((cat) => (
              <li key={cat._id} className="cat">
                <input
                  type="checkbox"
                  name="categoryId"
                  onChange={handleCategory}
                  id="cat"
                  value={cat._id}
                />{" "}
                {cat.title}
              </li>
            ))}
        </ul>
      </div>
      <div className="skills">
        <div className="skills-title my-2 h5">{t("Skills")}</div>
        <div className="form-group">
          <Select
            isMulti
            onChange={handleSkills}
            closeMenuOnSelect={false}
            options={skills.map((skill) => ({
              value: skill._id,
              label: skill.name,
            }))}
          />
        </div>
      </div>
      <div className="fund">
        <div className="fund-title my-2 h5">{t("Fund Slider")}</div>

        <Slider
          // value={filterdObj.range_lt}
          onChange={handleSlider}
          aria-label="slider"
          min={0}
          max={1000000}
          step={1000}
        />
        <p>
          {t("Range")}: {sliderValue}
        </p>
      </div>
    </div>
  );
};

export default ProjectsListFilter;
