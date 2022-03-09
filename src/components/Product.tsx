import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice';

interface Props {
    id: string | number;
    image: string;
    name: string;
    price: number;
    description?: string;
}

const Product: React.FC<Props> = ({ id, image, name, price, description }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ id, name, image, price }));
    };

    return (
        <div className="flex flex-col items-center shadow-[0_3px_3px_0_rgba(0,0,0,0.06)] dark:shadow-[0_3px_3px_0_rgba(255,255,255,0.06)] gap-3 pb-4 rounded-2xl w-[160px]">
            {/* product image */}
            <Link href={`/shop/products/${id}`}>
                <div className="relative w-full h-[133px] cursor-pointer rounded-2xl overflow-hidden">
                    <Image src={image} alt={name} objectFit="cover" layout="fill" />
                </div>
            </Link>

            {/* product price */}
            <span className="text-xs font-normal text-[#8D8D8D]">${price}</span>

            {/* product name and description */}
            {description ? (
                <div className="flex flex-col gap-1 px-4">
                    <span className="font-semibold">{name}</span>
                    <span className="font-medium text-[9px]">{description}</span>
                </div>
            ) : (
                <span className="font-semibold text-[13px] max-w-[124px] -mt-1">{name}</span>
            )}

            {/* add to cart button */}
            <button
                type="button"
                className="w-32 py-2 text-xs font-light tracking-wide text-center border rounded-md border-[#493548] hover:border-[#6A8D92] dark:border-[#6A8D92] dark:hover:border-[#493548] duration-150 hover:text-[#6A8D92] text-[#493548] dark:hover:text-[#493548] dark:text-[#6A8D92]"
                onClick={() => addToCart()}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;
