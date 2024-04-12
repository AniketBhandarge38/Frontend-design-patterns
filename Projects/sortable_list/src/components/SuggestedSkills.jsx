import React from "react";

const SuggestedSkills = ({ skills, handleAddSkill }) => {
  return (
    <div>
      <h2>Suggested skills</h2>

      {skills.map((skill) => {
        return (
          <div key={skill.id} className="suggested-skill">
            <button onClick={() => handleAddSkill(skill)}>➕</button>
            <p>{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedSkills;
