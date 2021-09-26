import React from 'react';
import { RouteComponentProps } from '@reach/router';

export const Route = (path: string[] | string, Component: React.FC<RouteComponentProps>) => {
  if (typeof path === 'string') {
    return <Component path={path} />;
  }
  return path.map((p: string, index: number) => <Component path={p} key={index} />);
};
