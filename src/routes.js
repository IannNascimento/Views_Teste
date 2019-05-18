import Dashboard from "views/Dashboard.jsx";
import Cent_Cadastros from "views/Cent_Cadastros.jsx";
import Teste from "views/Teste/Teste.jsx";
import Teste2 from "views/Teste/Teste2.jsx";
import Teste3 from "views/Teste/Teste3.jsx";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/cadastros",
    layout: "/admin",
    name: "Central de Cadastros",
    icon: "fa far fa-address-card",
    component: Cent_Cadastros
  },
  {
    collapse: true,
    path: "/testes",
    name: "Teste",
    state: "openPages",
    icon: "fa fa-user-plus",
    views: [
      {
        path: "/teste",
        layout: "/admin",
        name: "Teste",
        icon: "fa fa-user-plus",
        component: Teste
      },
      {
        path: "/teste2",
        layout: "/admin",
        name: "Teste 2",
        icon: "fa fa-user-plus",
        component: Teste2
      },
      {
        path: "/teste3",
        layout: "/admin",
        name: "Teste 3",
        icon: "fa fa-user-plus",
        component: Teste3
      }
    ]
  }
];
export default routes;
