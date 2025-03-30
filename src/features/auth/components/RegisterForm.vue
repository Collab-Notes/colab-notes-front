<script setup lang="ts">
import AuthProvider from "#template/views/pages/authentication/AuthProvider.vue";
import { vuetifyInputConfig } from "~/common/vee-validate-vuetify-input-config";

const isPasswordVisible = ref(false);

const { handleSubmit: validateFormData, defineField } = useForm({
  validationSchema: toTypedSchema(registerSchema),
});

const [userName, userNameAttrs] = defineField("username", vuetifyInputConfig);
const [email, emailAttrs] = defineField("email", vuetifyInputConfig);
const [password, passwordAttrs] = defineField("password", vuetifyInputConfig);
const [confirmPassword, confirmPasswordAttrs] = defineField(
  "passwordConfirmation",
  vuetifyInputConfig,
);
const [terms, termsAttrs] = defineField("terms", vuetifyInputConfig);

const { register, error, status } = useSupabaseAuthRegister();

const handleSubmit = validateFormData(async (values) => {
  await register(values.email, values.password);
});
</script>

<template>
  <VForm @submit="handleSubmit">
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
    <VAlert
      v-if="status === 'success'"
      type="success"
      variant="tonal"
      class="mb-5"
      >Registro exitoso, revisa tu correo electronico para verificarlo
      <VBtn variant="text" color="primary"> reenviar </VBtn>
    </VAlert>
    <VRow>
      <!-- Username -->
      <VCol cols="12">
        <VTextField
          :id="useId()"
          v-model.trim="userName"
          v-bind="userNameAttrs"
          label="Nombre de usuario"
          placeholder="Lorem Ipsum"
        />
      </VCol>
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

      <VCol cols="12" class="d-flex align-center">
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
      </VCol>

      <!-- password -->
      <VCol cols="12">
        <VTextField
          :id="useId()"
          v-model.trim="confirmPassword"
          v-bind="confirmPasswordAttrs"
          label="Confirmar contraseña"
          placeholder="············"
          :type="isPasswordVisible ? 'text' : 'password'"
          autocomplete="password"
          :append-inner-icon="
            isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
          "
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
        />

        <div class="d-flex align-center my-6">
          <VCheckbox
            id="privacy-policy"
            v-model="terms"
            inline
            v-bind="termsAttrs"
          />
          <VLabel for="privacy-policy" style="opacity: 1">
            <span class="me-1">Acepto los </span>
            <a href="javascript:void(0)" class="text-primary"
              >terminos y Condiciones</a
            >
          </VLabel>
        </div>

        <VBtn block type="submit"> Registrarse </VBtn>
      </VCol>

      <!-- login instead -->
      <VCol cols="12" class="text-body-1 text-center">
        <span class="d-inline-block">
          ¿Ya tienes una cuenta en Colab Notes ?
        </span>
        <NuxtLink
          class="text-primary ms-1 d-inline-block text-body-1"
          to="/auth/login"
        >
          Inicia Sesión
        </NuxtLink>
      </VCol>

      <VCol cols="12" class="d-flex align-center">
        <VDivider />
        <span class="mx-4">o</span>
        <VDivider />
      </VCol>

      <!-- auth providers -->
      <VCol cols="12" class="text-center">
        <AuthProvider />
      </VCol>
    </VRow>
  </VForm>
</template>
