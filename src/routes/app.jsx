import UserProfile from "views/UserProfile/UserProfile.jsx";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import TauxActiviteMensuel from "views/TauxActiviteMensuel/TauxActiviteMensuel.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/taux-act-mens",
    sidebarName: "Taux d'activité mensuel",
    navbarName: "TAUX D'ACTIVITE MENSUEL",
    icon: Dashboard,
    component: TauxActiviteMensuel
  },
  {
    path: "/chrg-poids-emp",
    sidebarName: "Charge et poids par emplois",
    navbarName: "CHARGE ET POIDS PAR EMPLOIS",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/20-tach-lourde",
    sidebarName: "20 tâches les plus lourdes",
    navbarName: "20 TACHES LES PLUS LOURDES",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/chrg-poids-tache-emp",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/chrg-poids-proc",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/chrg-poids-tachproc",
    sidebarName: "CHARGE POIDS TACHE PROCESSUS",
    navbarName: "CHARGE POIDS TACHE PROCESSUS",
    icon: LocationOn,
    component: Maps
  },

  {
    redirect: true,
    path: "/",
    to: "/chrg-poids-tachproc",
    navbarName: "Redirect"
  }
];

export default appRoutes;
