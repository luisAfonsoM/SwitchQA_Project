import React from 'react';
import '../styles/PostRow.sass';
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
  activeFilter?: string;
  shouldHighlight?: boolean;
}

const PostRow: React.FC<PostRowProps> = (props) => (
<div className={`post-row ${
  (props.shouldHighlight && props.activeFilter === 'POPULAR') ? 'highlight-Popular-post' :
  (props.shouldHighlight && props.activeFilter === 'UNPOPULAR') ? 'highlight-UnPopular-post' :
  (props.shouldHighlight ? 'highlight-Recent-post' : '')}`}>
    <div className="post-row">
    <Points
      onUpvoteClicked={() => props.onUpvoteClicked()}
      onDownvoteClicked={() => props.onDownvoteClicked()}
      points={props.points}
      isLoggedIn={props.isLoggedIn}
    />
    <PostMeta activeFilter={props.activeFilter} {...props} />
  </div>
  </div>
);

export default PostRow;
