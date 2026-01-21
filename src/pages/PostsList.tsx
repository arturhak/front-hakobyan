import {useEffect, useState} from "react";
import PostCard from "../components/cards/PostCard";
import styles from "./PostsList.module.scss"
import {Post} from "../types/PostCard";
import PostCardInfoModal from "../modals/PostCardInfoModal";
import {PostsListProps} from "../types/PropsType";


function PostsList({ searchText }: PostsListProps) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL!)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.error("Error", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const openInfoModal = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };


    const filteredPosts = posts.filter(
        (post:Post) =>
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.text.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className={styles.postsList}>
                {filteredPosts.map((post, index) => (
                    <PostCard
                        key={index}
                        post={post}
                        onClick={() => openInfoModal(post)}
                    />
                ))}
            </section>

            <PostCardInfoModal
                post={selectedPost}
                open={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}

export default PostsList
