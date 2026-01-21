import React from 'react';
import { Modal } from 'antd';
import { Post } from '../types/PostCard';

interface Props {
    post: Post | null;
    open: boolean;
    onClose: () => void;
}

function PostCardInfoModal({ post, open, onClose }: Props) {
    if (!post) return null;

    return (
        <Modal
            title={post.title}
            open={open}
            onCancel={onClose}
            onOk={onClose}
            closable={{ 'aria-label': 'Close' }}
            footer={false}
        >
            <img
                src={post.img}
                srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
                alt={post.title}
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <p><strong>Author:</strong> {post.autor}</p>
            <p><strong>Date:</strong> {post.date}</p>
            <p><strong>Views:</strong> {post.views}</p>
            <p>{post.text}</p>
        </Modal>
    );
}

export default PostCardInfoModal;
