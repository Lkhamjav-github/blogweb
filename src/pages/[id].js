import React from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
    const router = useRouter();
    console.log('router', router.query.id);
    return (
        <div>Detail</div>
    )
}

export default Detail