import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import SinglePost from '../../components/SinglePost';
import relatedPosts from '../../data/relatedPosts';

const Post = () => {
    const router = useRouter();
    const { postTitle } = router.query;

    console.log({ postTitle });

    const texts = [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed dicta maiores, eos culpa.',
        'Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis, rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde magni.',
        'Nulla nesciunt eligendi ratione, atque, hic, ullam suscipit quos enim vitae fugiat ducimus, dolore delectus iste id culpa. Ducimus, iste magnam sed reprehenderit architecto perferendis odio voluptas molestiae quidem ab numquam debitis, dolorem incidunt, tempore a quod qui nobis. Voluptates!',
        'Blanditiis, ipsum sed odio reprehenderit sequi ut vitae, dolor minima ab! Architecto nesciunt nemo sint est aspernatur fugit consequatur, magnam suscipit asperiores illo eum repellendus officia dolorem, molestiae commodi nam voluptatem quis quia vel cumque quos, aliquam ex incidunt sapiente!',
        'Suscipit, officiis, vero! Perferendis accusamus quos voluptatum culpa, provident maiores! Illo itaque ullam fugit molestiae, eaque accusamus impedit autem numquam. Placeat molestias tempore eaque ipsam vel voluptatum velit enim quam iusto maxime delectus, sint sapiente ea, quo excepturi nisi! Quia.',
        'Dolores debitis excepturi maxime earum sapiente totam, quos dolore inventore tempore illum. Dolores explicabo sed amet aut atque, facere aliquid repudiandae quod possimus quo hic similique et voluptates fugit iure dolore quam ipsa numquam assumenda corporis? Dignissimos expedita fugit sapiente.',
        'Cupiditate ut, aspernatur labore obcaecati, eveniet aut velit nulla facere suscipit est recusandae vel error itaque earum doloremque hic necessitatibus dignissimos dolores libero laudantium ducimus! Rem dolorem ratione officia et, fugit non, fuga suscipit eos veritatis enim perspiciatis, magni sit!',
    ];

    return (
        <div>
            <Head>
                <title>Devmite.com</title>
                <link rel="icon" href="/devicon.ico" />
            </Head>

            <SinglePost
                imgSrc="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                title="News Needs to Meet Its Audiences Where They Are"
                texts={texts}
                author="Dave Rogas"
                postCategory="Food"
                date="31 January 2022"
                authorUrl="#"
                categoryUrl="#"
                relatedPosts={relatedPosts}
            />
        </div>
    );
};

export default Post;
