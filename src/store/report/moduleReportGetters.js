export default {
  getReport: state => reportId =>
    state.reports.find(report => report.report.id == reportId),

  getReports: state => state.reports
};
