<script setup>
import { useMediaQuery } from "@vueuse/core";
import MainButton from "~/components/Buttons/MainButton.vue";
import { useCardsStore } from "~/store/useCardsStore";
import {
	mediaQuery,
	TailwindBreakpoint,
} from "~/helpers/tailwind-breakpoints.js";
import { cutText } from "~/helpers/cutText";
import { options, optionsSizes, defaultState } from "~/models/data";
import CustomModal from "~/components/Modals/CustomModal.vue";
import PreviewCard from "~/components/Cards/PreviewCard.vue";

const emit = defineEmits(["emit"]);
const isMediumScreen = useMediaQuery(mediaQuery(TailwindBreakpoint.Large));
const isVisible = ref(false);
const isModalVisible = ref(false);
const isEdit = ref(false);
const store = useCardsStore();
const { cards } = storeToRefs(store);
const { $storage } = useNuxtApp();
const { addCard, updateValues, updateCard, removeCard } = store;
const state = reactive({
	...defaultState,
});
const { notifySuccess, notifyError } = useNotifications();

const addButton = () => {
	isVisible.value = true;
};

onMounted(() => {
	updateValues($storage.getItem("cards"));
});

const clearState = () => {
	state.content = "";
	state.id = "";
	state.style = defaultState.style;
	state.size = defaultState.size;
};

const saveCards = (e) => {
	e.preventDefault();

	if (!state.content) return;

	try {
		if (isEdit.value) {
			updateCard(state);
		} else {
			addCard(state);
		}

		notifySuccess();
		isVisible.value = false;
		isEdit.value = false;
		clearState();
	} catch (e) {
		notifyError({ description: e.message });
		clearState();
	}
};

const handleEdit = (props) => {
	state.id = props.id;
	state.style = props.style;
	state.size = props.size;
	state.content = props.content;
	isVisible.value = true;
	isEdit.value = true;
};

const handleDelete = (props) => {
	state.id = props.id;
	isModalVisible.value = true;
};

const remove = () => {
	removeCard(state.id);
	isModalVisible.value = false;
};
</script>

<template>
	<ClientOnly>
		<Cards :items="cards" @edit="handleEdit" @delete="handleDelete" />
		<div class="flex gap-16 mt-4" :class="{ 'flex-col': !isMediumScreen }">
			<div class="flex-1">
				<MainButton
					class="p-2 mb-8"
					label="Добавить карточку"
					color="green"
					@click="addButton"
					:disabled="isVisible"
				/>
				<UForm
					ref="form"
					:state="state"
					v-show="isVisible"
					class="w-full"
					@submit="saveCards"
				>
					<HorizontalFormGroup
						label="content"
						name="content"
						required
						class="w-full"
					>
						<UInput
							class="w-full mb-8"
							v-model="state.content"
							placeholder="Введите описание карточки"
							:ui="{ icon: { trailing: { pointer: '' } } }"
						>
							<template #trailing>
								<UButton
									v-show="state.content !== ''"
									color="gray"
									variant="link"
									icon="i-heroicons-x-mark-20-solid"
									:padded="false"
									@click="state.content = ''"
								/>
							</template>
						</UInput>
					</HorizontalFormGroup>

					<URadioGroup
						v-if="state.content.length"
						legend="Legend"
						:options="optionsSizes"
						v-model="state.style"
						class="mb-8"
					>
						<template #legend>
							<span class="italic">Выберите размер текста</span>
						</template>
						<template #label="{ option }" class="w-auto">
							<div :class="`${option.value}`" class="border-blue-500">
								{{ cutText(state.content) }}
							</div>
						</template>
					</URadioGroup>

					<URadioGroup
						v-if="state.content.length"
						legend="Legend"
						:options="options"
						v-model="state.size"
					>
						<template #legend>
							<span class="italic">Выберите цвет текста</span>
						</template>
						<template #label="{ option }" class="w-auto">
							<div :class="`${option.value}`" class="border-blue-500">
								{{ cutText(state.content) }}
							</div>
						</template>
					</URadioGroup>

					<div class="flex gap-2 mt-3">
						<MainButton
							label="Сохранить"
							class="p-2"
							type="submit"
							:disabled="!state.content.trim().length"
						>
						</MainButton>
						<MainButton label="Отменить" class="p-2" @click="isVisible = false">
						</MainButton>
					</div>
				</UForm>
			</div>

			<div class="flex-1" v-show="isVisible || isEdit">
				<PreviewCard :state="state" />
			</div>
		</div>
		<CustomModal
			v-model="isModalVisible"
			question="Удалить карточку?"
			:action="remove"
		/>
	</ClientOnly>
</template>
