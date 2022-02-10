import Head from 'next/head';

const Archive = () => {
    const tableHeader = ['month', 'posts'];
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
        <div>
            <Head>
                <title>Devmite.com | Archive</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

            <div className="container">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        <div className="overflow-hidden shadow-sm sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-700">
                                    <tr>
                                        {tableHeader.map((header) => (
                                            <th
                                                key={header}
                                                scope="col"
                                                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {stats.map((stat, index) => (
                                        <tr
                                            key={stat.monthName}
                                            className={`border-b ${
                                                index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                                            }`}
                                        >
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                {stat.monthName}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                {stat.postCount}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Archive;
