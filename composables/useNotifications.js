export const NotificationIcon = {
	Success: "i-heroicons-check-badge",
	Error: "i-heroicons-x-circle",
};

export const useNotifications = () => {
	const toast = useToast();

	const notifySuccess = (params = {}) => {
		toast.add({
			title: params?.title ?? "Успешно!",
			icon: NotificationIcon.Success,
			color: "green",
			description: params?.description,
		});
	};

	const notifyError = (params = {}) => {
		toast.add({
			title: params?.title ?? "Ошибка!",
			icon: NotificationIcon.Error,
			color: "red",
			description: params?.description,
		});
	};

	return {
		toast,
		notifySuccess,
		notifyError,
	};
};
