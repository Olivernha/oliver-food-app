import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Welcome to Oliver Food Shop</h1>
            <p>Discover and share gourmet recipes from Oliver exclusive collection.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join Oliver Community</Link>
            <Link href="/meals">Browse Oliver  Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>About Oliver Food Shop</h2>
          <p>
            Oliver Food Shop is a curated selection of gourmet recipes, handpicked by Oliver himself. It features exquisite dishes from around the world, perfect for any food enthusiast.
          </p>
          <p>
            Each recipe is crafted to perfection, ensuring a delightful culinary experience every time.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Oliver Food Shop?</h2>
          <p>
            Oliver Food Shop offers an unparalleled selection of gourmet recipes that are both unique and delicious. Each recipe is chosen for its flavor, creativity, and presentation.
          </p>
          <p>
            Join Oliver community to explore these exclusive recipes and connect with other gourmet food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
