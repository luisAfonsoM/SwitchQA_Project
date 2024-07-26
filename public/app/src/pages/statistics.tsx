import React from 'react';
import { Layout } from '../shared/layout';
import Header from '../shared/components/header/components/Header';
import { UsersState } from '../modules/users/redux/states';
import { BackNavigation } from '../shared/components/header';
//@ts-ignore
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'; // Import withRouter from react-router-dom
import * as usersOperators from '../modules/users/redux/operators';
import * as forumOperators from '../modules/forum/redux/operators';
import withLogoutHandling from '../modules/users/hocs/withLogoutHandling';
import { ForumState } from '../modules/forum/redux/states';
import { RouteComponentProps } from 'react-router-dom';
import { usersService } from '../modules/users/services';
import { ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import { stat } from 'fs';

interface StatisticsPageProps
  extends usersOperators.IUserOperators,
    forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
  history: any;
}

export class StatisticsPage extends React.Component<
  StatisticsPageProps & RouteComponentProps,
  any
> {
  constructor(props: StatisticsPageProps & RouteComponentProps) {
    super(props);

    this.state = {
      dateBox1: { selectedDate: '', result: null },
      dateBox2: { selectedDate: '', result: null },
      dateBox3: { selectedDate: '', result: null },
      dateBox4: { selectedDate: '', result: null },
      dateBox5: { selectedDate: '', result: null },
      dateBox6: { selectedDate: '', result: null }
    };
  }

  handleDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    boxName: string
  ) => {
    const { value } = event.target;
    this.setState((prevState: any) => ({
      [boxName]: { ...prevState[boxName], selectedDate: value, result: null }
    }));
  };

  handleSubmit = async (boxName: string) => {
    const { selectedDate } = this.state[boxName];
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(selectedDate)) {
      toast.error(
        'Inserted date is not valid, please refresh and try again 😎'
      );
      return;
    }
    const result = await this.getDataForBox(boxName, selectedDate);
    if (result) {
      this.setState((prevState: any) => ({
        [boxName]: {
          ...prevState[boxName],
          result: result === null ? 'No data found' : result
        }
      }));
    }
  };

  handleRefresh = (boxName: string) => {
    this.setState((prevState: any) => ({
      [boxName]: { ...prevState[boxName], selectedDate: '', result: null }
    }));
  };

  getDataForBox = async (boxName: string, selectedDate: string) => {
    switch (boxName) {
      case 'dateBox1':
        return this.getAverageComments(selectedDate);
      case 'dateBox2':
        return this.getAveragePosts(selectedDate);
      case 'dateBox3':
        return this.getpostMoreComments(selectedDate);
      case 'dateBox4':
        return this.getTopMembers(selectedDate);
      case 'dateBox5':
        return this.getnoActivityMembers(selectedDate);
      case 'dateBox6':
        return this.getPostWithNoCommentsPercentage(selectedDate);
      default:
        return null;
    }
  };

  getStatisticsByDate(selectedDate: string, statType: string) {
    return usersService.getStatistics(selectedDate, statType);
  }

  getAverageComments = async (selectedDate: string) => {
    const statType = 'averageComments';
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        console.log("this is result", result);
        if (
          result.averageCommentsByDate[0] &&
          result.averageCommentsByDate[0].average_comments_per_post != null
        ) {
          return result.averageCommentsByDate[0].average_comments_per_post;
        } else {
          return 'No data found';
        }
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  };

  getAveragePosts = async (selectedDate: string) => {
    const statType:string = "averagePosts";
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        if (result.averagePostsByDate[0].average_posts_per_member != null) {
          return result.averagePostsByDate[0].average_posts_per_member;
        } else {
          return 'No data found';
        }
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  };

  getpostMoreComments = async (selectedDate: string) => {
    const statType:string = "mostCommentedPost";
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        if (
          result.getPostTitleWithMostCommentsOnDate &&
          result.getPostTitleWithMostCommentsOnDate.title
        ) {
          return result.getPostTitleWithMostCommentsOnDate.title;
        } else {
          return 'No data found';
        }
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  };

  getTopMembers = async (selectedDate: string) => {
    const statType:string = "topThreeCommenters";
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        if (
          !result.getTopThreeByDate.usernameOne ||
          !result.getTopThreeByDate.usernameTwo ||
          !result.getTopThreeByDate.usernameThree
        ) {
          return 'No comments or insufficient commenting members on the selected day';
        }
        result = [
          result.getTopThreeByDate.usernameOne.toString(),
          result.getTopThreeByDate.usernameTwo.toString(),
          result.getTopThreeByDate.usernameThree.toString()
        ].join(', ');
        return result;
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  };

  /**
   *
   * @param selectedDate
   * @returns Users without any comment or post in a specific date.
   */
  getnoActivityMembers = async (selectedDate: string) => {
    const statType:string = "usersWithoutCommentsAndPosts";
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        //return result.getUserWithoutCP[0].username;
        const usernames = result.getUserWithoutCommentsandPostsbyDate.map(
          (user: any) => user.username
        );
        const formattedUsernames = usernames.join(', ');
        return formattedUsernames;
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  };
  getPostWithNoCommentsPercentage = async (selectedDate: string) => {
    const statType:string = "postsWithoutCommentsPercentage";
    return this.getStatisticsByDate(selectedDate, statType)
      .then((result: any) => {
        console.log("this is result from postsWithoutCommentsPercentage", result);
        if (
          result.percentageOfPostsWithoutCommentsByDate &&
          result.percentageOfPostsWithoutCommentsByDate
            .percentage_without_comments != null
        ) {
          return result.percentageOfPostsWithoutCommentsByDate
            .percentage_without_comments;
        } else {
          return 'No data found';
        }
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return 'Error fetching data';
      });
  };

  render() {
    return (
      <Layout>
        <BackNavigation text="Back to all discussions" to="/" />
        <div className="header-container flex flex-row flex-center flex-even"></div>
        <div className="header-container flex flex-row flex-center flex-even">
          <Header
            title="Domain-Driven Designers"
            subtitle="Where awesome Domain-Driven Designers are made"
          />
        </div>
        <div className="member-profile">
          {Array.from(Array(6).keys()).map((boxIndex) => {
            const boxName = `dateBox${boxIndex + 1}`;
            const inputId = `dateInput_${boxIndex}`;
            const submitButtonId = `submitButton_${boxIndex}`;
            const refreshButtonId = `refreshButton_${boxIndex}`;
            const resultId = `result_${boxIndex}`;
            let labelText = '';
            switch (boxIndex) {
              case 0:
                labelText = 'Average Comments on a Specific Date';
                break;
              case 1:
                labelText = 'Average of posts on a Specific Date';
                break;
              case 2:
                labelText = 'The Post with more comments on a Specific Date';
                break;
              case 3:
                labelText =
                  'The top 3 members that published more comments on a Specific Date';
                break;
              case 4:
                labelText =
                  'The members without any activity (posts and comments) on a Specific Date';
                break;
              case 5:
                labelText =
                  'The percentage of posts without any comments on a Specific Date';
                break;
              default:
                labelText = 'Select a date';
            }

            return (
              <div key={boxIndex}>
                <h4>{labelText}</h4>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  value={this.state[boxName].selectedDate}
                  onChange={(event) => this.handleDateChange(event, boxName)}
                  id={inputId}
                />
                <button
                  onClick={() => this.handleSubmit(boxName)}
                  id={submitButtonId}
                >
                  Submit
                </button>
                <button
                  onClick={() => this.handleRefresh(boxName)}
                  id={refreshButtonId}
                >
                  Refresh
                </button>
                <p id={resultId}>Result: {this.state[boxName].result}</p>
              </div>
            );
          })}
        </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapActionCreatorsToProps
  )(withLogoutHandling(StatisticsPage))
);
