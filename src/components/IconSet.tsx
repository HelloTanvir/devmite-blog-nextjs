import Link from 'next/link';
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiUser6Fill } from 'react-icons/ri';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

interface Props {
    className?: string;
}

const IconSet = ({ className }: Props) => (
    <div className={className}>
        <SearchBar />

        {/* social links */}
        <RiFacebookFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
        <RiTwitterFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
        <RiInstagramFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />

        {/* theme toggle button */}
        <ThemeSwitch />

        {/* profile button */}
        <Link href="/profile">
            <RiUser6Fill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
        </Link>
    </div>
);

export default IconSet;
