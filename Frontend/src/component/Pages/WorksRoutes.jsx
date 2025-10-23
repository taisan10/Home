


import WorksData from "./CaseStudy/index/WorksData";
import WorkDetail from "./CaseStudy/index/WorksPage";


export const Works = WorksData.map((item) => ({
  path: `/work/${item.slug}`,
  element: <WorkDetail />,
}));








// export const Works = WorksData.map((item) => ({
//   path: `/Work/${encodeURIComponent(item.name)}`,
//   element: <WorkDetail />,
// }));