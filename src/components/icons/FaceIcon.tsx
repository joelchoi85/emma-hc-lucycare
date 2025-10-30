import smilingFace from "../../assets/images/smiling_face.png";
import smilingFace2x from "../../assets/images/smiling_face_2x.png";
import cryingFace from "../../assets/images/crying_face.png";
import cryingFace2x from "../../assets/images/crying_face_2x.png";
import faceWithOpenMouth from "../../assets/images/face_with_open_mouth.png";
import faceWithOpenMouth2x from "../../assets/images/face_with_open_mouth_2x.png";
import poutingFace from "../../assets/images/pouting_face.png";
import poutingFace2x from "../../assets/images/pouting_face_2x.png";
import fearfulFace from "../../assets/images/fearful_face.png";
import fearfulFace2x from "../../assets/images/fearful_face_2x.png";
import wearyFace from "../../assets/images/weary_face.png";
import wearyFace2x from "../../assets/images/weary_face_2x.png";
import neutralFace from "../../assets/images/neutral_face.png";
import neutralFace2x from "../../assets/images/neutral_face_2x.png";

type Emotion =
  | "Sad"
  | "Neutral"
  | "Happy"
  | "Angry"
  | "Disgusted"
  | "Fearful"
  | "Surprised";

interface FaceIconProps {
  emotion: Emotion;
  className?: string;
  scale?: 1 | 2; // 1x 또는 2x 배율
}

const emotionImageMap: Record<Emotion, { "1x": string; "2x": string }> = {
  Happy: { "1x": smilingFace, "2x": smilingFace2x },
  Sad: { "1x": cryingFace, "2x": cryingFace2x },
  Surprised: { "1x": faceWithOpenMouth, "2x": faceWithOpenMouth2x },
  Angry: { "1x": poutingFace, "2x": poutingFace2x },
  Fearful: { "1x": fearfulFace, "2x": fearfulFace2x },
  Disgusted: { "1x": wearyFace, "2x": wearyFace2x },
  Neutral: { "1x": neutralFace, "2x": neutralFace2x },
};

const FaceIcon: React.FC<FaceIconProps> = ({
  emotion,
  className = "",
  scale = 1,
}) => {
  const imageSrc = emotionImageMap[emotion][`${scale}x`];

  return <img src={imageSrc} alt={`${emotion} face`} className={className} />;
};

export default FaceIcon;
