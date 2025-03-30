<script setup lang="ts">
const { logout } = useSupabaseAuthLogout();
const authStore = useAuthStore();

const avatarUrl = `https://ui-avatars.com/api/?name=${authStore.userData?.name ?? "Nuevo Usuario"}&background=random`;
type NavigationItem = {
  title: string;
  to: string;
  icon: string;
};

const navigation: NavigationItem[] = [
  {
    title: "Perfil",
    to: "/perfil",
    icon: "ri-user-line",
  },
  {
    title: "Configuración",
    to: "/configuracion",
    icon: "ri-settings-4-line",
  },
  {
    title: "Ayuda",
    to: "/ayuda",
    icon: "ri-question-line",
  },
];
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg :src="avatarUrl" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar color="primary" variant="tonal">
                    <VImg :src="avatarUrl" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ authStore.userData?.name ?? "Nuevo Usuario" }}
            </VListItemTitle>
            <VListItemSubtitle>
              {{
                authStore.userData?.email ?? "Nuevo Usuario"
              }}</VListItemSubtitle
            >
          </VListItem>
          <VDivider class="my-2" />

          <VListItem v-for="(item, index) in navigation" :key="index" link>
            <template #prepend>
              <VIcon class="me-2" :icon="item.icon" size="22" />
            </template>

            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="logout">
            <template #prepend>
              <VIcon class="me-2" icon="ri-logout-box-r-line" size="22" />
            </template>

            <VListItemTitle>Cerrar sesión</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
