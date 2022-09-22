import Loading from 'components/base/Loading';
import { ReactNode, ReactElement, JSXElementConstructor, ReactPortal } from 'react';

interface IProps {
  loading?: boolean;
  loader?: ReactNode;
  children?: ReactNode;
}

const Loader = ({
  loading = false,
  loader = <Loading />,
  children,
}: IProps):
  | ReactElement<any, string | JSXElementConstructor<any>>
  | string
  | number
  // eslint-disable-next-line @typescript-eslint/ban-types
  | {}
  | Iterable<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined => {
  return loading ? loader : <>{children}</>;
};

export default Loader;
