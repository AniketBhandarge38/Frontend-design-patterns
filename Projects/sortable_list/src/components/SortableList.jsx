import React, { useState } from "react";
import { selectedSkills, suggestedSkills } from "../utils/data";
import SuggestedSkills from "./SuggestedSkills";

let nextID = 0;

const SortableList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addSkill, setAddSkill] = useState([1, 2, 3, 4, 5]);
  const [selectedSkillsState, setSelectedSkillsState] =
    useState(selectedSkills);
  const [suggestedSkillsState, setSuggestedSkillsState] =
    useState(suggestedSkills);

  const addSkillToState = (skill) => {
    const data = [...selectedSkillsState, skill];
    addSkill.shift();

    setSelectedSkillsState(data);
    setAddSkill(addSkill);
  };

  const handleSelectSkill = (e) => {
    if (e.target.value.trim() === "") return;

    const skill = suggestedSkillsState.filter((suggestion) => {
      return suggestion.name === e.target.value;
    });

    console.log(skill[0]);

    addSkillToState(skill[0]);
    const filteredSuggestions = suggestedSkillsState.filter((suggestion) => {
      return suggestion.id !== skill[0].id;
    });

    setSuggestedSkillsState(filteredSuggestions);
  };

  const handleAddSkill = (skill) => {
    if (selectedSkillsState.length >= 5) return;
    addSkillToState(skill);
  };
  return (
    <div>
      <h1>Select your top 5 tech skills</h1>

      <div className="sortable-skills-container">
        <div className="sortable-skills">
          {selectedSkillsState.map((skill, index) => {
            return (
              <div className="sortable-skill" key={skill.id}>
                <p>
                  <span>{index + 1 + " "}</span> {skill.name}
                </p>
                <button>❌</button>
              </div>
            );
          })}

          {addSkill.length <= 5 &&
            addSkill.map((id, index) => {
              return (
                <select
                  className="select-skill"
                  disabled={currentIndex !== index}
                  onChange={(e) => handleSelectSkill(e)}
                  value={id}
                  key={id}
                >
                  <option value="">{id + ". "}Add skill</option>
                  {suggestedSkillsState.map((skill) => {
                    return (
                      <option value={skill.name} key={skill.id}>
                        {skill.name}
                      </option>
                    );
                  })}
                </select>
              );
            })}
        </div>

        <div className="suggested-skills">
          <SuggestedSkills
            skills={suggestedSkillsState}
            handleAddSkill={handleAddSkill}
          />
        </div>
      </div>
    </div>
  );
};

export default SortableList;
