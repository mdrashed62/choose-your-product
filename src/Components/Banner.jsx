import bannerPhoto from '../assets/ProductsImg.jpg'

const Banner = () => {
  return (
    <div className=''>
      <img src={bannerPhoto} alt="Banner" className="h-[500px] rounded-lg" />
    </div>
  );
};

export default Banner;
