import { projects } from '../data';
import SectionTitle_51 from './SectionTitle_51';
import ProjectsCard_51 from './ProjectsCard_51';

const Projects_51 = () => {
  return (
    <section className='bg-white py-20 align-element' id='projects'>
      <SectionTitle_51 text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard_51 key={project.id} {...project} />; //把data中project的屬性全丟給projectscard
        })}
      </div>
    </section>
  );
};
export default Projects_51;
