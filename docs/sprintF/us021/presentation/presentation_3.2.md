## Analysis
 
The first three user stories, was about the background color based on the quantity of the commnent in the most commented post.
 
[US021](../../us021/01.requeriments-engineering/readme.md)
[US022](../../us022/01.requirements-engeneering/readme.md)
[US027](../../us027/01.requirements-engeneering/readme.md)
 
### Development
 
The implementation in the front end is given due the following code in the PostRow component:
  
```Typescript
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
```
The following code is responsible for the logic part, it´s on the index on pages component:
 
```Typescript
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
 
         <PostRow
            key={i}
            shouldHighlight={p.shouldHighlight}
            ...
        />
 
           
```
 
The part that colors our front end is on the PostMeta.Sass defining a class for each of the functionality
 
```Typescript
.highlight-Recent-post
  background-color: red
  border-radius: 8px
  padding: 10px
 
.highlight-Popular-post
  background-color: green
  border-radius: 8px
  padding: 10px
 
.highlight-UnPopular-post
  background-color: yellow
  border-radius: 8px
  padding: 10px
```
