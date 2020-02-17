<template>
  <div class="create-sales-report">
    <b-container class="bv-example-row">
      <h1>
        {{ this.$route.params.id ? "Update" : "Create" }}
        {{ this.$route.params.type ? this.$route.params.type + " report" : "" }}
      </h1>
      <b-form @submit.prevent="reportId ? onUpdate() : onCreate()">
        <b-form-group
          label-cols="4"
          label-cols-lg="2"
          label="Name"
          label-for="form-name"
        >
          <b-form-input
            name="form-name"
            id="form-name"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          v-show="reportId"
          label-cols="4"
          label-cols-lg="2"
          label="Status"
          label-for="form-status"
        >
          <b-form-select
            id="form-status"
            v-model="form.status"
            :options="statusOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          v-show="reportId"
          label-cols="4"
          label-cols-lg="2"
          label="Type"
          label-for="form-type"
        >
          <b-form-select
            id="form-type"
            v-model="form.type"
            :options="typeOptions"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          v-show="!reportId"
          label-cols="4"
          label-cols-lg="2"
          label="Area"
          label-for="form-area"
        >
          <b-form-textarea
            id="form-area"
            v-model="form.area"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          v-show="reportType === 'rental'"
          label-cols="4"
          label-cols-lg="2"
          label="Phone"
          label-for="form-phone"
        >
          <b-form-input
            name="form-phone"
            id="form-phone"
            v-model="form.phone"
            placeholder="Enter phone"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">{{
          reportId ? "Save" : "Create"
        }}</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CreateUpdateReport",
  data() {
    return {
      form: {
        name: "",
        area: "",
        status: "",
        phone: ""
      },
      reports: [],
      report: {},
      typeOptions: [
        { item: "sales", name: "Sales" },
        { item: "rental", name: "Rental" }
      ],
      statusOptions: [
        { item: "ready", name: "Ready" },
        { item: "expired", name: "Expired" },
        { item: "draft", name: "Draft" }
      ],
      reportId: "",
      reportType: ""
    };
  },
  created() {
    // this.reportId = this.$route.params.id;
  },
  mounted() {
    this.reportId = this.$route.params.id;
    this.report = Object.assign(
      {},
      this.$store.getters["report/getReport"](parseInt(this.$route.params.id))
    );
    this.form = Object.assign({}, this.report.report);
    if (
      this.$route.params.type &&
      (this.$route.params.type === "sales" ||
        this.$route.params.type === "rental")
    ) {
      this.reportType = this.$route.params.type;
    }
  },
  methods: {
    onCreate() {
      this.form.type = this.reportType;
      this.$store.dispatch("report/addReport", this.form, this.reportType);
      this.$router.push({
        name: "reports-list"
      });
    },
    onUpdate() {
      // evt.preventDefault();
      this.$store.dispatch("report/updateReport", this.form);
      this.$router.push({
        name: "reports-list"
      });
    }
  },
  computed: {}
};
</script>
