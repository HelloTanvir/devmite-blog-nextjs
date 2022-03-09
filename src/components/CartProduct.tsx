import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../store/cartSlice';

interface Props {
    id: string | number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const CartProduct = ({ id, name, image, price, quantity }: Props) => {
    const dispatch = useDispatch();

    const decreaseQty = () => {
        dispatch(decreaseQuantity({ id }));
    };

    const increaseQty = () => {
        dispatch(increaseQuantity({ id }));
    };

    const removeFromCart = () => {
        dispatch(removeProduct({ id }));
    };

    return (
        <div className="flex items-center py-4 pl-4 pr-8 rounded-md shadow-[0px_2px_2px_0_rgba(0,0,0,0.06)] dark:shadow-[0px_2px_2px_0_rgba(255,255,255,0.06)]">
            <div className="w-20 h-20 relative rounded-md overflow-hidden mx-5">
                <Image src={image} alt="product" layout="fill" objectFit="cover" />
            </div>

            <div className="flex flex-col flex-1 h-full">
                <div className="flex justify-between flex-1">
                    <span className="font-semibold text-[10px]">{name}</span>

                    <span className="font-normal dark:text-[#6A8D92] text-[#4D4D4D] text-[9px]">
                        {id}
                    </span>
                </div>
                <div>
                    <span className="text-xs font-semibold dark:text-[#6A8D92] text-[#493548]">
                        ${price}
                    </span>

                    <div className="flex items-center justify-end gap-8">
                        <div className="flex items-center gap-10 px-3 border rounded-md h-9">
                            {/* decrease quantity button */}
                            <button type="button" onClick={() => decreaseQty()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9.5"
                                    height="2"
                                    viewBox="0 0 9.5 2"
                                >
                                    <rect
                                        id="_-"
                                        data-name="-"
                                        width="9.5"
                                        height="2"
                                        fill="#d2d2d2"
                                    />
                                </svg>
                            </button>

                            {/* product quantity */}
                            <span className="font-bold text-[#FF7020] text-[10px]">{quantity}</span>

                            {/* increase quantity button */}
                            <button type="button" onClick={() => increaseQty()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="8.784"
                                    height="9.045"
                                    viewBox="0 0 8.784 9.045"
                                >
                                    <path
                                        id="_"
                                        data-name="+"
                                        d="M3788.783,558.443v3.69h3.5v1.647h-3.5v3.708h-1.8V563.78H3783.5v-1.647h3.483v-3.69Z"
                                        transform="translate(-3783.5 -558.443)"
                                        fill="#d2d2d2"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* delete icon */}
                        <button type="button" onClick={() => removeFromCart()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="28"
                                viewBox="0 0 30 28"
                            >
                                <g id="delete" transform="translate(-4789 -286)">
                                    <g
                                        id="background"
                                        transform="translate(4789 286)"
                                        fill="none"
                                        stroke="#d8d8d8"
                                        strokeWidth="0.5"
                                    >
                                        <rect width="30" height="28" rx="6" stroke="none" />
                                        <rect
                                            x="0.25"
                                            y="0.25"
                                            width="29.5"
                                            height="27.5"
                                            rx="5.75"
                                            fill="none"
                                        />
                                    </g>
                                    <path
                                        id="Vector"
                                        d="M4806.469,305.5h-4.938a.928.928,0,0,1-.66-.28,1.056,1.056,0,0,1-.3-.687l-.426-7.283h7.714l-.426,7.283a1.058,1.058,0,0,1-.3.687A.926.926,0,0,1,4806.469,305.5Zm1.708-8.937h-8.357a.311.311,0,0,1-.227-.1.35.35,0,0,1-.094-.243v-.688a.355.355,0,0,1,.094-.243.312.312,0,0,1,.227-.1h2.411l.188-.4a.5.5,0,0,1,.177-.21.466.466,0,0,1,.253-.076h2.3a.454.454,0,0,1,.254.077.5.5,0,0,1,.178.209l.189.4h2.41a.314.314,0,0,1,.228.1.355.355,0,0,1,.094.243v.688a.349.349,0,0,1-.094.243A.307.307,0,0,1,4808.178,296.562Z"
                                        fill="#a4a4a4"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartProduct;
