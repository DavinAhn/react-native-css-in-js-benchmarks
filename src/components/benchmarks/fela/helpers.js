import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { createRenderer } from 'fela-native';
import { RendererProvider } from 'react-fela';

const renderer = createRenderer();

export const wrapRenderer = Component => {
  const FelaWrapper = props => (
    <RendererProvider renderer={renderer}>
      <Component {...props} />
    </RendererProvider>
  );

  return hoistNonReactStatics(FelaWrapper, Component);
};
