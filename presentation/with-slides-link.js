import React from 'react';

export default function (Presentation) {
  const slidesUrl = 'https://brysgo.github.io/react-native-graphql-presentation';
  return (props) => (
    <div>
      <div style={{
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        padding: 5,
        textAlign: 'center',
        fontSize: 20
      }}>
        <a href={slidesUrl} style={{ color: '#CECECE' }}>
          {slidesUrl}
        </a>
      </div>
      <Presentation {...props} />
    </div>
  );
}
