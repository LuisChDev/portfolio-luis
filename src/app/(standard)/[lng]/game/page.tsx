"use client";

import { useTranslation } from "@/app/i18n/client";
import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const AppGame = ({ params }: { params: { lng: string; }; }) => {
  const [isLandscape, setIsLandscape] = useState(false);
  const { t } = useTranslation(params.lng, "game");
  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    handleOrientationChange();
    window.addEventListener("resize", handleOrientationChange);
    return () => window.removeEventListener("resize", handleOrientationChange);
  }, []);

  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/files/Build/build.loader.js",
    dataUrl: "/files/Build/build.data",
    frameworkUrl: "/files/Build/build.framework.js",
    codeUrl: "/files/Build/build.wasm",
  });

  return (
    <div className="m-16 w-full h-screen flex flex-col sm:flex-row">
      {isLandscape ? (
        <Unity className="h-1/2 w-2/3"  unityProvider={unityProvider} />
      ) : (
          <div className="text-black dark:text-stone-200">
            {t("landscapeMode")}
          </div>
      )}
      <div className="text-black dark:text-stone-200 flex flex-0 flex-col ml-6 mr-6 w-1/4">
        {!isLoaded && (
          <p className="text-black dark:text-stone-200">
            Loading... {Math.round(loadingProgression * 100)}%
          </p>
        )}
        <div className="border-2 border-stone-200 p-2">
          {t("instructions")}
        </div>
        {/* <div className="mt-10 border-2 border-stone-200 p-2">
          {`${t("total")} 0`}
        </div> */}
      </div>
    </div>
  );
};

export default AppGame;
