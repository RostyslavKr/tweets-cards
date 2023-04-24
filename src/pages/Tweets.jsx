import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'components/Card/Card';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { fetchUsers } from '../services/getUsers';
import { fetchFollowUsers } from 'services/getFollowUsers';
import css from '../pages/Tweets.module.css';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [currentUsersLength, setCurrentUsersLength] = useState(null);
  const [selected, setSelected] = useState('all');
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      fetchUsers(page).then(data => setUsers(data));
      setFirstLoad(false);
      return;
    }
    if (selected === 'all') {
      fetchUsers(page).then(data => {
        setCurrentUsersLength(data.length);
        if (data.length !== 0) {
          setUsers(prevUsers => {
            return [...prevUsers, ...data];
          });
        }
      });
    }
    if (selected === 'follow') {
      fetchFollowUsers(page, false).then(data => {
        setCurrentUsersLength(data.length);
        if (data.length !== 0) {
          setUsers(prevUsers => {
            return [...prevUsers, ...data];
          });
        }
      });
    }
    if (selected === 'followings') {
      fetchFollowUsers(page, true).then(data => {
        setCurrentUsersLength(data.length);
        if (data.length !== 0) {
          setUsers(prevUsers => {
            return [...prevUsers, ...data];
          });
        }
      });
    }
  }, [page, selected, firstLoad]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleStatusFilter = status => {
    setUsers([]);
    setPage(1);
    setCurrentUsersLength(null);
    setSelected(status);
  };

  return (
    <div>
      <FilterUsers selected={selected} filter={handleStatusFilter} />
      <NavLink to="/">
        <button className={css.btnBack}>Back</button>
      </NavLink>
      <ul className={css.listTweets}>
        {users &&
          users.map(({ id, followers, avatar, user, tweets, status }) => (
            <Card
              key={id}
              user={user}
              followers={followers}
              avatar={avatar}
              tweets={tweets}
              id={id}
              status={status}
            />
          ))}
      </ul>
      {currentUsersLength !== 0 && (
        <button
          className={css.btnLoadMore}
          type="button"
          onClick={() => onLoadMore()}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Tweets;
