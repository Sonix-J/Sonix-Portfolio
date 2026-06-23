import Card from '../ui/Card'
import SkillsBadge from '../ui/SkillsBadge'
import { skills } from '../../lib/data'

export default function Skills() {
  return (
    <Card title="Skills">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map(skill => (
          <SkillsBadge
            key={skill.name}
            image={skill.image}
            description={skill.name}
          />
        ))}
      </div>
    </Card>
  )
}