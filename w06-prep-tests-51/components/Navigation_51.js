import Link from 'next/link';
export default function Navigation_51() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/quiz1/p1_51'
            className='hover:text-accent-400 transition-colors'
          >
            p1_51
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p2_51'
            className='hover:text-accent-400 transition-colors'
          >
            p2_51
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p3_51'
            className='hover:text-accent-400 transition-colors'
          >
            p3_51
          </Link>
        </li>
        <li>
          <Link
            href='/quiz1/p4_51'
            className='hover:text-accent-400 transition-colors'
          >
            p4_51
          </Link>
        </li>
      </ul>
    </nav>
  );
}
//把a heref 的a全改成link
