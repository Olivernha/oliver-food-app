import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-headre-background";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href={'/'} className={classes.logo}>
                    <Image src={logoImg} alt={'Foodies Logo'} priority />
                    Oliver&apos;s Food Shop
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href={'/meals'}>Browse Meals</Link></li>
                        <li><Link href={'/community'}>Foodies Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}