import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
    query MyQuery {
        getPostList {
            body,
            id,
            title,
            created_at,
            image,
            username,
            subreddit_id,
        }
    }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`;
