import Link from 'next/link';
import {
    RiFacebookFill,
    RiInstagramFill,
    RiShoppingBasketFill,
    RiTwitterFill,
    // eslint-disable-next-line prettier/prettier
    RiUser6Fill
} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

interface Props {
    className?: string;
}

const IconSet = ({ className }: Props) => {
    const cartLength = useSelector<RootState, RootState['cart']>((store) => store.cart).length;

    return (
        <div className={className}>
            <SearchBar />

            {/* social links */}
            <RiFacebookFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
            <RiTwitterFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
            <RiInstagramFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />

            {/* theme toggle button */}
            <ThemeSwitch />

            {/* cart button */}
            <Link href="/cart">
                <button type="button" className="relative">
                    <RiShoppingBasketFill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />

                    {cartLength > 0 ? (
                        <span className="absolute -top-2 -right-2 bg-[#FF7020] text-white rounded-full text-[8px] h-[15px] w-[15px] flex justify-center items-center">
                            {cartLength}
                        </span>
                    ) : null}
                </button>
            </Link>

            {/* profile button */}
            <Link href="/profile">
                <RiUser6Fill className="scale-[1.11] cursor-pointer hover:opacity-60 transition-opacity duration-200" />
            </Link>
        </div>
    );
};

export default IconSet;
