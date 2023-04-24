import css from './FilterIsers.module.css';
import clsx from 'clsx';

export const FilterUsers = ({ selected = 'all', filter }) => {
  return (
    <div className={css.wrapperFilter}>
      <button
        type="button"
        className={clsx(css.btnChoose, {
          [css.isSelected]: selected === 'all',
        })}
        onClick={() => filter('all')}
      >
        ALL
      </button>
      <button
        type="button"
        className={clsx(css.btnChoose, {
          [css.isSelected]: selected === 'follow',
        })}
        onClick={() => filter('follow')}
      >
        FOLLOW
      </button>
      <button
        type="button"
        className={clsx(css.btnChoose, {
          [css.isSelected]: selected === 'followings',
        })}
        onClick={() => filter('followings')}
      >
        FOLLOWINGS
      </button>
    </div>
  );
};
