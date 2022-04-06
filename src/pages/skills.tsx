import React from 'react';
import { Head, SkillItem } from '../components/index';
import androidIcon from '../../public/images/skills-android.svg';
import cssIcon from '../../public/images/skills-css.svg';
import figmaIcon from '../../public/images/skills-figma.svg';
import gitIcon from '../../public/images/skills-git.svg';
import htmlIcon from '../../public/images/skills-html.svg';
import javaIcon from '../../public/images/skills-java.svg';
import javaScriptIcon from '../../public/images/skills-javascript.svg';
import kotlinIcon from '../../public/images/skills-kotlin.svg';
import nextIcon from '../../public/images/skills-next.svg';
import pythonIcon from '../../public/images/skills-python.svg';
import reactIcon from '../../public/images/skills-react.svg';
import sassIcon from '../../public/images/skills-sass.svg';
import typeScriptIcon from '../../public/images/skills-typescript.svg';
import flutterIcon from '../../public/images/skills-flutter.svg';
import dartIcon from '../../public/images/skills-dart.svg';
import iosIcon from '../../public/images/skills-ios.svg';
import swiftIcon from '../../public/images/skills-swift.svg';
import styles from '../styles/skills.module.scss';
import * as Strings from '../strings';

const Skills: React.VFC = () => {
    return (
        <div className={styles.skills}>
            <Head
                title="Tomoki's Portfolio | Skills"
                url='https://portfolio-tomoki.vercel.app/skills'
            />
            <h2 className={styles.skills__title} />
            <h3 className={styles['skills__sub-title']}>
                {Strings.SKILL_SMART_PHONE_APP_TITLE}
            </h3>
            <SkillItem
                description={Strings.SKILL_FLUTTER_DESCRIPTION}
                hasExperienced={false}
                imageUrl={flutterIcon}
                label={Strings.SKILL_FLUTTER_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_DART_DESCRIPTION}
                hasExperienced={false}
                imageUrl={dartIcon}
                label={Strings.SKILL_DART_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_ANDROID_DESCRIPTION}
                hasExperienced
                imageUrl={androidIcon}
                label={Strings.SKILL_ANDROID_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_KOTLIN_DESCRIPTION}
                hasExperienced
                imageUrl={kotlinIcon}
                label={Strings.SKILL_KOTLIN_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_IOS_DESCRIPTION}
                hasExperienced
                imageUrl={iosIcon}
                label={Strings.SKILL_IOS_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_SWIFT_DESCRIPTION}
                hasExperienced
                imageUrl={swiftIcon}
                label={Strings.SKILL_SWIFT_LABEL}
            />
            <h3 className={styles['skills__sub-title']}>
                {Strings.SKILL_FRONTEND_TITLE}
            </h3>
            <SkillItem
                description={Strings.SKILL_HTML_DESCRIPTION}
                hasExperienced
                imageUrl={htmlIcon}
                label={Strings.SKILL_HTML_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_CSS_DESCRIPTION}
                hasExperienced
                imageUrl={cssIcon}
                label={Strings.SKILL_CSS_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_SASS_DESCRIPTION}
                hasExperienced={false}
                imageUrl={sassIcon}
                label={Strings.SKILL_SASS_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_JS_DESCRIPTION}
                hasExperienced
                imageUrl={javaScriptIcon}
                label={Strings.SKILL_JS_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_TS_DESCRIPTION}
                hasExperienced={false}
                imageUrl={typeScriptIcon}
                label={Strings.SKILL_TS_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_REACT_DESCRIPTION}
                hasExperienced={false}
                imageUrl={reactIcon}
                label={Strings.SKILL_REACT_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_NEXT_DESCRIPTION}
                hasExperienced={false}
                imageUrl={nextIcon}
                label={Strings.SKILL_NEXT_LABEL}
            />
            <h3 className={styles['skills__sub-title']}>
                {Strings.SKILL_BACKEND_TITLE}
            </h3>
            <SkillItem
                description={Strings.SKILL_PYTHON_DESCRIPTION}
                hasExperienced
                imageUrl={pythonIcon}
                label={Strings.SKILL_PYTHON_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_JAVA_DESCRIPTION}
                hasExperienced={false}
                imageUrl={javaIcon}
                label={Strings.SKILL_JAVA_LABEL}
            />
            <h3 className={styles['skills__sub-title']}>
                {Strings.SKILL_OTHER_TITLE}
            </h3>
            <SkillItem
                description={Strings.SKILL_GIT_DESCRIPTION}
                hasExperienced
                imageUrl={gitIcon}
                label={Strings.SKILL_GIT_LABEL}
            />
            <SkillItem
                description={Strings.SKILL_FIGMA_DESCRIPTION}
                hasExperienced={false}
                imageUrl={figmaIcon}
                label={Strings.SKILL_FIGMA_LABEL}
            />
        </div>
    );
};

export default Skills;
