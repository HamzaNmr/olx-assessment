import styles from "@/styles/header.module.css";
import Logo from '@/components/common/svg/logo';
import SubHeader from "./sub-header";

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.inner}>
            <Logo width={70} height={30}/>
            <SubHeader />
        </div>
    </header>
  )
}

export default Header
