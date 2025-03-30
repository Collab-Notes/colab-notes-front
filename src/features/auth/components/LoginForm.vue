<script setup lang="ts">
import AuthProvider from "#template/views/pages/authentication/AuthProvider.vue";
import { vuetifyInputConfig } from "~/common/vee-validate-vuetify-input-config";

const isPasswordVisible = ref(false);

const { handleSubmit: validateFormData, defineField } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const [email, emailAttrs] = defineField("email", vuetifyInputConfig);
const [password, passwordAttrs] = defineField("password", vuetifyInputConfig);
const [remember, rememberAttrs] = defineField("remember", vuetifyInputConfig);

const { login, error, status } = useSupabaseAuthLogin();

const handleSubmit = validateFormData(async (values) => {
  await login(values.email, values.password);
});
</script>

<template>
  <VForm @submit.prevent="handleSubmit">
    <VAlert
      v-if="status === 'error'"
      type="error"
      variant="tonal"
      closable
      class="mb-5"
      @click:close="error = ''"
    >
      {{ error }}
    </VAlert>
    <VRow>
      <!-- email -->
      <VCol cols="12">
        <VTextField
          :id="useId()"
          v-model.trim="email"
          v-bind="emailAttrs"
          label="Email"
          placeholder="ejemplo@mail.com"
          type="email"
        />
      </VCol>

      <!-- password -->
      <VCol cols="12">
        <VTextField
          :id="useId()"
          v-model="password"
          v-bind="passwordAttrs"
          label="Contraseña"
          placeholder="············"
          :type="isPasswordVisible ? 'text' : 'password'"
          autocomplete="password"
          :append-inner-icon="
            isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
          "
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />

        <!-- remember me checkbox -->
        <div class="d-flex align-center justify-space-between flex-wrap my-6">
          <VCheckbox
            :id="useId()"
            v-model="remember"
            v-bind="rememberAttrs"
            label="Recordar sesión"
          />

          <a class="text-primary" href="javascript:void(0)">
            Olvidó su contraseña?
          </a>
        </div>

        <!-- login button -->
        <VBtn block type="submit"> Iniciar Sesión </VBtn>
      </VCol>

      <!-- create account -->
      <VCol cols="12" class="text-center text-base">
        <span>Nuevo en Colab Notes?</span>
        <NuxtLink class="text-primary ms-2" to="/register">
          Crear una cuenta
        </NuxtLink>
      </VCol>

      <VCol cols="12" class="d-flex align-center">
        <VDivider />
        <span class="mx-4">O</span>
        <VDivider />
      </VCol>

      <!-- auth providers -->
      <VCol cols="12" class="text-center">
        <AuthProvider />
      </VCol>
    </VRow>
  </VForm>
</template>
