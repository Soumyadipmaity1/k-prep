import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  yearPath: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, yearPath }) => {
  const router = useRouter();

  if (!isOpen) return null;

  const navigateToScheme = (scheme: string) => {
    router.push(`${yearPath}/${scheme}`);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-96 text-center">
        <h2 className="text-3xl mb-6">{title}</h2>
        <p className="text-xl mb-6">Please select your scheme.</p>
        <div className="flex justify-around">
          <button
            onClick={() => navigateToScheme('schemeA')}
            className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            Scheme A
          </button>
          <button
            onClick={() => navigateToScheme('schemeB')}
            className="border-4 border-purple-500 text-purple-500 px-8 py-4 rounded-lg hover:bg-purple-500 hover:text-white transition"
          >
            Scheme B
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
