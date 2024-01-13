"use client";

import { FC } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const AppGame: FC  = () => {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/Build/build.loader.js",
    dataUrl: "/Build/build.data.gz",
    frameworkUrl: "/Build/build.framework.js.gz",
    codeUrl: "/Build/build.wasm.gz",
  });

  return (
    <div>
      {!isLoaded && (
        <p className="dark:text-stone-200">
          Loading... {Math.round(loadingProgression * 100)}%
        </p>
      )}
      <Unity unityProvider={unityProvider} />
    </div>
  );
}

export default AppGame;
