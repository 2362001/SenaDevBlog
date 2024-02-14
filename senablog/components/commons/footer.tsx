const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <div className=" h-30 w-full flex items-center justify-center">
      <span>
        Copyright © {current_year} Nguyễn Tiến Thành. All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
