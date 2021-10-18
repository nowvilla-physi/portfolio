import React from 'react';
import styles from '../styles/button.module.scss';

type Props = {
    name: string;
    doClick: () => void;
};

const Button: React.VFC<Props> = (props) => {
    const { name, doClick } = props;
    return (
        <button className={styles.button} onClick={doClick} type='button'>
            {name}
        </button>
    );
};

export default Button;
