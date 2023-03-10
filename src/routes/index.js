import Home from "../components/pages/Home";
import Following from "../components/pages/Following";
import Profile from "../components/pages/Profile";
import Upload from "../components/pages/Upload";
import { HeaderUpload } from "../components/Layout";
import Search from "../components/pages/Search";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/Search", component: Search },
  { path: "/upload", component: Upload, layout: HeaderUpload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
