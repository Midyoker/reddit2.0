import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Entity {
    id: ID!
    name: String!
    createdAt: String!
  }

  type Query {
    entity(id: ID!): Entity
  }
`;


export const GET_ALL_VOTES_BY_POST_ID = gql`
    query MyQuery($post_id: ID!) {
        getVotesByPostId(post_id: $post_id) {
            created_at,
            id,
            post_id,
            upvote,
            username,
        }
    }
`;


export const GET_POST_BY_POST_ID = gql`
    query MyQuery($id: ID!) {
        getPostListByPostId(id: $id) {
            body,
            comments {
                created_at,
                id,
                post_id,
                text,
                username,
            }
            created_at,
            id,
            image,
            subreddit {
                created_at,
                id,
                topic,
            }
            title,
            subreddit_id,
            username,
            votes {
                created_at,
                id,
                post_id,
                upvote,
                username,
            }
        }
    }
`;

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
            comments {
                id,
                post_id,
                text,
                username,
            }
            subreddit {
                created_at,
                id,
                topic,
            }
            votes {
                id,
                post_id,
                username,
                created_at,
                upvote,
          
            }
        }
    }
`;
export const GET_ALL_POSTS_BY_TOPIC = gql`
    query MyQuery ($topic: String!) {
        getPostListByTopic(topic: $topic) {
            body,
            title,
            username,
            subreddit_id,
            created_at,
            image,
            id,
            comments {
                created_at,
                id,
                post_id,
                text,
                username,
            }
            subreddit {
                created_at,
                id,
                topic,
            }
            votes {
                id,
                post_id,
                username,
                created_at,
                upvote,
          
            }
        }
    }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`;
