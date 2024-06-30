import {
  AvatarCreator,
  AvatarCreatorConfig,
  AvatarExportedEvent,
} from "@readyplayerme/react-avatar-creator";
import { useState } from "react";

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none" };

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleOnAvatarExported = (event) => {
    setAvatarUrl(event.data.url);
  };

  return (
    <>
      <AvatarCreator
        subdomain="https://testing-yameen.vercel.app/"
        config={config}
        style={style}
        onAvatarExported={handleOnAvatarExported}
      />
      {/* {avatarUrl && <Avatar modelSrc={avatarUrl} />} */}
    </>
  );
}
