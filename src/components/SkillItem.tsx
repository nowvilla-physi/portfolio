import React from 'react';
import Image from 'next/image';
import styles from '../styles/skill-item.module.scss';
import * as Strings from '../strings';

type Props = {
    imageUrl: string;
    label: string;
    description: string;
    hasExperienced: boolean;
};

const SkillItem: React.VFC<Props> = (props) => {
    const { imageUrl, label, description, hasExperienced } = props;
    return (
        <section className={styles['skill-item']}>
            <div className={styles['skill-item__contents']}>
                <div className={styles['skill-item__contents--image']}>
                    <Image
                        src={imageUrl}
                        alt='スキルアイコン'
                        width={132}
                        height={132}
                    />
                </div>
            </div>
            <div className={styles['skill-item__contents']}>
                <h3 className={styles['skill-item__contents--label']}>
                    {label}
                </h3>
                <p className={styles['skill-item__contents--description']}>
                    {description}
                </p>
                <p
                    className={
                        hasExperienced
                            ? styles['skill-item__contents--hasExperienced']
                            : styles['skill-item__contents--hasNotExperienced']
                    }
                >
                    {hasExperienced
                        ? Strings.SKILL_EXPERIENCED
                        : Strings.SKILL_NO_EXPERIENCE}
                </p>
            </div>
        </section>
    );
};

export default SkillItem;
