"use client";

import { FC, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const AppGame: FC = () => {
  const [isLandscape, setIsLandscape] = useState(false);
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
        <Unity className="w-full h-full" unityProvider={unityProvider} />
      ) : (
          <div className="dark:text-stone-200">Please rotate your device to landscape mode.</div>
      )}
      <div className="dark:text-stone-200 flex flex-0 flex-col ml-6 mr-6 w-1/4">
        {!isLoaded && (
          <p className="dark:text-stone-200">
            Loading... {Math.round(loadingProgression * 100)}%
          </p>
        )}
        <div className="md:hidden">
          This div should only show up on phone screens.
        </div>
        <div className="border-2 border-stone-200 p-2">
          use WASD to move, the mouse to look around, and left click to swing
          your hammer. Hold shift to sprint. Try to find and destroy all the
          bricks! press Return at any time to restart.
        </div>
        <div className="mt-10 border-2 border-stone-200 p-2">
          total bricks destroyed: 0
        </div>
      </div>
    </div>
  );
};

export default AppGame;
