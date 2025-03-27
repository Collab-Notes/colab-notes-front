<script setup lang="ts">
import AnalyticsAward from "#template/views/dashboard/AnalyticsAward.vue";
import AnalyticsBarCharts from "#template/views/dashboard/AnalyticsBarCharts.vue";
import AnalyticsDepositWithdraw from "#template/views/dashboard/AnalyticsDepositWithdraw.vue";
import AnalyticsSalesByCountries from "#template/views/dashboard/AnalyticsSalesByCountries.vue";
import AnalyticsTotalEarning from "#template/views/dashboard/AnalyticsTotalEarning.vue";
import AnalyticsTotalProfitLineCharts from "#template/views/dashboard/AnalyticsTotalProfitLineCharts.vue";
import AnalyticsTransactions from "#template/views/dashboard/AnalyticsTransactions.vue";
import AnalyticsUserTable from "#template/views/dashboard/AnalyticsUserTable.vue";
import AnalyticsWeeklyOverview from "#template/views/dashboard/AnalyticsWeeklyOverview.vue";
import CardStatisticsVertical from "@core/components/cards/CardStatisticsVertical.vue";

const totalProfit = {
  title: "Total Profit",
  color: "secondary",
  icon: "ri-pie-chart-2-line",
  stats: "$25.6k",
  change: 42,
  subtitle: "Weekly Project",
};

const newProject = {
  title: "New Project",
  color: "primary",
  icon: "ri-file-word-2-line",
  stats: "862",
  change: -18,
  subtitle: "Yearly Project",
};
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="4">
      <AnalyticsAward />
    </VCol>

    <VCol cols="12" md="8">
      <AnalyticsTransactions />
    </VCol>

    <VCol cols="12" md="4">
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol cols="12" md="4">
      <AnalyticsTotalEarning />
    </VCol>

    <VCol cols="12" md="4">
      <VRow class="match-height">
        <VCol cols="12" sm="6">
          <AnalyticsTotalProfitLineCharts />
        </VCol>

        <VCol cols="12" sm="6">
          <CardStatisticsVertical v-bind="totalProfit" />
        </VCol>

        <VCol cols="12" sm="6">
          <CardStatisticsVertical v-bind="newProject" />
        </VCol>

        <VCol cols="12" sm="6">
          <AnalyticsBarCharts />
        </VCol>
      </VRow>
    </VCol>

    <VCol cols="12" md="4">
      <AnalyticsSalesByCountries />
    </VCol>

    <VCol cols="12" md="8">
      <AnalyticsDepositWithdraw />
    </VCol>

    <VCol cols="12">
      <AnalyticsUserTable />
    </VCol>
  </VRow>
</template>
