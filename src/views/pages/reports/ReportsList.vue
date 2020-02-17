<template>
  <div class="reports-list">
    <b-container class="fluid">
      <b-row class="create-report">
        <b-col>
          <router-link to="/select-new-report-type">
            <b-button variant="success">Create Report</b-button>
          </router-link>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-table
            id="my-table"
            :items="reports"
            :fields="fields"
            :per-page="parPage"
            :current-page="currentPage"
          >
            <template v-slot:cell(edit)="row">
              <b-button size="sm" @click="update(row)" class="mr-2">
                Edit
              </b-button>
            </template>
          </b-table>

          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="parPage"
            aria-controls="my-table"
            @change="clickCallback"
          >
          </b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ReportsList",
  props: {},
  data() {
    return {
      fields: [
        {
          key: "report.id",
          label: "Id"
        },
        {
          key: "report.name",
          label: "Name"
        },
        {
          key: "report.status",
          label: "Status"
        },
        {
          key: "report.type",
          label: "Type"
        },
        {
          key: "edit",
          label: "Edit"
        }
      ],
      parPage: 5,
      currentPage: 1,
      stateReports: []
    };
  },
  mounted() {},
  created() {
    this.stateReports = Object.assign(
      {},
      this.$store.getters["report/getReports"]
    );
    if (this.$store.state.report.reports.length === 0) {
      this.$store.dispatch("report/fetchReports").then(() => {
        if (
          this.$route.params &&
          this.$route.params.page &&
          Number(this.$route.params.page) &&
          Number(this.$route.params.page) <= Math.ceil(this.rows / this.parPage)
        ) {
          console.log("this.rows", this.rows);
          this.currentPage = Number(this.$route.params.page);
        } else {
          this.currentPage = 1;
        }
      });
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.$router.push({
        name: "reports-list",
        params: { page: Number(pageNum) }
      });
    },
    update(row) {
      this.$router.push({
        name: "update-report",
        params: { id: row.item.report.id }
      });
    }
  },
  computed: {
    reports() {
      return this.$store.state.report.reports;
    },
    rows() {
      return this.reports.length;
    }
  }
};
</script>

<style lang="scss">
@import "./../../../assets/scss/pages/reports/reportList.scss";
</style>
