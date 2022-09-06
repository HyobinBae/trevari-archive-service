import FooterComp from 'components/layout/Footer';
import HeroSlider from 'components/main/HeroSlider';
import BlogList from 'components/main/BlogList';
import CurationList from './CurationList';

function Main() {
  return (
    <>
      <HeroSlider />
      <CurationList />
      <BlogList />
      <FooterComp />
    </>
  );
}

export default Main;
