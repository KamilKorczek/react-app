import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';

const Card = props => {
  
  const cardId = props.cardId;
  const dispatch = useDispatch();

  const handleClickFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  }

  const handleClickDelete = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  }

  return (
    <li className={styles.card}>{props.title}
      <form>
        <button onClick={handleClickFavorite}>
          <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite )} />
        </button>
        <button onClick={handleClickDelete}>
          <span className={clsx('fa fa-trash')} />
        </button>
      </form>
    </li>
  );
};

export default Card;