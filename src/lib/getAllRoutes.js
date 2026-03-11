import { megaMenuData } from "@/data/megaMenuData";

export function getAllRoutes(type) {
      const routes = [];
      const items = megaMenuData[type];

      items.forEach((category) => {

            // services & solutions structure
            if (category.subTabs) {
                  category.subTabs.forEach((tab) => {
                        tab.columns.forEach((col) => {
                              col.links.forEach((link) => {
                                    routes.push({
                                          slug: link.href.split("/").pop(),
                                          label: link.label,
                                          href: link.href,
                                    });
                              });
                        });
                  });
            }

            // industries structure
            if (category.columns) {
                  category.columns.forEach((col) => {
                        col.links.forEach((link) => {
                              routes.push({
                                    slug: link.href.split("/").pop(),
                                    label: link.label,
                                    href: link.href,
                              });
                        });
                  });
            }

      });

      return routes;
}