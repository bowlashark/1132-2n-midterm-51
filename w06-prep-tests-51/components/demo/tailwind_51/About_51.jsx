import aboutSvg from '../assets/about.svg';
import SectionTitle_51 from './SectionTitle_51';

const About_51 = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' alt='' />
        <article>
          <SectionTitle_51 text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            cupiditate fuga ipsum expedita excepturi vitae debitis eius dolor
            quia. Fuga, ducimus praesentium expedita adipisci aliquid enim eius
            eligendi reprehenderit necessitatibus itaque repellendus illum
            doloremque dolorum repellat. Vitae nisi iure impedit? Ratione id
            quis natus? Recusandae et illo beatae consequuntur dolore?
          </p>
        </article>
      </div>
    </section>
  );
};
export default About_51;
//leading-loose:每一行字間格的高度
