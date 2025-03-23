import type { TeamMember } from '../../types/about';

interface Props {
  member: TeamMember;
}

export default function TeamMember({ member }: Props) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
        <p className="text-indigo-600 mb-4">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </div>
  );
}