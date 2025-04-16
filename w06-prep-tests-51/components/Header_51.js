import Navigation_51 from '@/components/Navigation_51';
import Logo_51 from '@/components/Logo_51';

function Header_51() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_51 />
        <Navigation_51 />
      </div>
    </header>
  );
}

export default Header_51;
