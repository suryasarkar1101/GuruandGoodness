import { useEffect, useState } from "react";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import AppRoutes from "../routes/AppRoutes";

export default function LaunchGate() {
    const [loading, setLoading] = useState(true);
    const [config, setConfig] = useState(null);
    const [showWebsite, setShowWebsite] = useState(false);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const response = await fetch("/launch-config.json");

                // Config file doesn't exist
                if (!response.ok) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                const data = await response.json();
                setConfig(data);

                // Launch page disabled
                if (!data.enabled) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                // Beta Access
                const betaAccess =
                    localStorage.getItem("betaAccess") === "true";

                if (betaAccess) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                // Launch date reached
                if (new Date() >= new Date(data.launchDate)) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                setShowWebsite(false);
            } catch (error) {
                console.error(error);
                setShowWebsite(true);
            } finally {
                setLoading(false);
            }
        };

        loadConfig();
    }, []);

    if (loading) return null;

    if (showWebsite) {
        return <AppRoutes />;
    }

    return <ComingSoon config={config} />;
}