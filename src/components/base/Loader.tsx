import Loading from 'components/base/Loading';
import { ReactNode, useMemo } from 'react';

interface IProps {
  loading: boolean;
  loader?: ReactNode;
  children: ReactNode;
}

const Loader = ({ loading, loader = <Loading />, children }: IProps) =>
  useMemo(() => {
    return loading ? loader : <>{children}</>;
  }, [loading]);

export default Loader;
