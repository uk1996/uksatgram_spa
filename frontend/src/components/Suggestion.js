import React from 'react';
import { Button, Avatar } from 'antd';
import './Suggestion.scss';
import { useUrlContext } from '../utils/UrlProvider';

const Suggestion = ({ username, avatar_url, is_follow, onFollowUser }) => {
    const imgUrl = useUrlContext().defaulturl + avatar_url;

    return (
        <div className="suggestion">
            <div
                className="avatar"
                onClick={() => {
                    window.location.replace(`accounts/profile/${username}`);
                }}
                style={{ cursor: 'pointer' }}
            >
                <Avatar size="small" icon={<img src={imgUrl} alt="" />} />
            </div>
            <div
                className="username"
                onClick={() => {
                    window.location.replace(`accounts/profile/${username}`);
                }}
                style={{ cursor: 'pointer' }}
            >
                {
                    <span style={{ color: 'black', opacity: '0.9' }}>
                        {username}
                    </span>
                }
            </div>

            <div className="action">
                {is_follow && (
                    <span style={{ opacity: '0.5' }}>following...</span>
                )}
                {!is_follow && (
                    <Button size="small" onClick={() => onFollowUser(username)}>
                        Follow
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Suggestion;
