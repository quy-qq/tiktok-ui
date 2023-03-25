import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { home } from '~/services/HomePageService';
const cx = classNames.bind(styles);
function Home() {
    const [posts, setPosts] = useState({ items: [], hasMore: true });
    const [currentPage, setCurrentPage] = useState(1);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const getPosts = async () => {
            if (!posts.hasMore) return;

            try {
                const res = await home(currentPage);
                const newPosts = res.data.data.nodes.concat(posts.items);
                setTimeout(() => {
                    setPosts((pre) => ({
                        ...pre,
                        items: res.data.data.nodes.concat(posts.items),
                        hasMore: newPosts.length < res.data.data.itemCount,
                    }));
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();
    }, [currentPage]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenHeight(window.innerHeight);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setScreenHeight(window.innerHeight);
            });
        };
    }, []);
    return (
        <div className={cx('wrapper')} style={{ height: screenHeight, overflow: 'auto' }} id="scrollableDiv">
            <InfiniteScroll
                dataLength={posts.items.length}
                next={() => {
                    setCurrentPage(currentPage + 1);
                }}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>⛔⛔⛔Hết rồi fen, Kéo lên đi⛔⛔⛔</b>
                    </p>
                }
                hasMore={posts.hasMore}
                loader={<FontAwesomeIcon icon={faSpinner} />}
                scrollableTarget="scrollableDiv"
            >
                {posts?.items?.map((post, index) => (
                    <div key={index}>
                        <div className={cx('post-user')}>
                            <img src={post.user.avatar} alt="text" width="40" height="40" />
                            <div className={cx('title-username')}>
                                <p>{post.user.username}</p>
                                <div>{post.title}</div>
                                <div className={cx('video')}>
                                    <video width="300" height="600" controls loop>
                                        <source src={post.video} />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default Home;
