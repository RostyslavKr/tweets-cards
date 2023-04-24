import { useState, useEffect } from 'react';
import putUsers from '../../services/putUser';
import css from '../Card/Card.module.css';
import clsx from 'clsx';

export const Card = ({ id, followers, avatar, user, tweets, status }) => {
  const [statusFollow, setStatusFollow] = useState(status);
  const [followersCount, setFollowers] = useState(followers);
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      return;
    }
    putUsers(id, followersCount, statusFollow);
  }, [statusFollow, firstMount, followersCount, id]);

  const toggleStatusFollow = () => {
    setStatusFollow(!statusFollow);
    setFirstMount(false);
    if (statusFollow) {
      setFollowers(prevFollowers => {
        return prevFollowers - 1;
      });
    } else {
      setFollowers(prevFollowers => {
        return prevFollowers + 1;
      });
    }
  };

  const changeFollowers = number => {
    const numberArr = [number];
    const digits = numberArr.toString().split('');
    if (digits.length === 6) {
      digits.splice(3, 0, ',');
      return digits.join('');
    }
    return number;
  };

  return (
    <li className={css.item}>
      <div className={css.wrapperItem}></div>
      <div className={css.wrapperUserDescr}>
        <div className={css.wrapperImage}>
          <img className={css.imageAvatar} src={avatar} alt={user} />
        </div>
        <h3 className={css.tweets}>{tweets} Tweets</h3>
        <h3 className={css.followers}>
          {changeFollowers(followersCount)} Followers
        </h3>
        <button
          className={clsx(
            `${css.btnFollow}`,
            statusFollow && `${css.following}`
          )}
          type="button"
          onClick={() => toggleStatusFollow()}
        >
          {statusFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};
