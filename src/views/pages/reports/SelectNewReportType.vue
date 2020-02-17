<template>
  <div class="create-report">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <router-link to="/create-report/sales">
            <b-button variant="success">Create Sales Report</b-button>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/create-report/rental">
            <b-button variant="success">Create Rental Report</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "SelectNewReportType",
  data() {
    return {};
  }
};
</script>
