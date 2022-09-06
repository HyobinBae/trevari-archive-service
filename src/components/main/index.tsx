import FooterComp from 'components/layout/Footer';
import HeroSlider from 'components/main/HeroSlider';
import BlogList from 'components/main/BlogList';

function Main() {
  return (
    <>
      <HeroSlider />
      <BlogList />
      <FooterComp />
    </>
  );
}

export default Main;
