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

                const params = new URLSearchParams(window.location.search);
                const betaCode = params.get("beta");

                if (
                    data.beta?.enabled &&
                    betaCode === data.beta.code
                ) {
                    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

                    localStorage.setItem("betaAccess", JSON.stringify({ expiresAt }));

                    window.history.replaceState({}, "", window.location.pathname);

                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                // 3. Existing beta user
                const betaAccess = localStorage.getItem("betaAccess");

                if (betaAccess) {
                    try {
                        const { expiresAt } = JSON.parse(betaAccess);

                        if (Date.now() < expiresAt) {
                            setShowWebsite(true);
                            setLoading(false);
                            return;
                        }

                        // Expired
                        localStorage.removeItem("betaAccess");
                    } catch {
                        localStorage.removeItem("betaAccess");
                    }
                }

                // 4. Launch disabled
                if (!data.enabled) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                // 5. Launch date passed
                if (new Date() >= new Date(data.launchDate)) {
                    setShowWebsite(true);
                    setLoading(false);
                    return;
                }

                // 6. Otherwise show Coming Soon
                setShowWebsite(false);
                setLoading(false);
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