
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center my-6 md:my-8">
      <h1 className="text-4xl md:text-6xl font-artistic font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent flex items-center justify-center gap-3">
        Ảnh Nghệ Thuật Thơ Mộng
      </h1>
      <p className="text-lg text-red-500 mt-2">
        Biến mọi khoảnh khắc thành một bài thơ
      </p>
    </header>
  );
};

export default Header;
