import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Entity {
    id: ID!
    name: String!
    createdAt: String!
  }

  type Mutation {
    createEntity(name: String!): Entity
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $upvote: Boolean!, $username: String!) {
    insertVote(post_id: $post_id, upvote: $upvote, username: $username) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $text: String!, $username: String!) {
    insertComment(post_id: $post_id, text: $text, username: $username) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

export const ADD_POST = gql`
mutation MyMutation(
  $body: String!
  $image: String!
  $subreddit_id: ID="default_value" 
  $title: String!
  $username: String!
) {
  insertPost(
    body: $body
    image: $image
    subreddit_id: $subreddit_id
    title: $title
    username: $username
  ) {
    body
    created_at
    id
    image
    subreddit_id
    title
    username
  }
}
`;
export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;