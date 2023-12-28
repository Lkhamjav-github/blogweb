import React from "react";
export default Posts = ({ postsToRender }) => {
    return (
        <ul>
            {postsToRender.map((post, index) => (
                <li key={index}>
                    <strong>{post.id}</strong>
                    &nbsp;{post.title}
                </li>
            ))}
        </ul>
    );
};
