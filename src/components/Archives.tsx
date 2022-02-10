import React from 'react';

const Archives = () => {
    const stats = [
        {
            monthName: 'january',
            postCount: 10,
        },
        {
            monthName: 'february',
            postCount: 30,
        },
        {
            monthName: 'march',
            postCount: 10,
        },
        {
            monthName: 'april',
            postCount: 5,
        },
        {
            monthName: 'may',
            postCount: 10,
        },
        {
            monthName: 'june',
            postCount: 7,
        },
        {
            monthName: 'july',
            postCount: 10,
        },
        {
            monthName: 'august',
            postCount: 9,
        },
        {
            monthName: 'september',
            postCount: 15,
        },
        {
            monthName: 'october',
            postCount: 10,
        },
        {
            monthName: 'november',
            postCount: 12,
        },
        {
            monthName: 'december',
            postCount: 10,
        },
    ];

    return (
        <div className="flex flex-col gap-[30px]">
            {/* section title */}
            <h2 className="text-xl inline-flex max-w-max mb-5 border-b border-[#222] capitalize">
                Archives
            </h2>

            {/* archives */}
            <div className="flex flex-col divide-y gap-[10px]">
                {stats.map((stat, index) => (
                    <div
                        key={stat.monthName}
                        className={`${
                            index === 0 ? '' : 'pt-[10px]'
                        } flex items-center justify-between text-[15px] font-bold tracking-wide`}
                    >
                        <span className="capitalize text-gray-700 dark:text-gray-500">
                            {stat.monthName}
                        </span>
                        <span className="text-[#ccc]">({stat.postCount})</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Archives;
