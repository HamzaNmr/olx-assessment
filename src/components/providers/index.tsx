import { Fragment } from 'react';
import type { AppProps } from "next/app";

interface ProvidersProps extends AppProps {
    children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Providers