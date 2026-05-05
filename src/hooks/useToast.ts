import { useState, useCallback } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    const duration = toast.duration || 3000;
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = useCallback((message: string, duration?: number) => {
    addToast({ message, type: 'success', duration });
  }, [addToast]);

  const error = useCallback((message: string, duration?: number) => {
    addToast({ message, type: 'error', duration });
  }, [addToast]);

  const info = useCallback((message: string, duration?: number) => {
    addToast({ message, type: 'info', duration });
  }, [addToast]);

  const warning = useCallback((message: string, duration?: number) => {
    addToast({ message, type: 'warning', duration });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
    warning
  };
};
