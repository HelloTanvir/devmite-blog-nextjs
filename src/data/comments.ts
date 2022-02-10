export interface CommentsType {
    image: string;
    name: string;
    time: string;
    text: string;
    hasReply: boolean;
    replies?: CommentsType[];
}

const comments: CommentsType[] = [
    {
        image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
        name: 'Jean Doe',
        time: 'JANUARY 9, 2018 AT 2:21PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        hasReply: false,
    },
    {
        image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
        name: 'Jean Doe',
        time: 'JANUARY 9, 2018 AT 2:22PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        hasReply: true,
        replies: [
            {
                image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
                name: 'Jean Doe',
                time: 'JANUARY 9, 2018 AT 2:23PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                hasReply: true,
                replies: [
                    {
                        image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
                        name: 'Jean Doe',
                        time: 'JANUARY 9, 2018 AT 2:24PM',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                        hasReply: false,
                    },
                ],
            },
        ],
    },
    {
        image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
        name: 'Jean Doe',
        time: 'JANUARY 9, 2018 AT 2:25PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        hasReply: true,
        replies: [
            {
                image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
                name: 'Jean Doe',
                time: 'JANUARY 9, 2018 AT 2:26PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
                hasReply: false,
            },
        ],
    },
    {
        image: 'https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp',
        name: 'Jean Doe',
        time: 'JANUARY 9, 2018 AT 2:27PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        hasReply: false,
    },
];

export default comments;
