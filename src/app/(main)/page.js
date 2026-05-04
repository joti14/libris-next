import Announcement from '@/components/shared/Announcement';
import Author from '@/components/Author';
import Banner from '@/components/shared/Banner';
import FeaturedBooks from '@/components/FeaturedBooks/FeaturedBooks';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <Banner />
      <Announcement />
      <FeaturedBooks />
      <Author />
      <Footer />
    </>
  );
}
