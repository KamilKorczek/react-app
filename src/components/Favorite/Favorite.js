import styles from './Favorite.module.scss'
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFilteredFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {

  const favoriteCards = useSelector(state => getFilteredFavoriteCards(state));

  if(favoriteCards.length === 0) return <PageTitle>No favorite cards</PageTitle>

  return (
    <div>
      <Container>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.columns}>
          <article className={styles.column}>
            <ul className={styles.cards}>
              {favoriteCards.map(card => <Card key={card.id} title={card.title} cardId={card.id} />)}
            </ul>
          </article>
        </div>
      </Container>
    </div>
  );
}

export default Favorite;