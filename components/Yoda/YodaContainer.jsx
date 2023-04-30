import { forwardRef } from 'react';

const YodaContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className='voxel-dog'
    // m='auto'
    // mt={['-20px', '-60px', '-120px']}
    // mb={['-40px', '-140px', '-200px']}
    // w={[280, 480, 640]}
    // h={[280, 480, 640]}
    // position='relative'
  >
    {children}
  </div>
));

export default YodaContainer;
