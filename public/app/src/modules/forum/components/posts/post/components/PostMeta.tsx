import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Post } from '../../../../models/Post';
import '../styles/PostMeta.sass';

interface PostMetaProps extends Post {
  includeLink?: boolean;
  activeFilter?: string;
  isLoggedIn?: boolean;
}

const PostMeta: React.FC<PostMetaProps> = (props) => {
  const postAge = moment(props.createdAt);
  const postAgeDif = moment().diff(postAge, 'days');

  let colorClass = '';
  if (props.isLoggedIn) {
    if (props.activeFilter === 'NEW' && postAgeDif >= 3 && postAgeDif < 7) {
      colorClass = 'yellow-text';
    } else if (props.activeFilter === 'POPULAR' && postAgeDif > 5) {
      colorClass = 'red-text';
    } else if (props.activeFilter === 'UNPOPULAR' && postAgeDif < 2) {
      colorClass = 'green-text';
    }
  }

  const showCommentInvite =
    props.isLoggedIn &&
    props.activeFilter === 'POPULAR' &&
    props.numComments === 0;

  return (
    <div className="post-row-content">
      {props.includeLink === false ? (
        ''
      ) : (
        <Link to={`/discuss/${props.slug}`} className="title">
          "{props.title}"
          {props.link ? <span className="link">[link]</span> : ''}
        </Link>
      )}
      <div className="post-row-meta">
        <span className={colorClass}>{moment(props.createdAt).fromNow()}</span>{' '}
        |{`by `}
        <Link to={`/member/${props.postAuthor}`}>{props.postAuthor}</Link> |
        {`${props.numComments} comments`} |
        {showCommentInvite && (
          <span>
            <Link
              to={`/discuss/${props.slug}`}
              className="comment-link"
            >
              <span className="purple-text">Please comment me</span>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default PostMeta;
