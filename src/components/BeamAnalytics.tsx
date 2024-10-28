import Script from "next/script";

const BeamAnalytics = () => {
    const token = process.env.NEXT_PUBLIC_BEAM_ANALYTICS_TOKEN;

    return (
        <Script
            strategy={"lazyOnload"}
            src={"https://beamanalytics.b-cdn.net/beam.min.js"}
            data-token={token}
            async
        />
    );
};

export default BeamAnalytics;
