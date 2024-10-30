import React from 'react'
export interface CardContainer {
  children: React.ReactNode
}

function CardContainer(props: CardContainer) {
  const { children } = props;
  return (
    <div className='flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0'>
      {children}
    </div>
  )
}

export default CardContainer
