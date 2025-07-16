import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);

      try {
        // EmailJS configuration - these should be environment variables
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const publicKey = "YOUR_PUBLIC_KEY";

        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Thimoté Fétu",
          },
          publicKey,
        );

        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (err) {
        setError("Une erreur est survenue. Veuillez réessayer.");
        console.error("Error sending email:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [formData],
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSuccess(false);
    setError(null);
  }, []);

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
