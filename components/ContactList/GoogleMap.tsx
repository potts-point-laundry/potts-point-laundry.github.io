import React from 'react';

interface GoogleMapProps extends React.HTMLProps<HTMLIFrameElement> {}

const GoogleMap = React.forwardRef<HTMLIFrameElement, GoogleMapProps>((props, ref) => (
  <iframe
    {...props}
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.686388294924!2d151.2208282!3d-33.8719723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae72b389a571%3A0xccdfb3dfcae3102e!2sPotts%20Point%20Laundry!5e0!3m2!1sen!2sau!4v1614830771641!5m2!1sen!2saus"
    style={{
      minHeight: 450,
      width: '100%',
      height: '100%',
      borderStyle: 'none',
    }}
    ref={ref}
  ></iframe>
));

export default GoogleMap;
