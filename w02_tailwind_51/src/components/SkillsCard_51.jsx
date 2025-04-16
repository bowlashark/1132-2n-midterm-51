const SkillsCard_51 = ({ title, icon, text }) => {
  return (
    <article className='bg-white'>
      <p>{icon}</p>
      <div className='capitalize p-8 tracking-wide font-medium'>
        <h2 className='text-xl'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
      </div>
    </article>
  );
};
export default SkillsCard_51;
