// withDataFetching.js
import React, { useEffect, useState } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]);

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return <WrappedComponent data={data} {...props} />;
    };
};

export default withDataFetching;