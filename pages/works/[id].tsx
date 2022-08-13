import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Id: NextPage = () => {
    const router = useRouter();
    return (
        <div>{router.query.id}番の仕事</div>
    );
};
export default Id;