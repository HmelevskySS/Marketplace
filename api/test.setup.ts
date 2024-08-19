import { request } from "@playwright/test";

// Функция для создания нового контекста API
export async function createNewContext() {
    const apiContext = await request.newContext();
    return apiContext;
}

// Функция для удаления контекста API
export async function deleteContext(apiContext) {
    await apiContext.dispose();
}