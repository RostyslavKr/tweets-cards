import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchUsers from './services/getUsers';
import { AppBar } from './components/AppBar';
import { Home } from './components/Home';
import { Card } from './components/Card';
function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      fetchUsers(page).then(data => setUsers(data));
      return;
    }
    if (page > 1) {
      fetchUsers(page).then(data => {
        if (data.length !== 0) {
          setUsers(prevUsers => {
            console.log(prevUsers);
            return [...prevUsers, ...data];
          });
        }
      });
    } else {
      toast.warn('There are no tweets!!!', { autoClose: 8000 });
    }
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <AppBar />
      <Home />
      <ul>
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
      <button type="button" onClick={() => onLoadMore()}>
        Load More
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
