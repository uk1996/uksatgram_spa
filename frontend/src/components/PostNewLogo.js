import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const PostNewLogo = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/posts/new/');
    };

    return (
        <Button type="text" style={{ padding: '0' }} onClick={handleClick}>
            <svg
                aria-label="새로운 게시물"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
            >
                <path
                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                ></path>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="6.545"
                    x2="17.455"
                    y1="12.001"
                    y2="12.001"
                ></line>
                <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="12.003"
                    x2="12.003"
                    y1="6.545"
                    y2="17.455"
                ></line>
            </svg>
        </Button>
    );
};

export default PostNewLogo;