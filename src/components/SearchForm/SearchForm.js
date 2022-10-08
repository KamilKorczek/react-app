import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;