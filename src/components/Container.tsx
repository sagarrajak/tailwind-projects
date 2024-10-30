import React from 'react';

export interface Props {
  children: React.ReactNode;
}
function Container(props: Props) {
  return (
    <div
      className="flex
          items-center
          justify-center
          min-h-screen
          bg-slate-800"
    >
      {props.children}
    </div>
  );
}

export default Container;
