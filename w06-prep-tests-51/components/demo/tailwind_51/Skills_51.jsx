import { skills } from '../data';
import SectionTitle_51 from './SectionTitle_51';
import SkillsCard_51 from './SkillsCard_51';

const Skills_51 = () => {
  return (
    <section className='bg-white py-20 align-element' id='skills'>
      <SectionTitle_51 text='Tech Stack' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard_51 key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills_51;
