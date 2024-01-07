import { Chip } from '@nextui-org/react';
import { useState } from 'react';
import { LuDot } from "react-icons/lu";
import { isCurrentTimeInRange } from '../utility/util';

const ShopStatus = () => {
  const [open, setOpen] = useState(isCurrentTimeInRange());

  return (
    <Chip
      startContent={<LuDot size={36} />}
      variant="faded"
      color={open ? 'success' : 'warning'}
      className='bg-secondaryBg border border-secondaryBg uppercase'
    >
      { open ? 'Open now' : 'Closed'}
    </Chip>
  )
}

export default ShopStatus