export default function SkillCard({ skill }) {
    return (
      <div className="flex items-center space-x-2 p-2 border rounded">
        <img src={`/images/skills/${skill.icon}`} alt={skill.name} className="w-6 h-6" />
        <span>{skill.name}</span>
      </div>
    );
  }