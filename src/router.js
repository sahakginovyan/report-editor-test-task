import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        {
          path: "/",
          name: "reports-list-default",
          component: () => import("./views/pages/reports/ReportsList.vue")
        },
        {
          path: "/reports-list/:page?",
          name: "reports-list",
          component: () => import("./views/pages/reports/ReportsList.vue")
        },
        {
          path: "/select-new-report-type",
          name: "select-new-report-type",
          component: () =>
            import("./views/pages/reports/SelectNewReportType.vue")
        },
        {
          path: "/create-report/:type",
          name: "create-report",
          component: () =>
            import("./views/pages/reports/CreateUpdateReport.vue")
        },
        {
          path: "/reports/:id",
          name: "update-report",
          component: () =>
            import("./views/pages/reports/CreateUpdateReport.vue")
        },
        {
          path: "/error-404",
          name: "error-404",
          component: () => import("./views/pages/Error404/Error404.vue")
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/error-404"
    }
  ]
});

// router.afterEach(() => {});

// router.beforeEach((to, from, next) => {
//
// });

export default router;
