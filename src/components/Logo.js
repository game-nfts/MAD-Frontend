import React from 'react';
import GRIDS1 from '../assets/GRIDS1.svg';
import GRIDS1SMALL from '../assets/GRIDS1SMALL.svg';

export default function Logo(props) {

  return (
    <>
      <div className="block sm:hidden">
        <img className="w-full" src={GRIDS1SMALL} alt="" />
      </div>
      <div className="hidden sm:block">
        <img className="w-full" src={GRIDS1} alt="" />
      </div>
    </>
  );
}