import Script from "next/script";

const GoogleAnalytics = () => {
    const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

    return (
        <>
            <Script
                strategy={"lazyOnload"}
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
            />
            <Script id={"ga-inline"} strategy={"lazyOnload"}>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag("js", new Date());
                    gtag("config", "${analyticsId}", {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;