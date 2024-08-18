import bannerPhoto from '../assets/ProductsImg.jpg'

const Banner = () => {
  return (
    <div className='mt-6'>
      <img src={bannerPhoto} alt="Banner" className="lg:h-[500px] rounded-lg" />
    </div>
  );
};

export default Banner;
