import { useEffect } from "react";
import FaceIcon from "../icons/FaceIcon";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal = ({ isOpen, onClose }: ErrorModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <FaceIcon emotion="Surprised" scale={2} className="w-20 h-20" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            앗, 결과를 불러오지 못했어요
          </h2>

          <p className="text-gray-600 text-lg mb-3 leading-relaxed">
            여러 차례 시도해봤지만
            <br />
            원하는 결과를 가져오지 못했어요.
          </p>

          <p className="text-gray-500 mb-2 leading-relaxed">
            잠시 후에 다시 한 번 시도해 주시겠어요?
          </p>

          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            문제가 계속된다면
            <br />
            고객센터(
            <a href="tel:+82-70-4422-0101" className="text-blue-500 underline">
              070-4422-0101
            </a>
            )로
            <br />
            편하게 연락 주세요.
          </p>

          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-lg"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
