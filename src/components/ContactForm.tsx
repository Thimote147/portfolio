import { useTranslation } from "react-i18next";
import { useContactForm } from "../hooks/useContactForm";
import Button from "./Button";

export default function ContactForm() {
  const { t } = useTranslation();
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">
            {error}
          </p>
        </div>
      )}
      
      {isSuccess && (
        <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            {t("contact.form.success")}
          </p>
          <button
            onClick={resetForm}
            className="mt-2 text-sm text-green-800 dark:text-green-200 underline hover:no-underline"
          >
            {t("contact.form.sendAnother")}
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isLoading || isSuccess}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading || isSuccess}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("contact.form.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isLoading || isSuccess}
          />
        </div>
        <div>
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isLoading || isSuccess}
          >
            {isLoading ? t("contact.form.sending") : t("contact.form.submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}
