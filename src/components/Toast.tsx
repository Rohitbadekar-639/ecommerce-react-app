import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const ToastIcon = ({ type }: { type: string }) => {
  const iconProps = { className: "w-5 h-5 flex-shrink-0" };
  
  switch (type) {
    case 'success':
      return <CheckCircle {...iconProps} className={`${iconProps.className} text-green-500`} />;
    case 'error':
      return <AlertCircle {...iconProps} className={`${iconProps.className} text-red-500`} />;
    case 'warning':
      return <AlertTriangle {...iconProps} className={`${iconProps.className} text-yellow-500`} />;
    case 'info':
    default:
      return <Info {...iconProps} className={`${iconProps.className} text-blue-500`} />;
  }
};

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[300px] max-w-md animate-slide-up"
        >
          <ToastIcon type={toast.type} />
          <p className="flex-1 text-sm text-gray-900">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 p-1 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      ))}
    </div>
  );
};
