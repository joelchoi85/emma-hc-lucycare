import hr from "../../assets/images/hr.png";
import hrv from "../../assets/images/hrv.png";

type Icon = "hr" | "hrv";

interface HRIconProps {
  icon: Icon;
  className?: string;
}

const IconImageMap: Record<Icon, string> = {
  hr: hr,
  hrv: hrv,
};

const HRIcon: React.FC<HRIconProps> = ({ icon, className = "" }) => {
  const imageSrc = IconImageMap[icon];

  return <img src={imageSrc} alt={`${icon}`} className={className} />;
};

export default HRIcon;
