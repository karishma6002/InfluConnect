import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '../../types/about';

interface Props {
  team: TeamMember[];
}

export default function TeamSection({ team }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {team.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}