import styles from "./PostCard.module.scss"
import {PostCardProps} from "../../types/PostCard";

function PostCard({post, onClick}: PostCardProps) {
    const {
        title,
        text,
        tags,
        autor,
        img,
        img_2x,
        date,
        views
    } = post;


    return (
        <article
            className={styles.postCard}
            onClick={onClick}
        >
            <img
                src={img}
                srcSet={`${img} 1x, ${img_2x} 2x`}
                alt={title}
                loading="lazy"
                className={styles.postCard__image}
            />
            <span className={styles.postCard__tag}>{tags}</span>
            <h3 className={styles.postCard__title}>{title}</h3>
            <div className={styles.postCard__meta}>
                <span>{autor}</span>
                <span>{date}</span>
                <span>{views} Views</span>
            </div>
            <p className={styles.postCard__text}>{text}</p>
        </article>
    );
}

export default PostCard