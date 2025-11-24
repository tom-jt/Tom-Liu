import { ReactNode } from 'react';
import NavBar from './NavBar';

const Root = ({ children } : { children?: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Root;