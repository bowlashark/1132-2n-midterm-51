import { links } from '../data';

const Navbar_51 = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element py-8 flex flex-col sm:flex-row sm:items-center sm:gap-x-16 sm:py-6'>
        <h2 className='text-3xl font-bold'>
          Web<span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id} //有四個東西要返回(不具唯一性),所以用id當作key區分
                href={href} //超連結
                className='capitalize text-[19px] hover:text-emerald-600 tracking-wide duration-300' //因為還沒做css所以先用classname
              >
                {text}
              </a> //返回的東西{text}是四個超連結
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar_51;
