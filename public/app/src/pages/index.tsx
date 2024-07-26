import React from 'react';
import { Layout } from '../shared/layout';
import Header from '../shared/components/header/components/Header';
import PostFilters, {
  PostFilterType
} from '../modules/forum/components/posts/filters/components/PostFilters';
import { Post } from '../modules/forum/models/Post';
import { DateUtil } from '../shared/utils/DateUtil';
import { PostRow } from '../modules/forum/components/posts/postRow';
import { ProfileButton } from '../modules/users/components/profileButton';
import { UsersState } from '../modules/users/redux/states';
//@ts-ignore
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersOperators from '../modules/users/redux/operators';
import * as forumOperators from '../modules/forum/redux/operators';
import { User } from '../modules/users/models/user';
import withLogoutHandling from '../modules/users/hocs/withLogoutHandling';
import { ForumState } from '../modules/forum/redux/states';
import withVoting from '../modules/forum/hocs/withVoting';
import { Link } from 'react-router-dom';

interface IndexPageProps
  extends usersOperators.IUserOperators,
    forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
  location: any;
}

interface IndexPageState {
  activeFilter: PostFilterType;
}

interface PostWithHighlight extends Post {
  shouldHighlight: boolean;
}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps) {
    super(props);

    this.state = {
      activeFilter: 'POPULAR'
    };
  }

  onClickJoinButton() {}

  setActiveFilter(filter: PostFilterType) {
    this.setState({
      ...this.state,
      activeFilter: filter
    });
  }

  getPosts() {
    const activeFilter = this.state.activeFilter;

    if (activeFilter === 'NEW') {
      this.props.getRecentPosts();
    } else if (activeFilter === 'POPULAR') {
      this.props.getPopularPosts();
    } else if (activeFilter === 'UNPOPULAR') {
      this.props.getUnpopularPosts();
    }
  }

  onFilterChanged(prevState: IndexPageState) {
    const currentState: IndexPageState = this.state;
    if (prevState.activeFilter !== currentState.activeFilter) {
      this.getPosts();
    }
  }

  setActiveFilterOnLoad() {
    const showNewFilter = (this.props.location.search as string).includes(
      'show=new'
    );
    const showPopularFilter = (this.props.location.search as string).includes(
      'show=popular'
    );
    const showUnpopularFilter = (this.props.location.search as string).includes(
      'show=unpopular'
    );

    let activeFilter = this.state.activeFilter;

    if (showNewFilter) {
      activeFilter = 'NEW';
    }

    this.setState({
      ...this.state,
      activeFilter
    });
  }

  getPostsFromActiveFilterGroup(): Post[] {
    if (this.state.activeFilter === 'NEW') {
      return this.props.forum.recentPosts;
    } else if (this.state.activeFilter === 'POPULAR') {
      return this.props.forum.popularPosts;
    } else return this.props.forum.unpopularPosts;
  }

  getHighlightInfoRecent(posts: Post[]): PostWithHighlight[] {
    const isLoggedIn = this.props.users.isAuthenticated;
    const highestComments = Math.max(...posts.map((p) => p.numComments));
    return posts.map((post) => ({
      ...post,
      shouldHighlight: isLoggedIn && post.numComments < highestComments / 3
      
    }));
  }


  getHighlightInfoPopular(posts: Post[]): PostWithHighlight[] {
    const isLoggedIn = this.props.users.isAuthenticated;
    const highestComments = Math.max(...posts.map((p) => p.numComments));
    return posts.map((post) => ({
      ...post,
      shouldHighlight: isLoggedIn && post.numComments > highestComments * 2 / 3
    }));
  }

  getHighlightInfoUnpopular(posts: Post[]): PostWithHighlight[] {
    const isLoggedIn = this.props.users.isAuthenticated;
    const highestComments = Math.max(...posts.map((p) => p.numComments));
    return posts.map((post) => ({
      ...post,
      shouldHighlight: isLoggedIn && post.numComments > highestComments / 3 && post.numComments < highestComments * 2 / 3
    }));
  }

  componentDidUpdate(prevProps: IndexPageProps, prevState: IndexPageState) {
    this.onFilterChanged(prevState);
  }

  componentDidMount() {
    this.setActiveFilterOnLoad();
    this.getPosts();
  }

  render() {
    const { activeFilter } = this.state;
    let posts = this.getPostsFromActiveFilterGroup();
    if (activeFilter === 'NEW') {
      posts = this.getHighlightInfoRecent(posts);
    } 
    if (activeFilter === 'POPULAR'){
      posts = this.getHighlightInfoPopular(posts);
    }
    if (activeFilter === 'UNPOPULAR'){
      posts = this.getHighlightInfoUnpopular(posts);
    }
    const username = this.props.users.isAuthenticated
      ? (this.props.users.user as User).username
      : '';

    return (
      <Layout>
        <div className="header-container flex flex-row flex-center flex-even">
          <Header
            title="Domain-Driven Designers"
            subtitle="Where awesome Domain-Driven Designers are made"
          />
          <ProfileButton
            isLoggedIn={this.props.users.isAuthenticated}
            username={username}
            onLogout={() => this.props.logout()}
          >
            <Link to={`/profile/${username}`}>{username}</Link>
          </ProfileButton>
        </div>
        <br />
        <br />

        <PostFilters
          activeFilter={activeFilter}
          onClick={(filter) => this.setActiveFilter(filter)}
        />

        {posts.map((p, i) => (
          <PostRow
            key={i}
            shouldHighlight={p.shouldHighlight}
            onUpvoteClicked={() => this.props.upvotePost(p.slug)}
            onDownvoteClicked={() => this.props.downvotePost(p.slug)}
            isLoggedIn={this.props.users.isAuthenticated}
            activeFilter={this.state.activeFilter}
            {...p}
          />
        ))}
      </Layout>
    );
  }
}

function mapStateToProps({
  users,
  forum
}: {
  users: UsersState;
  forum: ForumState;
}) {
  return {
    users,
    forum
  };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators,
      ...forumOperators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(withLogoutHandling(withVoting(IndexPage)));
